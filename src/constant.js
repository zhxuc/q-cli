const path = require('path')

const config = require(path.resolve(__dirname, '../package.json'))

// 导出 package.json 的 作者 和 repos 字段
module.exports = {
  author: config.author,
  repos: config.repos
}
