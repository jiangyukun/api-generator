let path = require('path')
let axios = require('axios')

let FileDirector = require('./FileDirector')
let TsServiceFileBuilder = require('./builder/TsServiceFileBuilder')
let TypescriptInterfaceFileBuilder = require('./builder/TypescriptInterfaceFileBuilder')

let util = require('./util')

function generateCode(distPath) {
    axios.get('http://10.88.30.128:8083/swagger/docs/v1').then(res => {
        let swaggerJson = res.data
        const paths = swaggerJson.paths
        const definitions = swaggerJson.definitions

        let apiPaths = Object.getOwnPropertyNames(paths)

        let serviceSet = new Set()
        for (let key of apiPaths) {
            let category = key.split('/')
            serviceSet.add(category[2])
        }

        for (let service of serviceSet) {
            if (service === 'Test' || service === 'SchoolPalPay') {
                continue
            }
            autoGenerator({
                filename: `${service}`,
                filter(apiPath) {
                    return apiPath.indexOf(`/${service}/`) !== -1 && apiPath.indexOf('/api/Common/UploadImage') === -1 && apiPath.indexOf('/api/Common/Test') === -1
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
