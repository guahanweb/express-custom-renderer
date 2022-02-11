import { ExpressRenderer } from "./express-renderer";

export { ExpressRenderer };

export type ConfigOptions = {
    extname?: string;
    encoding?: string;
    layoutsDir?: string|undefined;
    partialsDir?: string|undefined;
    defaultLayout?: string;
    helpers?: any; // tbd
    compilerOptions?: any;
    runtimeOptions?: any;
}

export type Engine = {

}

export type FsCache = {

}

export type CompiledCache = {

}

export type PrecompiledCache = {

}

export function create (config: ConfigOptions = {}): ExpressRenderer {
	return new ExpressRenderer(config);
}

export function engine (config: ConfigOptions = {}): Engine {
	return create(config).engine;
}