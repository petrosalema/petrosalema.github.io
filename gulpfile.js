var concat = require('gulp-concat'),
    debug = require('gulp-debug'),
    cssnano = require('gulp-cssnano'),
    del = require('del'),
    gulp = require('gulp'),
    gulpFilter = require('gulp-filter'),
    _if = require('gulp-if'),
    util = require('gulp-util'),
    inject = require('gulp-inject'),
    insertLines = require('gulp-insert-lines'),
    less = require('gulp-less'),
    livereload = require('gulp-livereload'),
    mergeStream = require('merge-stream'),
    path = require('path'),
    sourcemaps = require('gulp-sourcemaps'),
    runSequence = require('run-sequence');

var environment = process.env.NODE_ENV || 'development';
var sourceDir = '_';
var buildDir = '.';

function log(message) {
	util.log(util.colors.black.bgWhite(message));
}

function relative(filepath) {
	return path.relative(filepath, '.').replace(/\\/g, '/');
}

// `clean
gulp.task('clean', function () {
	log('No Clean...');
	//return del(['index.html', 'style.css']);
});

// `css
gulp.task('css', function () {
	log('Compile CSS...');
	return gulp.src(path.join(sourceDir, '**', '*.less'))
		.pipe(less({
			cleancss: true,
			compress: false
		}))
		.pipe(_if(
			environment != 'development',
			cssnano({ safe: true })
		))
		.pipe(concat('styles.css'))
		.pipe(gulp.dest(buildDir));
});

// `html (index.html with injected css and js includes)
gulp.task('html', function () {
	var js = path.join('script.js');
	var css = path.join('*.css');
	var injectOptions = {
		addRootSlash: false,
		ignorePath: 'build',
		removeTags: environment != 'development',
		starttag: '<!-- inject:{{ext}} -->'
	};
	var injectLiveReload = process.argv.indexOf('--livereload') > 0;
	return gulp.src(path.join(sourceDir, 'index.html'))
		.pipe(inject(gulp.src(js, { read: false }), injectOptions))
		.pipe(inject(gulp.src(css, { read: false }), injectOptions))
		.pipe(_if(injectLiveReload, insertLines({
			before: /<\/body>/,
			lineBefore: '\t\t<script src="//localhost:35729/livereload.js"></script>'
		})))
		.pipe(gulp.dest(buildDir));
});

// `build
gulp.task('build', function (done) {
	runSequence('clean', ['css'], 'html', done);
});

// `watch
gulp.task('watch', ['build'], function () {
	livereload.listen({ quiet: true });
	var less = path.join(sourceDir, '**', '*.less');
	var html = path.join(sourceDir, '**', '*.html');
	gulp.watch(less, ['css']);
	gulp.watch(html, ['html']);
	gulp.watch([buildDir, '!**/*.map']).on('change', function (file) {
		livereload.changed(file.path);
	});
});
