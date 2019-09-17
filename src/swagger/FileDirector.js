let fs = require('fs')

class FileDirector {
    constructor() {
        this.header = ''
        this.body = ''
        this.footer = ''
    }

    build(fileBuilder) {
        this.header = fileBuilder.buildHeader()
        this.body = fileBuilder.buildBody()
        this.footer = fileBuilder.buildFooter()
    }

    getResult() {
        return this.header + this.body + this.footer
    }

    write(path) {
        let result = this.getResult()
        fs.writeFileSync(path, result)
    }
}

module.exports = FileDirector
