define(['jquery','bootstrap'], function($) {
    $('.col').append('<h3>Hello World!</h3>');
    $('.col').append('<span>I just loaded jQuery & bootstrap using require JS</span>');
    $('h3').attr('class', 'text-danger');
    $('span').attr('class', 'badge badge-warning');
});