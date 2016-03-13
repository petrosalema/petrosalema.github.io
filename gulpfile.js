var _if = require('gulp-if'),
    concat = require('gulp-concat'),
    cssnano = require('gulp-cssnano'),
    debug = require('gulp-debug'),
    del = require('del'),
    gulp = require('gulp'),
    gulpFilter = require('gulp-filter'),
    inject = require('gulp-inject'),
    insertLines = require('gulp-insert-lines'),
    less = require('gulp-less'),
    livereload = require('gulp-livereload'),
    mergeStream = require('merge-stream'),
    path = require('path'),
    runSequence = require('run-sequence')
    sourcemaps = require('gulp-sourcemaps'),
    util = require('gulp-util');

var environment = process.env.NODE_ENV || 'development';
var sourceDir = 'src';
var buildDir = 'build';

function log(message) {
	util.log(util.colors.black.bgWhite(message));
}

function relative(filepath) {
	return path.relative(filepath, '.').replace(/\\/g, '/');
}

// `clean
gulp.task('clean', function () {
	log('Clean...');
	return del([buildDir]);
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
	var css = path.join('build', '**', '*.css');
	var injectOptions = {
		addRootSlash: false,
		ignorePath: 'build',
		removeTags: environment != 'development',
		starttag: '<!-- inject:{{ext}} -->'
	};
	var injectLiveReload = process.argv.indexOf('--livereload') > 0;
	return gulp.src(path.join(sourceDir, 'index.html'))
		//.pipe(inject(gulp.src(js, { read: false }), injectOptions))
		.pipe(inject(gulp.src(css, { read: false }), injectOptions))
		.pipe(_if(injectLiveReload, insertLines({
			before: /<\/body>/,
			lineBefore: '\t\t<script src="//localhost:35729/livereload.js"></script>'
		})))
		.pipe(gulp.dest(buildDir));
});

// `static
gulp.task('static', function () {
	var src = path.join('static', '**');
	var dst = path.join('build', 'static');
	return gulp.src(src).pipe(gulp.dest(dst));
});

// `build
gulp.task('build', function (done) {
	runSequence('clean', ['css'], 'html', 'static', done);
});

// `watch
gulp.task('watch', ['build'], function () {
	var build = path.join(buildDir, '**');
	var less = path.join(sourceDir, '**', '*.less');
	var html = path.join(sourceDir, '**', '*.html');
	gulp.watch(less, ['css']);
	gulp.watch(html, ['html']);
	gulp.watch(build).on('change', function (file) {
		log('Files changed...', file.path);
		livereload.changed(file.path);
	});
	livereload.listen({ quiet: false });
});
