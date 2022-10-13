'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.supports = exports.results = exports.error = exports.info = exports.debug = exports.begin = void 0;
const picocolors_1 = require("picocolors");
const PA11Y_SUPPORTS = '^6.0.0 || ^6.0.0-alpha || ^6.0.0-beta';
exports.supports = PA11Y_SUPPORTS;
const DUPLICATE_WHITESPACE_EXP = /\s+/g;
const EMPTY_SPACE = ' ';
const NEWLINE_LITERAL = '\n';
const LOCAL_FILE_PATH_EXP = new RegExp(`^http://localhost:\\d{4}/|${'file://' + process.cwd()}/`);
const start = (0, picocolors_1.cyan)(' >');
const typeIndicators = {
    error: (0, picocolors_1.red)(' • Error:'),
    notice: (0, picocolors_1.cyan)(' • Notice:'),
    unknown: (0, picocolors_1.gray)(' •'),
    warning: (0, picocolors_1.yellow)(' • Warning:'),
};
function renderIssue(issue) {
    const code = issue.code;
    const selector = issue.selector.replace(DUPLICATE_WHITESPACE_EXP, EMPTY_SPACE);
    const context = issue.context ? issue.context.replace(DUPLICATE_WHITESPACE_EXP, EMPTY_SPACE) : '[no context]';
    return cleanWhitespace(`

	${typeIndicators[issue.type]} ${issue.message}
		${(0, picocolors_1.gray)(` ├── ${code}`)}
		${(0, picocolors_1.gray)(` ├── ${selector}`)}
		${(0, picocolors_1.gray)(` └── ${context}`)}
	`);
}
function renderResults(results) {
    if (results.issues.length) {
        const publicFilePath = results.pageUrl.replace(LOCAL_FILE_PATH_EXP, '');
        const totals = {
            error: 0,
            notice: 0,
            warning: 0,
        };
        const issues = [];
        const summary = [];
        for (const issue of results.issues) {
            issues.push(renderIssue(issue));
            totals[issue.type] = totals[issue.type] + 1;
        }
        if (totals.error > 0) {
            summary.push((0, picocolors_1.red)(`${totals.error} ${pluralize('Error', totals.error)}`));
        }
        if (totals.warning > 0) {
            summary.push((0, picocolors_1.yellow)(`${totals.warning} ${pluralize('Warning', totals.warning)}`));
        }
        if (totals.notice > 0) {
            summary.push((0, picocolors_1.cyan)(`${totals.notice} ${pluralize('Notice', totals.notice)}`));
        }
        return cleanWhitespace(`

			${(0, picocolors_1.bold)(`Results for file ${(0, picocolors_1.underline)(publicFilePath)}:`)}
			${issues.join(NEWLINE_LITERAL)}

			${summary.join(NEWLINE_LITERAL)}

		`);
    }
    return cleanWhitespace(`
		${(0, picocolors_1.green)('No issues found!')}
	`);
}
exports.results = renderResults;
function renderBegin() {
    return cleanWhitespace(`
		${(0, picocolors_1.cyan)((0, picocolors_1.underline)('Welcome to Pa11y'))}
	`);
}
exports.begin = renderBegin;
function renderDebug(message) {
    message = `Debug: ${message}`;
    return cleanWhitespace(`
		${start} ${(0, picocolors_1.gray)(message)}
	`);
}
exports.debug = renderDebug;
function renderInfo(message) {
    return cleanWhitespace(`
		${start} ${message}
	`);
}
exports.info = renderInfo;
function renderError(message) {
    if (!/^error:/i.test(message)) {
        message = `Error: ${message}`;
    }
    return cleanWhitespace(`
		${(0, picocolors_1.red)(message)}
	`);
}
exports.error = renderError;
function cleanWhitespace(string) {
    return string.replace(/\t+|^\t*\n|\n\t*$/g, '');
}
function pluralize(noun, count) {
    return count === 1 ? noun : noun + 's';
}
