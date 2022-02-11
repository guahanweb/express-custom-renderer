import type {
    ConfigOptions,
    CompiledCache,
    Engine,
    FsCache,
    PrecompiledCache,
} from './index';

export const defaultConfig: ConfigOptions = {
    extname: '.template',
    encoding: 'utf8',
    layoutsDir: undefined,
    partialsDir: undefined,
    defaultLayout: 'main',
    helpers: undefined,
    compilerOptions: undefined,
    runtimeOptions: undefined
}

export class ExpressRenderer {
    _fsCache: FsCache;
    config: ConfigOptions;
    engine: Engine;
    extname: string;
    compiled: CompiledCache;
    precompiled: PrecompiledCache;

    constructor (config: ConfigOptions) {
        // config proerties with defaults
        Object.assign(this, defaultConfig, config);

        // save given config
        this.config = config;

        // template engine integration point
        // this.engine = this.renderView.bind(this);

        // normalize `extname`
        if (this.extname.charAt(0) !== '.') {
            this.extname = '.' + this.extname;
        }

        // internals
        this.compiled = {};
        this.precompiled = {};

        // private intern file system cache
        this._fsCache = {};
    }
}