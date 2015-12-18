var source = require('vinyl-source-stream')
var gulp = require('gulp')
var browserify = require('browserify')
var sass = require('gulp-sass')
var rename = require('gulp-rename')
var reactify = require('reactify')
var babelify = require('babelify')

gulp.task('sass', ()=>
  gulp.src('src/scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('public/stylesheets'))
)

gulp.task('browserify', ()=>{
  bundleStream = browserify('src/jsx/main.jsx', {extensions: ['.jsx']})
    .transform(reactify)
    .transform(babelify)
    .bundle()

  bundleStream
    .pipe(source('main.jsx'))
    .pipe(rename('bundle.js'))
    .pipe(gulp.dest('public/javascripts/'))
})

gulp.task('watch', ()=>{
  gulp.watch('src/scss/*.scss', ['sass'])
  gulp.watch('src/jsx/*.jsx', ['browserify'])
})

gulp.task('default', ['sass', 'watch', 'browserify'])
