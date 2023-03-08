export function createLogger() {
  //log开关
  let enable = false;
  let prefix: string[] = [];

  function setEnable(value: boolean) {
    enable = value;
  }

  function wrap(array: string[]) {
    return array.map((v) => `[${v}]`);
  }

  function setPrefix(value: string | string[]) {
    if (typeof value === "string") {
      value = [value];
    }
    prefix = wrap(value);
  }

  function initLogger(
    {
      enable = false,
      prefix = [],
    }: { enable: boolean; prefix: string | string[] } = {
      enable: false,
      prefix: [],
    }
  ) {
    setEnable(enable);
    setPrefix(prefix);
  }

  function customize(logFunc: (...data: any[]) => void, ...tags: string[]) {
    tags = wrap(tags);
    return (...args: any[]) => {
      if (enable) {
        logFunc.call(console, ...prefix, ...tags, ...args);
      }
    };
  }

  function makeLogger(...tags: string[]) {
    return {
      log: customize(console.log, ...tags),
      debug: customize(console.debug, ...tags),
      info: customize(console.info, ...tags),
      warn: customize(console.warn, ...tags),
      error: customize(console.error, ...tags),
      initLogger,
      setEnable,
      setPrefix,
      makeLogger,
    };
  }

  return makeLogger();
}

const logger = createLogger();

export const { makeLogger } = logger;

export default logger;
