/**
 * 代表一个Typescript 函数
 */

class TsFunction {
    functionName = ''

    requestList = null

    response = null

    body = ''

    returnType = null

    constructor() {

    }

    toString() {
        return `
        function ${this.functionName}(): ${this.returnType} {
            ${this.body}
        }
        `
    }
}
