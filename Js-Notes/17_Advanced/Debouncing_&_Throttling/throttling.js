/* 

Throttling is a technique used to limit the execution of a function to once per specified time interval,
no matter how many times the event is triggered.

When to Use Throttling
- Scroll events (limit executions for performance).
- Resizing the window (avoid unnecessary recalculations).
- Button clicks (prevent multiple rapid clicks).
- API polling (send requests at fixed intervals).
*/

// Usecase:-  If we submit a form and we double click the submit button then in database two times the data will save.
// So we will make a functionality that after clicking a button it will take few seconds to execute the save function.

function myThrottle(func, d) {
  return function (...args) {
    document.getElementById("saveBtn").disabled = true;
    setTimeout(() => {
      func();
    }, d);
  };
}

const saveData = myThrottle(() => {
  console.log("Data is saved");
}, 5000);
