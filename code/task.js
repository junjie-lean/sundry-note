console.log("1"); //task1
setTimeout(function() {
  //task2
  console.log("2");
  process.nextTick(function() {
    console.log("3");
  });
  new Promise(function(resolve) {
    console.log("4");
    resolve();
  }).then(function() {
    console.log("5");
  });
}, 4);

new Promise(function(resolve) {
  //task3
  console.log("6");
  resolve();
}).then(function() {
  console.log("7");
});
process.nextTick(function() {
  //task4
  console.log("8");
});
setImmediate(() => {
  //task5
  console.info("9");
});
new Promise(function(resolve) {
  //task6
  console.log("10");
  resolve();
}).then(function() {
  console.log("11");
});

setTimeout(function() {
  //task7
  console.log("12");
  setImmediate(() => {
    console.info("13");
  });
  process.nextTick(function() {
    console.log("14");
  });
  new Promise(function(resolve) {
    console.log("15");
    resolve();
  }).then(function() {
    console.log("16");
  });
});

process.nextTick(function() {
  //task8
  console.log("17");
});
