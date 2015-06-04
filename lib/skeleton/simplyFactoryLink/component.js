/**
 * Created on 04.06.2015.
 */
define(function(){
    var count = 0;

    function component(){
        count ++ ;
        this.id = count;
        this.name = 'зависимый компонент ';
    };

    component.name = 'конструктор теста зависимостей';

    return component;
});
