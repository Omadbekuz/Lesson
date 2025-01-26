// const os = require("os");

import os from "os";

class OS {
  async ram() {
    return {
      total: os.totalmem() / 1024 / 1024 / 1024,
      free: os.freemem() / 1024 / 1024 / 1024,
    };
  }
  async cpus() {
    return os.cpus();
  }
  async totalmem() {
    return os.totalmem();
  }

  async freemem() {
    return os.freemem();
  }
  async userinfo() {
    return os.userInfo();
  }
  async platform() {
    return os.platform();
  }
}

export default new OS();
