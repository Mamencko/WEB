var gulp = require('gulp');
var browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');

gulp.task('html', function(){
    return gulp.src('src/*.html')
    .pipe(gulp.dest('build'));
});

gulp.task('css', function(){
    return gulp.src('src/*.css')
    .pipe(autoprefixer({
        browsers: ['cover 99.5%'],
        cascade: false
    }))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('build'));
});

gulp.task('js', function(){
    return gulp.src('src/*.js')
    .pipe(gulp.dest('build'));
});

gulp.task('img', function(){
    return gulp.src('src/img/*')
    .pipe(gulp.dest('build/img'));
});

gulp.task('fonts', function(){
    return gulp.src('src/fonts/*')
    .pipe(gulp.dest('build/fonts'));
});

gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./build"
        }
    });
});

gulp.task('watch', function(){
    gulp.watch('src/*.html', gulp.series('html'));
    gulp.watch('src/*.css', gulp.series('css'));
    gulp.watch('src/*.js', gulp.series('js'));
    gulp.watch('src/img/*', gulp.series('img'));
    gulp.watch('src/fonts/*', gulp.series('fonts'));
});

gulp.task('default', gulp.series(
    gulp.parallel(
        'html',
        'css',
        'js',
        'img',
        'fonts'
    ),
    'serve',
    'watch'
));