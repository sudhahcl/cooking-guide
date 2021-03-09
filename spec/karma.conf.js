module.exports = function(config) {
    config.set({
      basePath: '',
      frameworks: ['jasmine','browserify'],
      files: [
        'build/js/**/*.js',
        'build/tests/**/test_*.js'
      ],
      exclude: [
      ],
      preprocessors: {'app/tests/*.js': [ 'browserify' ]},
      reporters: ['dots'],
      port: 9876,
      colors: true,
      logLevel: config.LOG_INFO,
      autoWatch: true,
      browsers: ['PhantomJS'],
      singleRun: true
    });
  };