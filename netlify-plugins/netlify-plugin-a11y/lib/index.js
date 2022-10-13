"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const config_1 = require("./config");
const pluginCore_1 = require("./pluginCore");
const picocolors_1 = tslib_1.__importDefault(require("picocolors"));
module.exports = {
    async onPostBuild({ constants, inputs, utils: { build }, }) {
        try {
            const { publishDir, checkPaths, ignoreDirectories, failWithIssues, pa11yOpts } = await (0, config_1.getConfiguration)({
                constants,
                inputs,
            });
            const htmlFilePaths = await (0, pluginCore_1.generateFilePaths)({
                publishDir,
                ignoreDirectories,
                fileAndDirPaths: checkPaths,
            });
            console.log('Checking your pages. This may take a while...');
            const { report, issueCount } = await (0, pluginCore_1.runPa11y)({
                build,
                htmlFilePaths,
                publishDir,
                pa11yOpts,
            });
            const reportSummary = `${issueCount === 0 ? 'No' : issueCount} accessibility issues found!` +
                (issueCount > 0 ? ' Check the logs for more information.' : '');
            console.log(report);
            if (failWithIssues && issueCount > 0) {
                build.failBuild(reportSummary);
            }
            else {
                console.warn(picocolors_1.default.magenta(reportSummary));
            }
        }
        catch (err) {
            build.failBuild(err.message);
        }
    },
};
