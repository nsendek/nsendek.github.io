function Vector(x, y) {
  this.x = x;
  this.y = y;
}

Vector.prototype.sub = function (b) {
  if (b instanceof Vector) {
    return new Vector( this.x - b.x, this.y - b.y );
  } else {
    return this;
  }
}

Vector.prototype.add = function (b) {
  if (b instanceof Vector) {
    return new Vector( this.x + b.x, this.y + b.y );
  } else {
    return this;
  }
}

Vector.prototype.mult = function (b) {
  if (typeof b == 'number') {
    return new Vector( this.x * b, this.y * b );
  } else {
    return this;
  }
}

Vector.prototype.mag = function () {
  return Math.sqrt(Math.pow(this.x,2) + Math.pow(this.y,2));
}

Vector.prototype.normalize = function () {
  const mag = this.mag();
  this.x = this.x/mag;
  this.y = this.y/mag;
}

export default Vector;
