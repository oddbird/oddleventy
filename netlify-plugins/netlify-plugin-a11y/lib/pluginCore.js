"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateFilePaths = exports.runPa11y = void 0;
const tslib_1 = require("tslib");
const pa11y_1 = tslib_1.__importDefault(require("pa11y"));
const path_1 = require("path");
const path_type_1 = require("path-type");
const reporter_1 = require("./reporter");
const readdirp_1 = tslib_1.__importDefault(require("readdirp"));
const server_1 = require("./server");
const EMPTY_ARRAY = [];
const ASTERISK = '*';
const HTML_EXT = '.html';
const GLOB_HTML = '*.html';
const runPa11y = async function ({ build, htmlFilePaths, pa11yOpts, publishDir, }) {
    let issueCount = 0;
    const staticServer = new server_1.StaticServer(publishDir).listen();
    const results = await Promise.all(htmlFilePaths.map(async (filePath) => {
        try {
            const res = await (0, pa11y_1.default)((0, path_1.join)(server_1.SERVER_ADDRESS, filePath), pa11yOpts);
            if (res.issues.length) {
                issueCount += res.issues.length;
                return (0, reporter_1.results)(res);
            }
        }
        catch (error) {
            build.failBuild('pa11y failed', { error });
        }
    }));
    staticServer.close();
    await pa11yOpts.browser.close();
    return {
        issueCount,
        report: results.join(''),
    };
};
exports.runPa11y = runPa11y;
const generateFilePaths = async function ({ fileAndDirPaths, ignoreDirectories, publishDir, }) {
    const directoryFilter = ignoreDirectories.length === 0
        ? ASTERISK
        : ignoreDirectories.map((dir) => `!${dir.replace(/^\/|\/$/g, '')}`);
    const htmlFilePaths = await Promise.all(fileAndDirPaths.map((fileAndDirPath) => findHtmlFiles(`${publishDir}${fileAndDirPath}`, directoryFilter)));
    return [].concat(...htmlFilePaths);
};
exports.generateFilePaths = generateFilePaths;
const findHtmlFiles = async function (fileAndDirPath, directoryFilter) {
    if (await (0, path_type_1.isDirectory)(fileAndDirPath)) {
        const filePaths = [];
        const stream = (0, readdirp_1.default)(fileAndDirPath, {
            directoryFilter,
            fileFilter: GLOB_HTML,
        });
        for await (const { path } of stream) {
            filePaths.push((0, path_1.join)(fileAndDirPath, path));
        }
        return filePaths;
    }
    if (!(await (0, path_type_1.isFile)(fileAndDirPath))) {
        console.warn(`Path ${fileAndDirPath} was provided in "checkPaths", but does not exist. This could indicate a problem with your build. If you want, you can simply delete this path from your "checkPaths" key in netlify.toml`);
        return EMPTY_ARRAY;
    }
    if ((0, path_1.extname)(fileAndDirPath) !== HTML_EXT) {
        return EMPTY_ARRAY;
    }
    return [fileAndDirPath];
};
