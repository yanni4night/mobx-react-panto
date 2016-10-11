/**
 * Copyright (C) 2016 yanni4night.com
 * pantofile.js
 *
 * changelog
 * 2016-10-11[22:45:06]:revised
 *
 * @author yanni4night@gmail.com
 * @version 0.1.0
 * @since 0.1.0
 */
'use strict';

module.exports = panto => {
    panto.setOptions({
        cwd: __dirname,
        src: 'src',
        output: 'dist'
    });

    require('load-panto-transformers')(panto);
    require('time-panto')(panto);

    panto.$('*.jsx').tag('jsx').read().babel({
        extend: '.babelrc'
    }).browserify({
        bundle: 'app.js',
        entry: 'index.jsx',
        process: {
            env: {
                NODE_ENV: 'production'
            }
        }
    }).write();
};
