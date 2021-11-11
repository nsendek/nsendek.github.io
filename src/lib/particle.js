/* eslint-disable no-console */
import Vector from "./vector.js";

let serial = 0;

/**
 * @typedef Particle
 * @prop {Number} id - serial ID of the particle.
 * @prop {Vector} pos - position.
 * @prop {Vector} vel - velocity.
 * @prop {Vector} acc - acceleration.
 * @prop {Number} r - radius of the particle.
 * @prop {Number} timestamp - timestamp of last update ( from Date.now() or performance.now())
 */
class Particle {
  constructor(x, y, radius = 5) {
    this.id = serial;
    this.pos = new Vector(x, y);
    this.vel = new Vector(0, 0);
    this.acc = new Vector(0, 0);
  
    this.r = radius;
    this.timestamp = null;

    serial++;
  }

  get x() {
    return this.pos.x;
  }

  get y() {
    return this.pos.y;
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
   * @param {Number} r - new radius of the particle
   */
  setSize(r) {
    this.r = r
  }

  update(elapsed, boost = 1) {
    if (this.timestamp && elapsed > this.timestamp) {
      const dt = boost * (elapsed - this.timestamp); 

      this.pos = this.pos.add(this.vel.mult(dt));
      this.vel = this.vel.add(this.acc.mult(dt));
    }
    this.timestamp = elapsed;
  }

  dist(other) {
    if (other instanceof Vector) {
      return this.pos.sub(other).mag();
    } else {
      return this.pos.sub(other.pos).mag();
    }
  }
}

/**
 * https://github.com/d3/d3-quadtree#quadtree_visit
 * 
 * @param {d3.Quadtree} quadtree 
 * @param {Number} xmin 
 * @param {Number} ymin 
 * @param {Number} xmax 
 * @param {Number} ymax 
 * @returns {Particle[]}
 */
function search(quadtree, xmin, ymin, xmax, ymax) {
  const results = [];
  quadtree.visit((node, x1, y1, x2, y2) => {
    if (!node.length) {
      do {
        let d = node.data;
        let x = d.pos.x;
        let y = d.pos.y;
        if (x >= xmin && x < xmax && y >= ymin && y < ymax) {
          results.push(d);
        }
      } while (node = node.next);
    }
    return x1 > xmax || y1 > ymax || x2 < xmin || y2 < ymin;
  });
  return results;
}

export {
  Particle as default,
  search
};