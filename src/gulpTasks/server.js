const gulp = require('gulp')
const watch = require('gulp-watch')
const webserver = require('gulp-webserver')

gulp.task('watch', () => {
    watch('src/app/**/*.html', () => gulp.start('app.html'))
    watch('src/app/**/*.css', () => gulp.start('app.css'))
    watch('src/app/**/*.js',  () => gulp.start('app.js'))
    watch('src/assets/**/*.*', () => gulp.start('app.assets'))
})

gulp.task('server', ['watch'], () => {
    return gulp.src('public')
        .pipe(webserver({
            livereload: true,
            port:3000,
            open:true
        }))
})

