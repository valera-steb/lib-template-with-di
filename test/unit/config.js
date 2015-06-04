/**
 * Created on 03.06.2015.
 */
require.config({
    //baseUrl:'unit',
    paths: {
        'skeleton': '../../lib/skeleton',

        'vendorWire': '../../vendor/cujojs/wire-0.10.11',
        'vendorWhen': '../../vendor/cujojs/when-3.7.3',
        'vendorMeld': '../../vendor/cujojs/meld-1.3.2'
    },
    map:{
        'vendorWire':{
            'when':'vendorWhen/when',
            'when/sequence':'vendorWhen/sequence',
            'when/timeout':'vendorWhen/timeout',
            'meld':'vendorMeld/meld'
        }
    },

    callback: function () {
        var specs = [
            'feature',
            'module',
            'skeleton'
        ];

        (function getSpec(id) {
            if (id == specs.length) {
                jasmine.getEnv().execute();
                return;
            }

            require(['spec/' + specs[id]], function () {
                getSpec(id + 1);
            });
        })(0);
    }
});