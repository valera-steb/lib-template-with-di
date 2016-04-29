/**
 * Created on 05.06.2015.
 */
feature('простые ссылки', 'Di injection')
    .add(scenario('создать указывая путь к модулю, откуда')
        .when("xxx: { create: { module: './component/path'}}")
        .then("has object _xxx_ with _key_")
)
    .add(scenario('создать элемент, указывая ссылку на фабрику (которая должна знать путь до файла)')
        .given("_xxxConstructor_: { module: './component/path'}}")
        .when("xxx: { create: { module: {$ref: 'xxxConstructor'}}}")
        .then('has object _xxx_ with _key_')
)
    .add(scenario("xxx: { create: { module: {$ref: 'refdConstructor'}}}")
        .given("constructorPath: './component'")
        .when("xxxConstructor: { module: { $ref: 'constructorPath' }}}")
        .and("xxx: { create: { module: {$ref: 'xxxConstructor'}}}")
        .then("не работает - нет конструктора")
);


feature('через родительский контекст', 'Di injection')
    .add(scenario('xx'));