"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpressRenderer = exports.defaultConfig = void 0;
exports.defaultConfig = {
    extname: '.template',
    encoding: 'utf8',
    layoutsDir: undefined,
    partialsDir: undefined,
    defaultLayout: 'main',
    helpers: undefined,
    compilerOptions: undefined,
    runtimeOptions: undefined
};
var ExpressRenderer = /** @class */ (function () {
    function ExpressRenderer(config) {
        // config proerties with defaults
        Object.assign(this, exports.defaultConfig, config);
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
    return ExpressRenderer;
}());
exports.ExpressRenderer = ExpressRenderer;
//# sourceMappingURL=express-renderer.js.map