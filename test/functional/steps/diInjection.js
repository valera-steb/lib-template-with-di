/**
 * Created on 05.06.2015.
 */
groupSteps('Di injection')
    .given('test', function () {

    });

featureSteps('простые ссылки')
    .given("_(.*)_: { module: './component/path'}}", function(componentName){

    })
    .given("constructorPath: './component'", function(){

    })
    .when("xxx: { create: { module: './component/path'}}", function(){

    })
    .when("xxx: { create: { module: {(.)ref: 'xxxConstructor'}}}", function(){

    })
    .when("xxxConstructor: { module: { (.)ref: 'constructorPath' }}}", function(){

    })
    .then("has object _(.*)_ with _(.*)_", function(objectName, key){
        expect(true).toBeTruthy();
    })
    .then("не работает - нет конструктора", function(){
        expect(true).toBeTruthy();
    });

featureSteps('через родительский контекст');