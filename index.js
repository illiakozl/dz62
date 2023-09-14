const gulp = require('gulp');
const sass = require('gulp-sass');
const less = require('gulp-less');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

// Компіляція SASS файлів
gulp.task('sass', function () {
  return gulp.src('src/sass/*.sass')
    .pipe(sass())
    .pipe(gulp.dest('dist/css'));
});

// Компіляція LESS файлів
gulp.task('less', function () {
  return gulp.src('src/less/*.less')
    .pipe(less())
    .pipe(gulp.dest('dist/css'));
});

// Конкатенація і мінімізація JS файлів
gulp.task('js', function () {
  return gulp.src('src/js/*.js')
    .pipe(concat('app.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

// Запуск всіх задач
gulp.task('build', gulp.parallel('sass', 'less', 'js'));

// Спостереження за файлами і автоматичний запуск задач при їх зміні
gulp.task('watch', function () {
  gulp.watch('src/sass/*.sass', gulp.series('sass'));
  gulp.watch('src/less/*.less', gulp.series('less'));
  gulp.watch('src/js/*.js', gulp.series('js'));
});
import $ from 'jquery';

// Використовуйте $ для роботи з jQuery
$('#myElement').addClass('active');
