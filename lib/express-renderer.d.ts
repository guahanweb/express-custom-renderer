import type { ConfigOptions, CompiledCache, Engine, FsCache, PrecompiledCache } from './index';
export declare const defaultConfig: ConfigOptions;
export declare class ExpressRenderer {
    _fsCache: FsCache;
    config: ConfigOptions;
    engine: Engine;
    extname: string;
    compiled: CompiledCache;
    precompiled: PrecompiledCache;
    constructor(config: ConfigOptions);
}
