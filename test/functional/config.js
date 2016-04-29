/**
 * Created on 04.06.2015.
 */
require.config({
    deps: ['../../vendor/browsered-jasmine-cucumber-0.0.0'],

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
        require([
            'browsered-jasmine-cucumber',
            //'spec/native',
            './spec/diInjection',

            './steps/diInjection'
        ], function () {
            var runner = window.GroupsRunner(window.fetureGroups, window.stepsGroups);

            for (var i in window.fetureGroups)
                runner(i);

            jasmine.getEnv().execute();
        });
    }
});