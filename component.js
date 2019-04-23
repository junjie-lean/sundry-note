var a = (txt = "真香!") => {
  console.log("function a say:", txt);
  return a;
};

// a("香不香？")("真香！")("可我不觉得香")("那你就是有病");

// b()("那你错了");

var o = {
  say: (txt = "真香") => {
    console.log("链式调用", txt);
    // console.log(this);
    return o;
  }
};

o.say().say("真的香吗？").say("确实香！")
