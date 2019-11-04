let generateService = require('../common/generateService')
let util = require('../util')

class NodeServiceFileBuilder {
    constructor(apiUrls, paths, definitions) {
        this.apiUrls = apiUrls
        this.paths = paths
        this.definitions = definitions
        this.exportFunctionList = []
    }

    buildHeader() {
        return `import axios from 'axios'`
    }

    buildBody() {
        let body = ''
        for (let url of this.apiUrls) {
            let urlParts = url.split('/')
            let functionName = util.firstLetterLowerCase(urlParts[urlParts.length - 1])
            this.exportFunctionList.push(functionName)
            let apiItem = this.paths[url]
            let httpType = Object.getOwnPropertyNames(apiItem)[0]
            body += generateService(url, httpType, apiItem[httpType])
        }
        return body
    }

    buildFooter() {
        return `module.exports = {\r\n    ${this.exportFunctionList.join(',\r\n    ')}\r\n}`
    }
}

module.exports = NodeServiceFileBuilder
