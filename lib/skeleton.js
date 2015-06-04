define([
    'require',
    'skeleton/core', 'skeleton/feature', 'skeleton/module',
    'vendorWire/wire',
    'vendorWhen/when',
    //'vendorWhen/function'
], function (require, core, feature, module) {
    var skeleton = core;
    skeleton.feature = feature;
    skeleton.module = module;
    return skeleton;
});
