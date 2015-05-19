var gulp = require("gulp"),
    requireDir = require("require-dir"),
    sequence = require("gulp-sequence");

var register = requireDir("../tasks");
var tasks = ["clean"];
gulp.task("build", function(cb) {
    tasks.push(cb);
    sequence.apply(this, tasks);
});