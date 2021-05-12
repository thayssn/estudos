const { src, watch, series, dest } = require('gulp');
const plumber = require('gulp-plumber');
const jasmine = require('gulp-jasmine');
const rename = require('gulp-rename');
const browserify = require('gulp-browserify');
const babelify = require('babelify');
 
const testFiles = 'src/specs/*.js';
const srcFiles = 'src/js/**/*.js';
const entryFile = 'src/index.js';
// Basic usage
const scripts = () => 
        src([entryFile])
            .pipe(plumber())
            .pipe(browserify({
                transform: [babelify.configure({
                  presets: ['@babel/preset-env']
                })]
            }))
            .pipe(rename('bundle.js'))
            .pipe(dest('./public/dist/js'))


const test = () => 
        src(testFiles)
            .pipe(plumber())
            .pipe(jasmine({
                errorOnFail: false
            }))

const continuousTDD = () => {
    watch(srcFiles, series(test, scripts))
};

const dev = series(test, scripts, continuousTDD);
const prod = series(test, scripts)

module.exports = {
    default: dev,
    dev,
    prod,
    scripts,
    continuousTDD,
}