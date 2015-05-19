'use strict'

module.exports = {
    "less": {
        "src": "./app/src/**/Assets/css/*.less",
        "build": "./.tmp",
        "dest": "./public/css"
    },
    "coffee": {
        "src": "./app/src/**/Assets/js/*.coffee",
        "build": "./.tmp",
        "dest": "./public/js"
    },
    "javascripts": {
        "src": "./app/src/**/Assets/js/*.js",
        "build": "./.tmp",
        "dest": "./public/js"
    },
    "images": {
        "src": "./app/src/**/Assets/images/*.*",
        "build": "./.tmp",
        "dest": "./public/css"
    },
    "templates": {
        "src": "./assets",
        "build": "./.tmp",
        "dest": "./public/templates"
    },
    "vendor": {
        "src": "./node_modules",
        "packages": [
            "bootstrap",
            "fontawesome"
        ],
        "dest": "./public/vendor"
    }
};