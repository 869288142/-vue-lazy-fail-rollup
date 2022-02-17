'use strict';

var Vue = require('vue');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var Vue__default = /*#__PURE__*/_interopDefaultLegacy(Vue);

function main () {
    return new Vue__default["default"]({
        template: `<lazy></lazy>`,
        components: {
            lazy:  () => Promise.resolve().then(function () { return lazy; })
        }
    })
}

var script = {

};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return null
}

script.render = render;
script.__file = "src/lazy.vue";

var lazy = /*#__PURE__*/Object.freeze({
    __proto__: null,
    [Symbol.toStringTag]: 'Module',
    'default': script
});

module.exports = main;
