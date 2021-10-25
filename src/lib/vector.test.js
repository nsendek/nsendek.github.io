import Vector from "./vector"

test('expect point at (69,420)', () => {
  const point = new Vector(69,420);
  expect(point.x).toBe(69);
  expect(point.y).toBe(420);
});

test('expect vector to have correct magnitude ', () => {
  { 
    const v = new Vector(3,4);
    expect(v.mag()).toBe(5);
  }
  { 
    const v = new Vector(6,8);
    expect(v.mag()).toBe(10);
  }
});


test('test add operator', () => {
  const v = new Vector(3,5);
  const v2 = new Vector(9,15);
  const v3 = v.add(v2);
  const v3_ = v2.add(v);

  expect(JSON.stringify(v3_)).toBe(JSON.stringify(v3));
  expect(v3.x).toBe(12);
  expect(v3.y).toBe(20);
});

test('test mult operator', () => {
  const v = new Vector(5,5);
  const v5 = v.mult(5);
  expect(v5.x).toBe(25);
  expect(v5.y).toBe(25);
});
