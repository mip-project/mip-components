/**
 * @file build.js build all project
 * @author tracy(qiushidev@gmail.com)
 */

const path = require('path');
const fs = require('fs-extra');
const execa = require('execa');
const async = require('async');

const projects = fs.readdirSync(path.resolve(__dirname, '../projects'));

if (projects.length < 1) {
    console.log('ERR: No project found in porjects directory');
    return;
}

const build = function (proj, done) {
    let src = path.join(process.cwd(), 'projects', proj);
    let dist = path.join(process.cwd(), 'dist', proj);

    execa('mip2', ['build', '--dir', src, '--output', dist])
    .then(res => {
        done();
    });
};

console.log('Building... Please wait');

async.each(projects, build, err => {
    if (err) {
        console.log(err);
    }
    else {
        console.log('All projects has been build successfully!');
    }
});
