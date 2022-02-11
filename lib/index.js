"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.engine = exports.create = exports.ExpressRenderer = void 0;
var express_renderer_1 = require("./express-renderer");
Object.defineProperty(exports, "ExpressRenderer", { enumerable: true, get: function () { return express_renderer_1.ExpressRenderer; } });
function create(config) {
    if (config === void 0) { config = {}; }
    return new express_renderer_1.ExpressRenderer(config);
}
exports.create = create;
function engine(config) {
    if (config === void 0) { config = {}; }
    return create(config).engine;
}
exports.engine = engine;
//# sourceMappingURL=index.js.map