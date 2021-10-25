/* eslint-disable no-console */
import Vector from "./vector.js";

class Particle {
  constructor(x, y, radius = 5) {
    this.pos = new Vector(x, y);
    this.vel = new Vector(0, 0);
    this.acc = new Vector(0, 0);
  
    this.r = radius;
  }

  /**
   * @param {Vector} p
   */
  setPos(p) {
    this.pos = p;
  }

  /**
   * @param {Vector} v 
   */
  setVel(v) {
    this.vel = v;
  }

  /**
   * @param {Vector} a
   */
  setAcc(a) {
    this.acc = a;
  }

  /**
   * @param {Number} r
   */
  setRad(r) {
    this.r = r
  }

  update() {
    this.pos = this.pos.add(this.vel);
    this.vel = this.vel.add(this.acc);
  }

  dist(other) {
    if (other instanceof Vector) {
      return this.pos.sub(other).mag();
    } else {
      return this.pos.sub(other.pos).mag();
    }
  }
}

export default Particle;