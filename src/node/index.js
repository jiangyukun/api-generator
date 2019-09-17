let path = require('path')
let axios = require('axios')

class FunctionModal {
    name = null
    request = null
    response =  null
    constructor() {

    }
}

function generateCode(distPath) {
    axios.get('http://192.168.3.207:6002/apidoc/api_data.js?v=1568707064766').then(res => {
        let apiDocTxt = res.data
        let prefix = `define({ "api": `
        let jsonTxt = apiDocTxt.substring(prefix.length, apiDocTxt.length - 5)
        let apiList = JSON.parse(jsonTxt)
        for (let api of apiList) {

        }
    })
}

generateCode(path.join(__dirname, '../../dist'))
