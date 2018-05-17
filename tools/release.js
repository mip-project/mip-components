/**
 * @file upload build resources to bos
 * @author tracy(qiushidev@gmail.com)
 */

const path = require('path');
const fs = require('fs-extra');
const async = require('async');
const home = require('user-home');
const BosClient = require('baidubce-sdk').BosClient;
const bosConfig = require(path.join(home, '.mipbosconf'));

const distPath = path.resolve(__dirname, '../dist');

if (!fs.pathExistsSync(distPath)) {
    console.log('ERR: dist does not exist! Please build before release');
    return;
}

const bosClient = new BosClient({
    credentials: bosConfig.credentials,
    endpoint: bosConfig.endpoint
});

const upload = function (fileName, done) {
    let file = path.join(process.cwd(), '/dist', fileName); // User/xxx/mip-components/dist/mip-a.js
    let savePath = path.join(bosConfig.path, 'common', fileName); // /mip/projects/<project-name>/mip-a.js 这里是官方通用组件，project-name 暂用 common

    bosClient.putObjectFromFile(
        bosConfig.bucket,
        savePath,
        file,
        {
            'Content-Type': 'application/javascript',
            'Cache-Control': 'max-age=600'
        }
    )
    .then(() => {
        let outputUrl = bosConfig.endpoint + '/' + bosConfig.bucket + savePath;
        // output as: https://bos.nj.bpc.baidu.com/assets/mip/projects/<project-name>/mip-a.js
        console.log(outputUrl);
        done();
    })
    .catch(e => {
        done(e);
    });
};

const files = fs.readdirSync(path.resolve(__dirname, '../dist'));

async.each(files, upload, err => {
    if (err) {
        console.log(err);
    }
    else {
        console.log('All resources has been Uploaded successfully!');
    }
});

