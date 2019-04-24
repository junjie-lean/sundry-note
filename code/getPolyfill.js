const http = require("https");
const fs = require("fs");
const stream = require("stream");

let data = "";

http
  .get("https://cdn.polyfill.io/v3/polyfill.js", res => {
    console.log("状态码:", res.statusCode);
    console.log("请求头:", res.headers);

    res.on("data", thunk => {
      data += thunk.toString("utf8");
      console.log(thunk.toString("utf8"));
    });

    res.on("end", () => {
      fs.writeFile("./polyfill.js", data, () => {
        console.log("write file down");
      });
    });
  })
  .on("error", err => {
    console.error("出现错误");
    console.error(err.message);
  });
