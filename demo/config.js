/**
 * Created on 03.06.2015.
 */
require.config({
    deps: ['../dist/skeleton'],

    /*
    добавить, если не встраивать соответствующие скрипты
    если в skeleton небыло запроса напрямую vendorWire/wire - тоже надо добавлять
    // * /
    paths: {
        'vendorWire': '../vendor/cujojs/wire-0.10.11',
        'vendorWhen': '../vendor/cujojs/when-3.7.3',
        'vendorMeld': '../vendor/cujojs/meld-1.3.2'
    },
    // */

    map:{
        'vendorWire':{
            'when':'vendorWhen/when',
            'when/sequence':'vendorWhen/sequence',
            'when/timeout':'vendorWhen/timeout',
            'meld':'vendorMeld/meld'
        }
    },

    callback: function () {
        require([
            'skeleton'
        ], function (skeleton) {
            document.write("Look, skeletons's feature is: " + skeleton.feature());
        });
    }
});