function firstLetterLowerCase(str) {
    if (!str) return str

    let firstLetter = str[0]
    return firstLetter.toLowerCase() + str.substring(1)
}

function getResponseClassName(schema, definitions) {
    let ref = ''
    let type = schema.type
    if (type === 'boolean') {
        return ''
    }
    if (type == 'integer') {
        return 'integer'
    }
    if (type === 'array') {
        if (schema.items.$ref) {
            ref = schema.items.$ref
        } else {
            if (schema.items.type === 'integer') {
                // ignore
            } else {
                console.warn(`unhandled ${schema.items}`)
            }
        }
    } else {
        ref = schema.$ref
    }
    let responseClassName = getClassName(ref)

    if (!responseClassName) {
        return ''
    }
    /*if (!definitions[responseClassName]) {
        console.error(responseClassName)
        return ''
    }*/
    return responseClassName
}

function getClassName(str) {
    if (!str) {
        return ''
    }
    let responseClassName = getContent(str)

    if (!responseClassName) {
        return ''
    }
    while (responseClassName.indexOf('«') !== -1) {
        responseClassName = getContent(responseClassName)
    }
    // console.log(`${str} ==>> ${responseClassName}`)
    return responseClassName
}

function getContent(str) {
    if (str.indexOf('«') == -1) {
        if (str.indexOf('#') != -1) {
            return str.substr(14)
        }
        return str
    }
    let left = str.indexOf('«')
    let right = str.lastIndexOf('»')
    let typeStr = str.substring(left + 1, right)
    let index = typeStr.indexOf(',')
    return typeStr.substring(index + 1)
}

function getPathType(type) {
    if (type == 'integer') {
        return 'number'
    }
    return type
}

module.exports = {
    getClassName, firstLetterLowerCase, getResponseClassName, getPathType
}
