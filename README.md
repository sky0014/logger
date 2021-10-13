# logger

A simple logger for js.

## Install

```bash
npm install @sky0014/logger
```

## Usage

```js
import logger, { createLogger } from "@sky0014/logger";

// default logger, for most common use
logger.initLogger({
  enable: true,
  prefix: "easystore",
});

logger.log("hello there"); // [easystore] hello there

// isolated from default logger, for library use
const anotherLogger = createLogger();

anotherLogger.initLogger({
  enable: true,
  prefix: "another",
});

anotherLogger.log("hello there"); // [another] hello there
```

## Publish

If your first time publish a package, login first:

```bash
npm login --registry=https://registry.npmjs.org
```

Then you can publish:

```bash
npm run pub
```
