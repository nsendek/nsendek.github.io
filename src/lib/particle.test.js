import Particle from "./particle"

test('expect particle at (69,420)', () => {
  const particle = new Particle(69,420);
  expect(particle.pos.x).toBe(69);
  expect(particle.pos.y).toBe(420);
});