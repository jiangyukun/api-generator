let util = require('../util')

module.exports = function (url, httpType, apiInfo, definitions) {
    let urlParts = url.split('/')
    let functionName = util.firstLetterLowerCase(urlParts[urlParts.length - 1])
    let parameters = apiInfo.parameters
    let responses = apiInfo.responses
    let responseClassName = '', responseShortClassName = ''
    let responseType = ''
    if (responses['200']) {
        let $ref = responses['200'].schema.$ref
        responseClassName = util.getResponseClassName(responses['200'].schema, definitions)
        let shortNameList = responseClassName.split('.')
        responseShortClassName = shortNameList[shortNameList.length - 1]

        if ($ref.indexOf('List«') != -1) {
            responseType = `Promise<${responseShortClassName}[]>`
        } else {
            if (responseClassName === 'System.String') {
                responseShortClassName = 'string'
            } else if (responseClassName === 'integer') {
                responseShortClassName = 'number'
            } else if (responseClassName === 'System.Boolean') {
                responseShortClassName = 'boolean'
            } else if (!definitions[responseClassName]) {
                responseShortClassName = 'number'
            }
            responseType = `Promise<${responseShortClassName}>`
        }


    }

    let functionParam = []
    let requestParam = []
    if (parameters && parameters.length === 1 && parameters[0].in === 'body') {
        let param = parameters[0]

        let responseClassName = util.getResponseClassName(param.schema, definitions)
        let shortNameList = responseClassName.split('.')
        let shortName = shortNameList[shortNameList.length - 1]
        functionParam.push({
            name: param.name,
            type: shortName
        })
        requestParam.push(param.name)
    }

    if (functionName.indexOf('{') != -1) {
        functionName = functionName.replace('{', '').replace('}', '')
        functionName = 'by' + functionName.replace(functionName[0], functionName[0].toUpperCase())
    }

    let apiStr = `
/**
 * ${apiInfo.summary}
 */
export function ${functionName}(${functionParam.map(p => `${p.name}: ${p.type}`).join(', ')}): ${responseType} {
  return _${httpType}('${url}'${requestParam.length > 0 ? ', ' : ''}${requestParam.join(', ')})
}
`
    return apiStr
}
