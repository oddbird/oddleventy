"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SERVER_ADDRESS = exports.StaticServer = void 0;
const tslib_1 = require("tslib");
const http_1 = tslib_1.__importDefault(require("http"));
const fs_1 = tslib_1.__importDefault(require("fs"));
const path_1 = tslib_1.__importDefault(require("path"));
const mimeTypes_json_1 = tslib_1.__importDefault(require("./mimeTypes.json"));
const HTML_EXT = '.html';
const SERVER_HOST = 'localhost';
const SERVER_PORT = '9000';
const SERVER_ADDRESS = 'localhost:' + SERVER_PORT;
exports.SERVER_ADDRESS = SERVER_ADDRESS;
const SERVER_OPTS = {
    host: SERVER_HOST,
    port: SERVER_PORT,
};
const basePath = process.cwd();
class StaticServer {
    constructor(publishDir) {
        this.instance = http_1.default.createServer(function (req, res) {
            const ext = path_1.default.extname(req.url);
            const filepath = ext === HTML_EXT ? path_1.default.join(basePath, req.url) : path_1.default.join(basePath, publishDir, req.url);
            res.writeHead(200, { 'Content-Type': mimeTypes_json_1.default[ext] || 'text/plain' });
            const stream = fs_1.default.createReadStream(filepath);
            stream
                .on('open', function () {
                stream.pipe(res);
            })
                .on('error', function (err) {
                res.statusCode = 500;
                res.end(`Error getting the file: ${err}.`);
            });
            res.on('close', function () {
                stream.destroy();
            });
        });
    }
    listen() {
        return this.instance.listen(SERVER_OPTS);
    }
}
exports.StaticServer = StaticServer;
