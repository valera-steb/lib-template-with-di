define([
    'require',
    'skeleton/core', 'skeleton/feature', 'skeleton/module',
    'vendorWire/wire!skeleton/simplyFactoryLink/coreSpec'
], function (require, core, feature, module, c) {
    var skeleton = core;
    skeleton.feature = feature;
    skeleton.module = module;
    return skeleton;
});
