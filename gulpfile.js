var gulp = require("gulp"),
    requireDir = require('require-dir');

var registers = requireDir("./gulp/register");

gulp.task("default", ["build"], function(cb) {});