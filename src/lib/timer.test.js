import timerFPS from "./timer.js";

test('default timer to have fps of 60', done => {
  let frames = 0;
  let time0 = performance.now();

  const time = timerFPS((elapsed) => { 
    frames++;

    let time1 = performance.now();

    if (time1-time0 > 1000) {
      expect(frames).toBe(60);
      done();
    }
  })
});