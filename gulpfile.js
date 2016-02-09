var source = require('vinyl-source-stream')
var gulp = require('gulp')
var browserify = require('browserify')
var sass = require('gulp-sass')
var rename = require('gulp-rename')
var babelify = require('babelify')
var eslint = require('gulp-eslint')

gulp.task('sass', () =>
   gulp.src('./src/scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('public/stylesheets'))
)

gulp.task('lint-jsx', () =>
   gulp.src('./src/jsx/*.jsx')
    .pipe(eslint())
    .pipe(eslint.format())
)

gulp.task('lint-server', () =>
   gulp.src(['**/*.js', '!node_modules/**', '!public/javascripts/bundle.js'])
    .pipe(eslint())
    .pipe(eslint.format())
)

gulp.task('browserify', () => {
  var bundleStream = browserify('./src/jsx/main.jsx', {extensions: ['.jsx']})
    .transform(babelify, {presets: ['es2015', 'react']})
    .bundle()

   bundleStream
    .pipe(source('main.jsx'))
    .pipe(rename('bundle.js'))
    .pipe(gulp.dest('public/javascripts/'))
})

gulp.task('watch', () => {
  gulp.watch('./src/scss/*.scss', ['sass'])
  gulp.watch('./src/jsx/*.jsx', ['browserify'])
})

gulp.task('lint', ['lint-jsx', 'lint-server'])

gulp.task('default', ['lint', 'sass', 'browserify', 'watch' ])
