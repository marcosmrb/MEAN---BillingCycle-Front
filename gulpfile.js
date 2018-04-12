const gulp = require('gulp')
const util = require('gulp-util')
const sequence = require('run-sequence')

require('./src/gulpTasks/app')
require('./src/gulpTasks/deps')
require('./src/gulpTasks/server')

gulp.task('default', () => {
    if(util.env.production){
        sequence('deps', 'app')
    }else{
        sequence('deps', 'app', 'server')
    }
})

gulp.task('heroku:production', () => {
    sequence('deps', 'app')
})

