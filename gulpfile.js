// Archivo gulpfile.json
//Gulp automatizacion de tareas

var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');
var shell = require('gulp-shell');
 
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