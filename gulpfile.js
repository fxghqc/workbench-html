/*
  gulpfile.js
  ===========
  Rather than manage one giant configuration file responsible
  for creating multiple tasks, each task has been broken out into
  its own file in gulp/tasks. Any files in that directory get
  automatically required below.

  To add a new task, simply add a new task file that directory.
  gulp/tasks/default.js specifies the default set of tasks to run
  when you run `gulp`.
*/

var requireDir = require('require-dir');

// Require all tasks in gulp/tasks, including subfolders
requireDir('./gulp/tasks', { recurse: true });

/*
var gulp = require('gulp'),
  sass = require('gulp-sass'),
  watch = require('gulp-watch'),
  concat = require('gulp-concat'),
  lr = require('tiny-lr'),
  livereload = require('gulp-livereload');


gulp.task('css', function () {
  return gulp.src('scss/*.scss')
    .pipe(sass())
    .pipe(concat('style.css'))
    .pipe(gulp.dest('css'));
});

var browserify = require('browserify');
var watchify = require('watchify');
var bundleLogger = require('./util/bundleLogger');
var handleErrors = require('./util/handleErrors');
var source = require('vinyl-source-stream');


gulp.task('template', function () {

  var bundleMethod = global.isWatching ? watchify : browserify;

  var bundler = bundleMethod({
    //transform: ['ractivate', 'brfs', 'coffeeify'],
    // Specify the entry point of your app
    entries: ['./js/index.js'],
    // Add file extentions to make optional in your requires
    extensions: ['.html', '.coffee'],
    debug: true
  });

  var bundle = function () {
    // Log when bundling starts
    bundleLogger.start();

    return bundler
      .bundle()
      // Report compile errors
      .on('error', handleErrors)
      // Use vinyl-source-stream to make the
      // stream gulp compatible. Specifiy the
      // desired output filename here.
      .pipe(source('bundle.js'))
      // Specify the output destination
      .pipe(gulp.dest('./'))
      // Log when bundling completes!
      .on('end', bundleLogger.end);
  };

  if (global.isWatching) {
    // Rebundle with watchify on changes.
    bundler.on('update', bundle);
  }

  return bundle;
});

gulp.task('watch', function () {
  var server = lr();
  livereload(server);
  //watches SCSS files for changes
  gulp.watch('scss/*.scss', ['css']);

  gulp.watch(['css/style.css', 'index.html', 'js/*.js']).on('change', livereload.changed);

});
*/
//gulp.task('default', ['css', 'template', /*'scripts', */ 'watch']);
//gulp.task('production', ['css', 'template' /*, 'scripts'*/ ]);