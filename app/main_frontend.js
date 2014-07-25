requirejs.config({
    paths: {
        'text': '../bower_components/requirejs-text/text',
        'durandal':'../bower_components/durandal/js',
        'plugins' : '../bower_components/durandal/js/plugins',
        'transitions' : '../bower_components/durandal/js/transitions',
        'knockout': '../bower_components/knockout.js/knockout',
        'bootstrap': '../bower_components/bootstrap/dist/js/bootstrap.min',
        'jquery': '../bower_components/jquery/jquery.min',
    },
    shim: {
       'bootstrap': {
            deps: ['jquery'],
            exports: 'jQuery'
       }
    },
    map: {
        '*': {
            'businesslogic/loginService': 'businesslogic/loginService.frontend'
        }
    }
});

define(['durandal/system', 'durandal/app', 'durandal/viewLocator', 'bootstrap', 'knockout'],
    function (system, app, viewLocator, bootstrap, ko) {
        //>>excludeStart("build", true);
        system.debug(true);
        //>>excludeEnd("build");

        app.title = 'App Title';

        app.configurePlugins({
            router:true,
            dialog: true
        });

        app.start().then(function() {
            //Replace 'viewmodels' in the moduleId with 'views' to locate the view.
            //Look for partial views in a 'views' folder in the root.
            viewLocator.useConvention();

            //Show the app by setting the root view model for
            //our application with a transition.

            // UNCOMMENT HERE AND SPECIFY YOUR SHELL
            app.setRoot('viewmodels/login', 'entrance');
        });
    });
