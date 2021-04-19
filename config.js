
require.config({
    baseUrl: 'js',
    paths: {
        bootstrap: ['bootstrap.min', 'bootstrap.bundle'],
        //TODO: doubt bootstrap has implemented popper already! How to solve the error? Popper JS needed by Bootstrap
        jquery: ['https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min', 'jquery-3.6.0.min'],
        popper: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper',
        mobileprice: 'example1'
    },
    shim: {
        'bootstrap': ['jquery']
    },
    map: {
        '*': {
            'popper.js': 'popper'
        }}
    });