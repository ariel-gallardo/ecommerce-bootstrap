const liveServer = require("live-server");
const {HOST, PORT, ROOT, BASE_FILE} = require('dotenv').config().parsed
const bootstrap = './node_modules/bootstrap/dist'

liveServer.start({
    host: HOST,
    port: PORT,
    root: `./${ROOT}`,
    file: `${BASE_FILE}.html`,
    mount: [[`${bootstrap}/css`,'/css'],[`${bootstrap}/js`,'/js']]
})