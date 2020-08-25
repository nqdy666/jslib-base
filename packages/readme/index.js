const path = require('path');
const util = require('@nq-js-lib/util');

function init(cmdPath, name, option) {
    console.log('@nq-js-lib/readme: init');
    const lang = option.lang;
    util.copyTmpl(
        path.resolve(__dirname, `./template/README.${lang}.md.tmpl`),
        path.resolve(cmdPath, name, 'README.md'),
        option,
    );
}

function update() {
    console.log('@nq-js-lib/readme: update');
}

module.exports = {
    init: init,
    update: update,
}