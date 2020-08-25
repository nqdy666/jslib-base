const path = require('path');
const util = require('@nq-js-lib/util');

function init(cmdPath, name, option) {
    console.log('@nq-js-lib/package: init');
    util.copyTmpl(
        path.resolve(__dirname, `./template/package.json.tmpl`),
        path.resolve(cmdPath, name, 'package.json'),
        option,
    );
}

function update(cmdPath, option) {
    console.log('@nq-js-lib/package: update');
    const {
        scripts, sideEffects, devDependencies, dependencies, files, engines,
    } = JSON.parse(util.readTmpl(path.resolve(__dirname, `./template/package.json.tmpl`), option));
    
    util.mergeObj2JSON(
        { scripts, sideEffects, devDependencies, dependencies, files, engines },
        path.resolve(cmdPath, 'package.json')
    );
}

module.exports = {
    init: init,
    update: update,
}