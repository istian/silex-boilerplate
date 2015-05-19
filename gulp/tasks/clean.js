var gulp = require("gulp"),
    del = require("del");

var dirs = [
    "./.tmp",
    "./public/js",
    "./public/css",
    "./public/templates"
];

gulp.task("clean", function (cb) {
    del(dirs, {force: true}, cb);
});