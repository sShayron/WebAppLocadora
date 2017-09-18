var gulp = require("gulp");
var sass = require("gulp-sass");
var autoprefixer = require('gulp-autoprefixer');

gulp.task("sass", function(){
    return gulp.src("./sass/style.scss")
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(gulp.dest('./css'))
})

gulp.task("default", ['watch', 'sass'])


gulp.task('watch', function () {
    gulp.watch('./sass/**/*.scss', ['sass']);
});