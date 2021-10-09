//log开关
let enable = false;
let prefix = [];

function setEnable(value) {
  enable = value;
}

function wrap(array) {
  return array.map((v) => `[${v}]`);
}

function setPrefix(value) {
  if (typeof value === "string") {
    value = [value];
  }
  prefix = wrap(value);
}

function initLogger({ enable = false, prefix = [] } = {}) {
  setEnable(enable);
  setPrefix(prefix);
}

function customize(logFunc, ...tags) {
  tags = wrap(tags);
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
    initLogger,
    setEnable,
    setPrefix,
  };
}

const logger = makeLogger();

export default logger;
