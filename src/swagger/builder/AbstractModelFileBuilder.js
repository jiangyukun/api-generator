let util = require('../util')

const responseClassIgnoreList = ['int']

class AbstractModelFileBuilder {
    constructor(apiUrls, paths, definitions) {
        this.apiUrls = apiUrls
        this.paths = paths
        this.definitions = definitions
        this.registerModalClassList = []
        this.modalClassList = []

        this.registerClass = this.registerClass.bind(this)
    }

    buildHeader() {
        return `
/*
 * generated by api-generator, do not modify.
 */
`
    }

    buildBody() {
        let body = ''
        for (let url of this.apiUrls) {
            let apiItem = this.paths[url]
            let httpTypes = Object.getOwnPropertyNames(apiItem)

            for (let httpType of httpTypes) {
                let apiInfo = apiItem[httpType]
                if (apiInfo.deprecated === true) {
                    continue
                }

                // 返回值
                let responseClassName = util.getResponseClassName(apiInfo.responses['200'].schema, this.definitions)
                let shortNameList = responseClassName.split('.')
                let shortName = shortNameList[shortNameList.length - 1]
                if (responseClassName && responseClassIgnoreList.indexOf(responseClassName) === -1 && this.modalClassList.indexOf(responseClassName) === -1) {
                    this.modalClassList.push(responseClassName)
                    body += this.generateModal(shortName, responseClassName, this.definitions[responseClassName], (modalName) => this.registerClass(modalName, this.registerModalClassList))
                }

                // 请求参数
                let parameters = apiInfo.parameters
                if (parameters && parameters.length === 1 && parameters[0].in === 'body') {
                    let param = parameters[0]

                    let requestClassName = util.getResponseClassName(param.schema, this.definitions)
                    let shortNameList = requestClassName.split('.')
                    let shortName = shortNameList[shortNameList.length - 1]
                    if (this.modalClassList.indexOf(requestClassName) === -1) {
                        this.modalClassList.push(requestClassName)
                        body += this.generateModal(shortName, requestClassName, this.definitions[requestClassName], (modalName) => this.registerClass(modalName, this.registerModalClassList))
                    }
                }
            }

        }
        while (this.registerModalClassList.length > 0) {
            let depList = []
            this.registerModalClassList.forEach(modalClass => {
                let shortNameList = modalClass.split('.')
                let shortName = shortNameList[shortNameList.length - 1]

                if (this.modalClassList.indexOf(modalClass) == -1) {
                    this.modalClassList.push(modalClass)
                    body += this.generateModal(shortName, modalClass, this.definitions[modalClass], (modalName) => this.registerClass(modalName, depList))
                }
            })
            this.registerModalClassList = depList
        }
        return body
    }

    generateModal(shortName, modalClass, definition, registerClass) {
        throw new Error('override in subclass')
    }

    buildFooter() {
        return ''
    }

    //处理model依赖
    registerClass(modalName, list) {
        if (list.indexOf(modalName) === -1) {
            list.push(modalName)
        }
    }
}

module.exports = AbstractModelFileBuilder
