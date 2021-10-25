/* eslint-disable no-console */
import React, { PureComponent } from 'react';
import styles from './index.scss';
import * as d3 from "d3";
import Particle from "../../lib/particle";
import Vector from '../../lib/vector';

const WALL_BOUNDARY = 25;
const MAX_VELOCITY = 1;
const TOTAL_PARTICLES = 250; // 250 particles for desktop, 75 maybe 100? for mobile?
const PARTICLE_COLOR = "#81F4E1";
const TAU = 2 * Math.PI;

const LINK_LENGTH = 250;
const LINE_WIDTH = 2;
const MOUSE_BOUNDARY = 300;
const MAX_PARTICLE_SIZE = 12;
const MIN_PARTICLE_SIZE = 3;

class ParticleWall extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      timer : null,
      particles : [],
      cursor : null
    };

    this.canvasRef = React.createRef();

    this.startTimer.bind(this);
    this.stopTimer.bind(this);
    this.update.bind(this);
    this.initParticles.bind(this);
  }
  /**
   * @returns {HTMLCanvasElement}
   */
  get canvas() {
    return this.canvasRef.current;
  }

  componentDidMount() {
    this.canvas.width = 2 * this.canvas.offsetWidth;
    this.canvas.height = 2 * this.canvas.offsetHeight;

    this.initParticles();

    this.canvas.addEventListener('mouseout', () => this.setState({ cursor : null }));

    this.canvas.addEventListener('mousemove', (e) => 
      this.setState({ cursor : new Vector(
        2 * (e.offsetX || (e.originalEvent || {}).layerX),
        2 * (e.offsetY || (e.originalEvent || {}).layerY)
      )})
    );
  }

  componentWillUnmount() {
    this.state.timer.stop();
  }

  initParticles() {
    const randomX = () => {
      const x = this.canvas.width *  Math.random();
      // clipping so particles don't end up on the edge of wall
      return Math.min(Math.max(WALL_BOUNDARY, x), this.canvas.width - WALL_BOUNDARY);
    }
    const randomY = () => {
      // y boundary goes LINK_LENGTH above and below window viewbox
      // so place a few particles there
      return (this.canvas.height + 2*LINK_LENGTH) *  Math.random() - LINK_LENGTH;
    }
    const randomVel = () => new Vector(0, MAX_VELOCITY * 2 * (Math.random()- 0.5));

    const particles = [];

    for (let i = 0 ; i < TOTAL_PARTICLES; i++) {
      const particle = new Particle(randomX(), randomY(), MIN_PARTICLE_SIZE);
      particle.setVel(randomVel());
      particles.push(particle);
    }

    this.setState({particles}, this.startTimer);
  }
  
  startTimer() {
    this.setState({ timer : d3.timer(() => this.update()) });
  }

  stopTimer() {
    this.state.timer.stop();
  }

  update() {
    const ctx = this.canvas.getContext('2d');

    ctx.fillStyle = PARTICLE_COLOR;
    ctx.strokeStyle = PARTICLE_COLOR;
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    ctx.globalAlpha = 1;

    // draw particles (update position and change radiu based on mouse proximity)
    for (let i = 0 ; i < TOTAL_PARTICLES; i++) {
      const p = this.state.particles[i];
      p.update();
       
      const newY = ( p.pos.y > (this.canvas.height + LINK_LENGTH) )
        ? -LINK_LENGTH
        : ( p.pos.y < -LINK_LENGTH )
          ? this.canvas.height + LINK_LENGTH
          : p.pos.y;

      const cursor = this.state.cursor;

      if (cursor && p.dist(cursor) < MOUSE_BOUNDARY) {
        const boost = (MAX_PARTICLE_SIZE-MIN_PARTICLE_SIZE) * (1-(p.dist(cursor)/MOUSE_BOUNDARY));
        p.setRad(MIN_PARTICLE_SIZE + boost);
      } else {
        p.setRad(MIN_PARTICLE_SIZE);
      }

      p.setPos(new Vector(p.pos.x, newY));

      ctx.beginPath();
      ctx.arc(p.pos.x, p.pos.y, p.r, 0, TAU);
      ctx.fill();
    }

    // draw links
    for (var i = 0; i < TOTAL_PARTICLES; ++i) {
      for (var j = i + 1; j < TOTAL_PARTICLES; ++j) {
        const p1 = this.state.particles[i];
        const p2 = this.state.particles[j];
        const dist = p1.dist(p2);
        
        if (dist < LINK_LENGTH) {
          let factor = (LINK_LENGTH-dist)/LINK_LENGTH;
          ctx.globalAlpha = factor;
          ctx.lineWidth = LINE_WIDTH*factor;
          ctx.beginPath();
          ctx.moveTo(p1.pos.x, p1.pos.y);
          ctx.lineTo(p2.pos.x, p2.pos.y);
          ctx.stroke();
        }
      }
    }
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

export default ParticleWall;
