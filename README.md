# logger

A simple logger for js.

## Install

```bash
npm install @sky0014/logger
```

## Usage

```js
import logger from "@sky0014/logger";

logger.initLogger({
  enable: true,
  prefix: "easystore",
});

logger.log("hello there"); // [easystore] hello there
```

## Publish

If your first time publish a package, login first:

```bash
npm login --registry=http://registry.npmjs.org
```

Then you can publish:

```bash
npm run pub
```
