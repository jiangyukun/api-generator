let util = require('../util')

module.exports = function (url, httpType, apiInfo, definitions, isFunctionNameRepeat) {
    let urlParts = url.split('/')
    let functionName = null
    if (urlParts[urlParts.length - 1].indexOf('{') != -1) {
        functionName = util.firstLetterLowerCase(urlParts[urlParts.length - 2])
    } else {
        functionName = util.firstLetterLowerCase(urlParts[urlParts.length - 1])
    }

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
            if (responseClassName === 'integer') {
                responseShortClassName = 'number'
            } else if (!definitions[responseClassName]) {
                responseShortClassName = 'number'
            }
            responseType = `Promise<${responseShortClassName}>`
        }
    }

    let functionParam = []
    let requestParam = []
    if (parameters && parameters.length > 0) {
        for (let param of parameters) {
            if (param.in === 'body') {
                let responseClassName = util.getResponseClassName(param.schema, definitions)
                let shortNameList = responseClassName.split('.')
                let shortName = shortNameList[shortNameList.length - 1]
                functionParam.push({
                    name: param.name,
                    type: shortName
                })
                requestParam.push(param.name)
            }
            if (param.in === 'query') {
                functionParam.push({
                    name: 'params',
                    type: `{${param.name}: ${param.type}}`
                })
                requestParam.push('params')
            }
            if (param.in == 'path') {
                functionParam.push({
                    name: param.name,
                    type: util.getPathType(param.type)
                })
                requestParam.push(param.name)
            }
        }
    }

    if (functionName.indexOf('{') != -1) {
        functionName = functionName.replace('{', '').replace('}', '')
    }
    let functionNameWithUpLetter = functionName.replace(functionName[0], functionName[0].toUpperCase())
    if (isFunctionNameRepeat) {
        if (httpType == 'get') {
            functionName = 'fetch' + functionNameWithUpLetter + 'List'
        } else if (httpType == 'post') {
            functionName = 'add' + functionNameWithUpLetter
        } else if (httpType == 'put') {
            functionName = 'update' + functionNameWithUpLetter
        }
    }
    if (httpType == 'delete') {
        functionName = 'delete' + functionNameWithUpLetter
    }
    let restUrl = url.replace('{', '${')

    let apiStr = `
/**
 * ${apiInfo.summary}
 */
export function ${functionName}Api(${functionParam.map(p => `${p.name}: ${p.type}`).join(', ')}): ${responseType} {
  return _${httpType}(\`${restUrl}\`${requestParam.length > 0 ? ', ' : ''}${requestParam.join(', ')})
}
`
    return apiStr
}
