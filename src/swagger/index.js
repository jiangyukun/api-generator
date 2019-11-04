let path = require('path')
let axios = require('axios')

let FileDirector = require('./FileDirector')
let TsServiceFileBuilder = require('./builder/TsServiceFileBuilder')
let TypescriptInterfaceFileBuilder = require('./builder/TypescriptInterfaceFileBuilder')

let util = require('./util')

function generateCode(distPath) {
    axios.get('http://192.168.2.21:8000/api/v2/api-docs').then(res => {
        let swaggerJson = res.data
        const paths = swaggerJson.paths
        const definitions = swaggerJson.definitions

        let apiPaths = Object.getOwnPropertyNames(paths)

        let serviceSet = new Set()
        for (let key of apiPaths) {
            let category = key.split('/')
            serviceSet.add(category[1])
        }

        for (let service of serviceSet) {
            autoGenerator({
                filename: `${service}`,
                filter(apiPath) {
                    return apiPath.indexOf(`/${service}`) !== -1
                }
            })
        }

        function autoGenerator(options) {
            let filterApiPaths = apiPaths.filter(options.filter)

            let director = new FileDirector()
            let typeFileName = options.filename.replace(/^\w/, c => c.toUpperCase())

            let serviceFilePath = path.resolve(`${distPath}`, util.firstLetterLowerCase(options.filename) + '-api.ts')
            director.build(new TsServiceFileBuilder(filterApiPaths, paths, definitions, `./types/${typeFileName}Type`))
            director.write(serviceFilePath)

            let tsFilePath = path.resolve(`${distPath}/types/`, typeFileName + 'Type.ts')
            director.build(new TypescriptInterfaceFileBuilder(filterApiPaths, paths, definitions))
            director.write(tsFilePath)
        }
    })
}

module.exports = generateCode

generateCode('D:/2019/Porjects/mgcc/mgcc-config-view/src/api-ts')
