// const fs = require("fs");
// const path = require("path");
// const OS = require("./os");
// const os = require("./os");

// import fs from "fs";
// import path from "path";
// import os from "./os.js";
// import chalk from "chalk";

// fs.writeFileSync('hello.txt', 'Hello from Node.js!');
// fs.appendFileSync('hello.txt', 'Hello again!');

// const data = fs.readFileSync('hello.txt', 'utf-8');
// console.log(data);

// fs.unlinkSync('hello.txt'); // delete file

// const exsist = fs.existsSync('hello.txt');
// console.log(exsist); // true or false

// const file = path.join(__dirname, "data", "info.txt");
// console.log(file);

// setInterval(() => {
//   const data = new Date().toLocaleString("sv-SE");

//   if (fs.existsSync(file)) {
//     fs.appendFileSync(file, `${data}\n`);
//   } else {
//     fs.writeFileSync(file, `${data}\n`);
//   }
// }, 1000);

// console.log(os.cpus().length);

// console.log(os.totalmem());
// console.log(os.freemem());
// console.log(os.platform());
// console.log(os.userInfo());
// console.log(os.uptime());
// console.log(os.hostname());
// console.log(os.type());
// console.log(os.version());
// console.log(os.release());
// console.log(os.arch());
// console.log(os.homedir());
// console.log(os.networkInterfaces());

// console.log(OS.ram());

// os.ram()
//   .then((ram) => {
//     // console.log(ram);
//     console.log(chalk.blue(ram));

//   })
//   .catch((error) => {
//     console.log(error);
//   });

// (async () => {
//   const ram = await os.userinfo();
//   console.log(chalk.blue.bgRed("User info: "));
// })();

// server.mjs
import { createServer } from "node:http";
const port = 8080;

const server = createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello Omadbek\n");
});
// starts a simple http server locally on port 3000
server.listen(port, "127.0.0.1", () => {
  console.log(`Server running at localhost:${port}`);
});
// run with `node server.mjs'
// or 'node -- experimental-modules server.mjs'
