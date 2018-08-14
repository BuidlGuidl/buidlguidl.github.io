const req = require.context('.', true, /\.\/graphics\/[^/]+\.(jpg|jepg|png|gif)$/)

req.keys().forEach((key) => {
  const fileName = key.replace(/^.+\/([^/]+)\.(jpg|jepg|png|gif)/, '$1')
  module.exports[fileName] = req(key)
})