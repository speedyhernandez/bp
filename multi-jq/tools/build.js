{
    appDir: '../site',
    baseUrl: 'js/lib',
    optimize: 'uglify2',
    paths: {
        app: '../app',
        jquery: 'jquery-1.11.1.min',
        modernizr: 'modernizr-2.8.3.min',
        domReady: 'require/domReady'
    },
    dir: '../build',
    modules: [
        {
            name: '../shared',
            include: [
                'jquery',
                'modernizr',
                'app/lib',
                'domReady'
            ]
        },
        {
            name: '../index',
            include: ['app/layerA'],
            exclude: ['../shared']
        },
        {
            name: '../sample',
            include: ['app/layerB'],
            exclude: ['../shared']
        }
    ]
}