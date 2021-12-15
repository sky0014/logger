export function createLogger(): {
    log: (...args: any[]) => void;
    debug: (...args: any[]) => void;
    info: (...args: any[]) => void;
    warn: (...args: any[]) => void;
    error: (...args: any[]) => void;
    initLogger: ({ enable, prefix }?: {
        enable?: boolean;
        prefix?: any[];
    }) => void;
    setEnable: (value: any) => void;
    setPrefix: (value: any) => void;
    makeLogger: (...tags: any[]) => any;
};
export function makeLogger(...tags: any[]): {
    log: (...args: any[]) => void;
    debug: (...args: any[]) => void;
    info: (...args: any[]) => void;
    warn: (...args: any[]) => void;
    error: (...args: any[]) => void;
    initLogger: ({ enable, prefix }?: {
        enable?: boolean;
        prefix?: any[];
    }) => void;
    setEnable: (value: any) => void;
    setPrefix: (value: any) => void;
    makeLogger: (...tags: any[]) => any;
};
export default logger;
declare namespace logger {
    export function log(...args: any[]): void;
    export function debug(...args: any[]): void;
    export function info(...args: any[]): void;
    export function warn(...args: any[]): void;
    export function error(...args: any[]): void;
    export { initLogger };
    export { setEnable };
    export { setPrefix };
    export { makeLogger };
}
declare function initLogger({ enable, prefix }?: {
    enable?: boolean;
    prefix?: any[];
}): void;
declare function setEnable(value: any): void;
declare function setPrefix(value: any): void;
