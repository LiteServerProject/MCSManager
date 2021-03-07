const fs = require("fs");
const { promisify } = require('util')

//请求下载最新动态并且缓存到本地
async function requestCloudText() {
    await promisify(fs.writeFile)("./public/cloud.json", JSON.stringify({
        items: [{
            title: "Cloud Sync",
            msg: "云同步未启用",
        }],
    }))
}

module.exports = {
    requestCloudText
};
