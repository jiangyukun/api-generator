let path = require('path')
let axios = require('axios')

let FileDirector = require('./FileDirector')
let TsServiceFileBuilder = require('./builder/TsServiceFileBuilder')
let TypescriptInterfaceFileBuilder = require('./builder/TypescriptInterfaceFileBuilder')

let util = require('./util')

function generateCode(distPath) {
    axios.get('http://localhost:8000/v2/api-docs').then(res => {
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

            let serviceFilePath = path.resolve(`${distPath}`, util.firstLetterLowerCase(options.filename) + '-api.ts')
            director.build(new TsServiceFileBuilder(filterApiPaths, paths, definitions, `./types/${options.filename}Type`))
            director.write(serviceFilePath)

            let tsFilePath = path.resolve(`${distPath}/types/`, options.filename + 'Type.ts')
            director.build(new TypescriptInterfaceFileBuilder(filterApiPaths, paths, definitions))
            director.write(tsFilePath)
        }
    })
}

module.exports = generateCode

generateCode(path.join(__dirname, '../../dist'))
