export declare function createLogger(): {
    log: (...args: any[]) => void;
    debug: (...args: any[]) => void;
    info: (...args: any[]) => void;
    warn: (...args: any[]) => void;
    error: (...args: any[]) => void;
    initLogger: ({ enable, prefix, }?: {
        enable: boolean;
        prefix: string | string[];
    }) => void;
    setEnable: (value: boolean) => void;
    setPrefix: (value: string | string[]) => void;
    makeLogger: (...tags: string[]) => any;
};
declare const logger: {
    log: (...args: any[]) => void;
    debug: (...args: any[]) => void;
    info: (...args: any[]) => void;
    warn: (...args: any[]) => void;
    error: (...args: any[]) => void;
    initLogger: ({ enable, prefix, }?: {
        enable: boolean;
        prefix: string | string[];
    }) => void;
    setEnable: (value: boolean) => void;
    setPrefix: (value: string | string[]) => void;
    makeLogger: (...tags: string[]) => any;
};
export declare const makeLogger: (...tags: string[]) => {
    log: (...args: any[]) => void;
    debug: (...args: any[]) => void;
    info: (...args: any[]) => void;
    warn: (...args: any[]) => void;
    error: (...args: any[]) => void;
    initLogger: ({ enable, prefix, }?: {
        enable: boolean;
        prefix: string | string[];
    }) => void;
    setEnable: (value: boolean) => void;
    setPrefix: (value: string | string[]) => void;
    makeLogger: (...tags: string[]) => any;
};
export default logger;
