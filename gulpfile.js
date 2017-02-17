// Archivo gulpfile.json
//Gulp automatizacion de tareas

var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');
var shell = require('gulp-shell');
var serve = require('gulp-serve');
 
//Tarea Build
gulp.task('build', function() { //Construir el libro
  return gulp.src('').pipe(shell(['./scripts/generate-gitbook']));
});



//Tarea deploy
gulp.task('deploy', function() {
  return gulp.src('./gh-pages/**/*') //todo lo que hay dentro del gh-pages
    .pipe(ghPages());
});
    
    
//Tarea publicacion en local
gulp.task('serve', function() {
  return gulp.src('./gh-pages/**/*')
    .pipe(ghPages());

});

gulp.task('serve', serve('public'));
gulp.task('serve-build', serve(['public', 'build']));
gulp.task('serve-prod', serve({
  root: ['public', 'build'],
  port: 80,
  middleware: function(req, res) {
    // custom optional middleware 
  }
}));