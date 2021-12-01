export const WIDTH_BOUNDARY = 25,
  MAX_VELOCITY = 0.045,
  
  PARTICLE_DENSITY = 0.0005,
  
  MAX_PARTICLES = 350,
  MIN_PARTICLES = 125,

  PARTICLE_COLOR = "#81F4E1",
  TAU = 2 * Math.PI,

  LINK_LENGTH = 225,
  MAX_LINK_WIDTH = 3,
  MOUSE_BOUNDARY = 350,
  MAX_PARTICLE_SIZE = 14,
  MIN_PARTICLE_SIZE = 4,

  MAX_FPS = 30,
  SPEED = 1,

  THROTTLED_FPS = 15,
  THROTTLE_SPEED = 0.5,

  PIXEL_RESOLUTION = 2; 


export function clamp(val, minVal, maxVal) {
  return Math.min(Math.max(minVal, val), maxVal);
}

export function randomX(width) {
  // clipping so particles don't end up on the edge of wall
  return clamp(width *  Math.random(), WIDTH_BOUNDARY, width - WIDTH_BOUNDARY);
}

export function randomY(height) {
  // y boundary goes LINK_LENGTH above and below window viewbox
  // so place a few particles there
  return (height + 2*LINK_LENGTH) *  Math.random() - LINK_LENGTH;
}

export function randomVel () {
  return MAX_VELOCITY * 2 * (Math.random() - 0.5);
}