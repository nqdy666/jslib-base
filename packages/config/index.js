const path = require('path');
const util = require('@nq-js-lib/util');

function init(cmdPath, name, option) {
    console.log('@nq-js-lib/config: init');

    util.copyTmpl(
        path.resolve(__dirname, `./template/jslib.json.tmpl`),
        path.resolve(cmdPath, name, 'jslib.json'),
        option,
    );
}

function update() {
    console.log('@nq-js-lib/config: update');
}

module.exports = {
    init: init,
    update: update,
}