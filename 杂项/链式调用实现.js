"use static";
var f = (txt = "真香!") => {
  console.log("函数链调用:", txt);
  return f;
};

f("香不香？")("真香！")("可我不觉得香")("那你就是有病");

let o = {
  count: 0,
  say: (txt = "真香") => {
    console.log("链式调用:", txt);
    return o;
  }
};
o.say(1)
  .say(2)
  .say(3)
  .say(4)
  .say(5);
