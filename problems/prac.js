

function batchTimeouts(callbacks, delays, i = 0, timeoutObjs = []) {
  if (i >= callbacks.length) {
    return timeoutObjs;
  }

  let timeout = setTimeout(() => {
    callbacks[i]();
  }, delays[i]);


  timeoutObjs.push(timeout); // Push the timeout object here

  return batchTimeouts(callbacks, delays, i + 1, timeoutObjs); // Recursive call
}


// function batchTimeouts(callbacks, delays) {
//       let timeoutObjs = [];
//       for (let i=0; i < callbacks.length; i++) {
//         let timeout = setTimeout(callbacks[i], delays[i]);
//         timeoutObjs.push(timeout);
//       }
//       return timeoutObjs;
// }

// Examples:
  const sayHello = () => console.log('hi');
  const sayGoodbye = () => console.log('bye');
  const shout = () => console.log('WHAT?');
  const tasks = [sayHello, sayGoodbye, shout];
  const delays = [500, 200, 900];

  const timeoutObjs = batchTimeouts(tasks, delays);

  // Output:
  // 'bye' after 200 ms
  // 'hi' after 500 ms
  // 'WHAT?' after 900 ms

  console.log(timeoutObjs); // [ Timeout {...},  Timeout {...}, Timeout {...} ]
