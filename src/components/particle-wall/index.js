/* eslint-disable no-console */
import React, { PureComponent } from 'react';
import bindAll  from 'lodash.bindall';

import * as d3 from "d3";
import { withRouter } from 'react-router';

import Particle , { search } from "../../lib/particle";
import Vector from '../../lib/vector';
import timerFPS from "../../lib/timer";

import styles from './styles.scss';

import {
  PARTICLE_DENSITY,
  MAX_PARTICLES,
  MIN_PARTICLES,
  PARTICLE_COLOR,
  TAU,
  LINK_LENGTH,
  MAX_LINK_WIDTH,
  MOUSE_BOUNDARY,
  MAX_PARTICLE_SIZE,
  MIN_PARTICLE_SIZE,
  MAX_FPS,
  SPEED,
  THROTTLED_FPS,
  THROTTLE_SPEED,
  PIXEL_RESOLUTION,
  clamp,
  randomX,
  randomY,
  randomVel
} from "./constants.js";

class ParticleWall extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      timer : null,
      particles : []
    };

    // cursor && numParticles variables do not need to ever trigger render update
    this.boost = props.location.pathname == "/" ? SPEED : THROTTLE_SPEED;
    this.cursor = null;
    this.numParticles = 0;
    
    this.canvasRef = React.createRef();

    bindAll(this,[
      'createParticles',
      'startTimer',
      'update',
      'drawParticles',
      'drawLinks'
    ]);
  }

  /**
   * @returns {HTMLCanvasElement}
   */
  get canvas() {
    return this.canvasRef.current;
  }

  componentDidMount() {
    // double pixel resolution because you can
    this.canvas.width = PIXEL_RESOLUTION * this.canvas.offsetWidth;
    this.canvas.height = PIXEL_RESOLUTION * this.canvas.offsetHeight;

    this.numParticles = clamp(
      Math.floor(PARTICLE_DENSITY * this.canvas.offsetHeight*this.canvas.offsetWidth),
      MIN_PARTICLES,
      MAX_PARTICLES
    );

    this.createParticles();
    this.startTimer();

    this.canvas.addEventListener('mouseout', () => this.cursor = null);

    this.canvas.addEventListener('mousemove', (e) =>
      this.cursor = new Vector(
        2 * (e.offsetX || (e.originalEvent || {}).layerX || 0),
        2 * (e.offsetY || (e.originalEvent || {}).layerY || 0)
      )
    );
  }

  componentWillUnmount() {
    this.state.timer.stop();
  }

  componentDidUpdate(prevProps) {
    const currentLocation = this.props.location;
    const prevLocation = prevProps.location;

    if (prevLocation.pathname != currentLocation.pathname) {
      if(this.state.timer) {
        if (currentLocation.pathname != "/"){
          this.state.timer.setFPS(THROTTLED_FPS);
          this.boost = THROTTLE_SPEED;
          // this.state.timer.stop();
        } else {
          this.state.timer.setFPS(MAX_FPS);
          this.boost = SPEED;
          // this.state.timer.restart();
        }
      }
    }
  }

  createParticles() {
    const particles = [];

    for (let i = 0 ; i < this.numParticles; i++) {
      let x = randomX(this.canvas.width),
        y = randomY(this.canvas.height);

      const particle = new Particle(x, y, MIN_PARTICLE_SIZE);

      particle.setVel(new Vector(0, randomVel() * PIXEL_RESOLUTION));
      particles.push(particle);
    }

    this.setState({particles});
  }

  /**
   * timer is at throttled frame rate up to MAX_FPS and updates particles
   */
  startTimer() {
    this.setState({
      timer : 
        timerFPS(
          (elapsed) => this.update(elapsed), 
          this.props.location.pathname == "/" ? MAX_FPS : THROTTLED_FPS
        )
    });
  }

  drawParticles(ctx, elapsed) {
    ctx.globalAlpha = 1;

    // (update position and change radius based on mouse proximity)
    for (let i = 0 ; i < this.numParticles; i++) {
      const p = this.state.particles[i];
      p.update(elapsed, this.boost);

      const oldY = p.y;

      const newY = ( oldY > (this.canvas.height + LINK_LENGTH) )
        ? -LINK_LENGTH
        : ( oldY < -LINK_LENGTH )
          ? this.canvas.height + LINK_LENGTH
          : oldY;

      if (this.cursor && p.dist(this.cursor) < MOUSE_BOUNDARY) {
        const boost = (MAX_PARTICLE_SIZE-MIN_PARTICLE_SIZE) * (1-(p.dist(this.cursor) / MOUSE_BOUNDARY));
        p.setSize(MIN_PARTICLE_SIZE + boost);
      } else {
        p.setSize(MIN_PARTICLE_SIZE);
      }

      p.setPos(new Vector(p.x, newY));

      if (newY > -MAX_PARTICLE_SIZE && newY < this.canvas.height + MAX_PARTICLE_SIZE) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, TAU);
        ctx.fill();
      }
    }
  }

  drawLinks(ctx) {
    // O(n*log(n)) runtime :O using a quadtree (instead of regular O(n^2))
    // did this because performance was bad on Safari and some mobile browsers
    // quadtree constuction is also O(n) (i think)
    const quadtree = d3.quadtree()
      .x(d => d.x)
      .y(d => d.y)
      .addAll(this.state.particles);
      
    for (var i = 0; i < this.numParticles; ++i) {
      const p1 = this.state.particles[i];
      let x = p1.x;
      let y = p1.y;

      const neighbors = search(quadtree, x-LINK_LENGTH, y-LINK_LENGTH, x+LINK_LENGTH, y+LINK_LENGTH);
      const numNeighbors = neighbors.length;

      for (var j =  0; j < numNeighbors; ++j) {
        const p2 = neighbors[j];

        // particles are sorted by id so previous particles already matched with p1
        if (p2.id > p1.id) { 
          const dist = p1.dist(p2);

          if (dist < LINK_LENGTH) {
            let factor = 1 - dist / LINK_LENGTH;
            ctx.globalAlpha = factor;
            ctx.lineWidth = MAX_LINK_WIDTH * factor;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }
    }
  }

  update(elapsed) {
    const ctx = this.canvas.getContext('2d');
    ctx.fillStyle = PARTICLE_COLOR;
    ctx.strokeStyle = PARTICLE_COLOR;
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);  
    this.drawParticles(ctx, elapsed);
    this.drawLinks(ctx);
  }

  render() {
    return (
      <div className={styles.wallContainer}>
        <div className={styles.relativeContainer}>
          <canvas ref={this.canvasRef} />
        </div>
      </div>
    );
  }
}

export default withRouter(ParticleWall);
