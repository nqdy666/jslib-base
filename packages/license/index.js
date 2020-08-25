const path = require('path');
const util = require('@nq-js-lib/util');

function init(cmdPath, name, option) {
    console.log('@nq-js-lib/license: init');

    util.copyTmpl(
        path.resolve(__dirname, `./template/license.tmpl`),
        path.resolve(cmdPath, name, 'LICENSE'),
        option,
    );
}

function update() {
    console.log('@nq-js-lib/license: update');
}

module.exports = {
    init: init,
    update: update,
}