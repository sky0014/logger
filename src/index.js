//log开关
let enable = false;
let prefix = [];

export function setEnable(value) {
  enable = value;
}

export function setPrefix(value) {
  if (typeof value === "string") {
    value = [value];
  }
  prefix = value;
}

export function initLogger({ enable = false, prefix = [] } = {}) {
  setEnable(enable);
  setPrefix(prefix);
}

function customize(logFunc, ...tags) {
  return (...args) => {
    if (enable) {
      logFunc.call(console, ...prefix, ...tags, ...args);
    }
  };
}

export function makeLogger(...tags) {
  return {
    log: customize(console.log, ...tags),
    debug: customize(console.debug, ...tags),
    info: customize(console.info, ...tags),
    warn: customize(console.warn, ...tags),
    error: customize(console.error, ...tags),
  };
}

export default makeLogger();
