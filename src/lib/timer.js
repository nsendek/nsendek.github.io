import { now , timer } from "d3";

function timerFPS(callback, fps) {
  let time0 = now();
  let fpsInterval = 1000/fps;

  // let frames = 0;
  // let lastSec = time0;

  /*
  Why I used d3.timer or requestAnimationFrame over d3.interval or setInterval?
  https://css-tricks.com/snippets/javascript/replacements-setinterval-using-requestanimationframe/
  https://stackoverflow.com/questions/19764018/controlling-fps-with-requestanimationframe
  */
  let t = timer(
    (elapsed) => {
      let time1 = now();

      // if (time1-lastSec > 1000) {
      //   lastSec = time1;
      //   console.log(frames);
      //   frames = 0;
      // }

      if ((time1 - time0) > fpsInterval) {
        time0 = time1 - (time1 - time0) % fpsInterval;
        callback(elapsed);
        // frames ++;
      }
    })

  return {
    stop : () => t.stop(),
    setFPS : (fps) => {
      fpsInterval = 1000/fps;
    },
    restart : () => t.restart(callback)
  }
}

export default timerFPS;
