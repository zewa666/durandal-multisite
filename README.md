Durandal Multisite Demo
===========

<a href="http://www.wtfpl.net/download/wtfpl-badge-2/" rel="attachment wp-att-50"><img alt="wtfpl-badge-2" src="http://www.wtfpl.net/wp-content/uploads/2012/12/wtfpl-badge-2.png" width="80" height="15"></a>

This is an example of how to structure a [Durandal SPA Framework](http://durandaljs.com/) application with a frontend/backend by still reusing the same codebase.
You will see the two entry points frontend.html and backend.html, which could of course be renamed to index.html when deployed
to custom locations.

The idea
-------------------

The separation of front/backend happens by utilizing two separate main.js entry files namely main_backend and main_frontend
Their main purpose in this example is to provide a require mapping list for module aliases.

Why?

Well here the separation of the two apps comes into play.
Let's say we have a simple Login screen (viewmodels/login | view/login) but would like to allow different logins for the resepective entry points.
So instead of creating a duplicate we just exclude the login function to a service module which is provided in two flavors.
The require.js mapping now handles the magic to bind the proper one.

The call to the service happens in viewmodels/login.js

```js
vm_login_frontend.prototype.performLogin = function() {
  var loginService = require('businesslogic/loginService');
  loginService.performLogin();
};
```

note the require call which asks for a loginService without detailed entry point specification.

In case we started with the main_frontend the requirejs map will now map this alias to the specific implementation
of loginService.frontend.js

```js
map: {
    '*': {
        'businesslogic/loginService': 'businesslogic/loginService.frontend'
    }
}
```

That way not only we enforce separation of concerns by encapsuling exchangeable functionality in modules, but also handle
the proper loading via AMD.


How to build/deploy?
-------------
If you care about proper building and deploying scenarios take a look at the [Gulp Durandal Docs][http://durandaljs.com/documentation/Gulp.html].
In this case you should think about excluding the businesslogic folder from the app folder and setup your gulp task to include the specific implementations
you are deploying.


More information
----------------

For more information about Durandal please consult
the Durandal online docs at:

http://durandaljs.com/docs.html
