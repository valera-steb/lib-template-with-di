/**
 * Created on 04.06.2015.
 */
define({
    dependantComponent: {
        create: {
            module: './component',
            isConstructor: true
        }
    },


    dependantConstructor: {
        module: './component'
    },

    ddComponent: {
        create: {
            module: {$ref: 'dependantConstructor'},
            isConstructor: true
        }
    },


    dependencyPath: './component',

    dddConstructor: {
        module: {$ref: 'dependencyPath'}
    },

    dddComponent: {
        create: {
            module: {$ref: 'dddConstructor'},
            isConstructor: true
        }
    }
});
