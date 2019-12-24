//babel.config.js
const presets = [
    ["@babel/preset-env",{
        debug:true, // Output the targets/plugins used when compiling
        useBuiltIns:'usage', //Configure how @babel/preset-env handles polyfills from core-js.
        corejs:3, //version of core-js
    }],
];

const plugins = [];

//Export a config object.
module.exports = {presets,plugins};