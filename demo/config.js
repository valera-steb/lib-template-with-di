/**
 * Created on 03.06.2015.
 */
require.config({
    deps: ['../dist/skeleton'],

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