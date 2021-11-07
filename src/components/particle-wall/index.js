/* eslint-disable no-console */
import React, { PureComponent } from 'react';
import bindAll  from 'lodash.bindall';

import * as d3 from "d3";
import { withRouter } from 'react-router';

import Particle , { search } from "../../lib/particle";
import Vector from '../../lib/vector';
import timerFPS from "../../lib/timer";

import styles from './styles.scss';

const WIDTH_BOUNDARY = 25;
const MAX_VELOCITY = 0.045;

const PARTICLE_DENSITY = 0.0005;
const MAX_PARTICLES = 350;
const MIN_PARTICLES = 125;

const PARTICLE_COLOR = "#81F4E1";
const TAU = 2 * Math.PI;

const LINK_LENGTH = 225;
const MAX_LINK_WIDTH = 3;
const MOUSE_BOUNDARY = 350;
const MAX_PARTICLE_SIZE = 14;
const MIN_PARTICLE_SIZE = 4;

const MAX_FPS = 30;
const SPEED = 1;

const THROTTLED_FPS = 15;
const THROTTLE_SPEED = 0.5;

const PIXEL_RESOLUTION = 2; 


function clamp(val, minVal, maxVal) {
  return Math.min(Math.max(minVal, val), maxVal);
}

function randomX(width) {
  // clipping so particles don't end up on the edge of wall
  return clamp(width *  Math.random(), WIDTH_BOUNDARY, width - WIDTH_BOUNDARY);
}

function randomY(height) {
  // y boundary goes LINK_LENGTH above and below window viewbox
  // so place a few particles there
  return (height + 2*LINK_LENGTH) *  Math.random() - LINK_LENGTH;
}

function randomVel () {
  return new Vector(0, MAX_VELOCITY * 2 * (Math.random() - 0.5));
}

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

      particle.setVel(randomVel().mult(PIXEL_RESOLUTION));
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

      const oldY = p.pos.y;

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

      p.setPos(new Vector(p.pos.x, newY));

      if (newY > -MAX_PARTICLE_SIZE && newY < this.canvas.height + MAX_PARTICLE_SIZE) {
        ctx.beginPath();
        ctx.arc(p.pos.x, p.pos.y, p.r, 0, TAU);
        ctx.fill();
      }
    }
  }

  drawLinks(ctx) {
    // O(n*log(n)) runtime :O using a quadtree (instead of regular O(n^2))
    // did this because performance was bad on Safari and some mobile browsers
    // quadtree constuction is also O(n) (i think)
    const quadtree = d3.quadtree()
      .x(d => d.pos.x)
      .y(d => d.pos.y)
      .addAll(this.state.particles);
      
    for (var i = 0; i < this.numParticles; ++i) {
      const p1 = this.state.particles[i];
      let x = p1.pos.x;
      let y = p1.pos.y;

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
            ctx.moveTo(p1.pos.x, p1.pos.y);
            ctx.lineTo(p2.pos.x, p2.pos.y);
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
