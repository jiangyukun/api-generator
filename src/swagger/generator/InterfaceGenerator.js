class InterfaceGenerator {
    constructor(definition) {
        this.description = definition.description
        let properties = definition.properties
        let propertyKeys = Object.getOwnPropertyNames(properties)
        this.typeList = propertyKeys.map(key => {
            let property = properties[key]
            let type = property.type
            if (property.$ref) {
                type = 'class'
            }
            switch (type) {
                case 'integer':
                case 'string':
                case 'boolean':
                case 'number':
                    return new PrimitiveProperty(key, property, type)
                case 'class':
                    return new ClassProperty(key, property)
                case 'array':
                    return new ArrayProperty(key, property)
                case 'object':
                    return new ObjectProperty(key, property)
            }
            throw new Error(`属性数据类型未知：${property.type}`)
        })
    }

    generate(context) {
        let propertyStr = this.typeList.map(property => {
            return property.get(context) + '\r\n'
        }).join('')

        //修复swagger无法显示父类中的private属性
        if (context.interfaceName == 'MeasureDataPoint') {
            propertyStr += 'registerType?: number // 寄存器类型\r\n'
            propertyStr += 'pollingPeriod?: number // 周期\r\n'
            propertyStr += 'shouldNewRequest?: boolean // 是否新开请求\r\n'
            propertyStr += 'isAddrInverse?: boolean // 是否是高低位取反\r\n'
        }
        if (context.interfaceName == 'BasePort') {
            propertyStr += 'serverIp?: string //\r\n'
            propertyStr += 'serverPort?: number //\r\n'
            propertyStr += 'iec104CommonAddress?: number //\r\n'
            propertyStr += 'iec104CommonAddressFieldLength?: number //\r\n'
            propertyStr += 'iec104CotFieldLength?: number //\r\n'
            propertyStr += 'iec104IoaFieldLength?: number //\r\n'
            propertyStr += 'iec104MaxIdleTime?: number //\r\n'
            propertyStr += 'iec104MaxTimeNoAckReceived?: number //\r\n'
            propertyStr += 'iec104MaxTimeNoAckSent?: number //\r\n'
            propertyStr += 'iec104MaxUnconfirmedIPdusReceived?: number //\r\n'
            propertyStr += 'iec104MmessageFragmentTimeout?: number //\r\n'
        }
        if (context.interfaceName == 'BaseStrategyParameter') {
            propertyStr += 'chargePower?: number //\r\n'
            propertyStr += 'dischargePower?: number //\r\n'
            propertyStr += 'maxPowerRate?: number //\r\n'
            propertyStr += 'priceInfo?: PriceInfo //\r\n'
            propertyStr += 'ratedPower?: number //\r\n'
            propertyStr += 'socLowerLimit?: number //\r\n'
            propertyStr += 'socUpperLimit?: number //\r\n'
            propertyStr += 'storedEnergyCapacity?: number //\r\n'

        }
        if (context.interfaceName == 'StrategyModel') {
            propertyStr += 'strategyType?: string //\r\n'

        }

        return `
/**
 * ${this.description || ''}
 */
export interface ${context.interfaceName} {
    ${propertyStr}
}
`
    }
}

class PrimitiveProperty {
    constructor(key, property, type) {
        this.key = key
        this.property = property
        this.type = type
    }

    get(context) {
        let type = this.type
        if (type === 'integer') {
            type = 'number'
        }
        return `${this.key}?: ${type} // ${this.property.description || ''}`
    }
}

class ClassProperty {
    constructor(key, property) {
        this.key = key
        this.property = property
        this.targeClass = property.$ref.substring(14)
    }

    get(context) {
        context.registerClass(this.targeClass, this.property.$ref)
        let shortNameList = this.targeClass.split('.')
        let shortName = shortNameList[shortNameList.length - 1]
        return `${this.key}?: ${shortName} // ${this.property.description || ''}`
    }
}

class ArrayProperty {
    constructor(key, property) {
        this.key = key
        this.property = property
        if (property.items.type === 'integer') {
            this.targeClass = 'integer'
        } else if (property.items.type === 'string') {
            this.targeClass = 'string'
        } else {
            this.targeClass = property.items.$ref.substring(14)
        }
    }

    get(context) {
        let shortName = ''
        if (this.targeClass === 'integer') {
            shortName = 'number'
        } else if (this.targeClass === 'string') {
            shortName = 'string'
        } else {
            context.registerClass(this.targeClass, this.property.$ref)
            let shortNameList = this.targeClass.split('.')
            shortName = shortNameList[shortNameList.length - 1]
        }
        return `${this.key}?: ${shortName}[] // ${this.property.description || ''}`
    }
}

class ObjectProperty {
    constructor(key, property) {
        this.key = key
        this.property = property
    }

    get(context) {
        return `${this.key}?: any // ${this.property.description || ''}`
    }
}

module.exports = InterfaceGenerator
