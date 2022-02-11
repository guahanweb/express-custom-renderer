import { ExpressRenderer } from "./express-renderer";
export { ExpressRenderer };
export declare type ConfigOptions = {
    extname?: string;
    encoding?: string;
    layoutsDir?: string | undefined;
    partialsDir?: string | undefined;
    defaultLayout?: string;
    helpers?: any;
    compilerOptions?: any;
    runtimeOptions?: any;
};
export declare type Engine = {};
export declare type FsCache = {};
export declare type CompiledCache = {};
export declare type PrecompiledCache = {};
export declare function create(config?: ConfigOptions): ExpressRenderer;
export declare function engine(config?: ConfigOptions): Engine;
