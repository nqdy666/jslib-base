const fs = require('fs');
const path = require('path');
const ora = require('ora');
const spinner = ora();
const pkg = require('./package.json');

const config = require('@nq-js-lib/config');
const root = require('@nq-js-lib/root');
const eslint = require('@nq-js-lib/eslint');
const license = require('@nq-js-lib/license');
const package = require('@nq-js-lib/package');
const readme = require('@nq-js-lib/readme');
const src = require('@nq-js-lib/src');
const demo = require('@nq-js-lib/demo');
const rollup = require('@nq-js-lib/rollup');
const test = require('@nq-js-lib/test');
const manager = require('@nq-js-lib/manager');

function init(cmdPath, option) {
    option.version = pkg.version;
    
    config.init(cmdPath, option.pathname, option);
    root.init(cmdPath, option.pathname, option);
    package.init(cmdPath, option.pathname, option);
    license.init(cmdPath, option.pathname, option);
    readme.init(cmdPath, option.pathname, option);
    demo.init(cmdPath, option.pathname, option);
    src.init(cmdPath, option.pathname, option);
    eslint.init(cmdPath, option.pathname, option);
    rollup.init(cmdPath, option.pathname, option);
    test.init(cmdPath, option.pathname, option);
    manager.init(cmdPath, option.pathname, option).then(function() {
        spinner.succeed('Create project successfully');
    });
}
function update(cmdPath, option, answers) {
    option.version = pkg.version;
    
    if (answers.root) {
        root.update(cmdPath, option);
    }
    if (answers.package) {
        package.update(cmdPath, option);
    }
    if (answers.src) {
        src.update(cmdPath, option);
    }
    if (answers.eslint) {
        eslint.update(cmdPath, option);
    }
    if (answers.rollup) {
        rollup.update(cmdPath, option);
    }
    if (answers.test) {
        test.update(cmdPath, option);
    }
}

exports.init = init;
exports.update = update;