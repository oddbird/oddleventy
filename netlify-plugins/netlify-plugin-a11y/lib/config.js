"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPa11yOpts = exports.getConfiguration = void 0;
const tslib_1 = require("tslib");
const puppeteer_1 = tslib_1.__importDefault(require("puppeteer"));
const DEFAULT_CHECK_PATHS = ['/'];
const DEFAULT_FAIL_WITH_ISSUES = true;
const DEFAULT_IGNORE_DIRECTORIES = [];
const PA11Y_DEFAULT_WCAG_LEVEL = 'WCAG2AA';
const PA11Y_RUNNERS = ['axe'];
const PA11Y_USER_AGENT = 'netlify-plugin-a11y';
const getConfiguration = async ({ constants: { PUBLISH_DIR }, inputs, }) => {
    const { checkPaths, ignoreDirectories, ignoreElements, ignoreGuidelines, failWithIssues, wcagLevel } = inputs;
    return {
        checkPaths: checkPaths || DEFAULT_CHECK_PATHS,
        failWithIssues: failWithIssues !== null && failWithIssues !== void 0 ? failWithIssues : DEFAULT_FAIL_WITH_ISSUES,
        ignoreDirectories: ignoreDirectories || DEFAULT_IGNORE_DIRECTORIES,
        pa11yOpts: await (0, exports.getPa11yOpts)({
            hideElements: ignoreElements,
            ignore: ignoreGuidelines,
            standard: wcagLevel || PA11Y_DEFAULT_WCAG_LEVEL,
        }),
        publishDir: (PUBLISH_DIR || process.env.PUBLISH_DIR),
    };
};
exports.getConfiguration = getConfiguration;
const getPa11yOpts = async ({ hideElements, ignore, standard }) => {
    return {
        browser: await puppeteer_1.default.launch({ ignoreHTTPSErrors: true }),
        hideElements,
        ignore,
        runners: PA11Y_RUNNERS,
        userAgent: PA11Y_USER_AGENT,
        standard,
    };
};
exports.getPa11yOpts = getPa11yOpts;
