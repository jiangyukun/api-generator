define({
    "api": [
        {
            "type": "get",
            "url": "/enums/analogs/type",
            "title": "点号数据类型枚举",
            "version": "0.0.0",
            "group": "Enums_Analogs",
            "description": "<p>点号数据类型枚举</p>",
            "header": {
                "fields": {
                    "Header": [
                        {
                            "group": "Header",
                            "type": "String",
                            "optional": false,
                            "field": "access-token",
                            "description": "<p>用户Token</p>"
                        }
                    ]
                }
            },
            "parameter": {
                "fields": {
                    "Parameter": [
                        {
                            "group": "Parameter",
                            "type": "Number",
                            "optional": false,
                            "field": "deviceTypeId",
                            "description": "<p>设备类型ID</p>"
                        }
                    ]
                }
            },
            "filename": "routes/enums/analogs.js",
            "groupTitle": "Enums_Analogs",
            "name": "GetEnumsAnalogsType",
            "sampleRequest": [
                {
                    "url": "http://localhost:6002/enums/analogs/type"
                }
            ]
        },
        {
            "type": "get",
            "url": "/enums/areas/child/:hasAll",
            "title": "子地区枚举",
            "version": "0.0.0",
            "group": "Enums_Areas",
            "description": "<p>子地区枚举</p>",
            "header": {
                "fields": {
                    "Header": [
                        {
                            "group": "Header",
                            "type": "String",
                            "optional": false,
                            "field": "access-token",
                            "description": "<p>用户Token</p>"
                        }
                    ]
                }
            },
            "parameter": {
                "fields": {
                    "Parameter": [
                        {
                            "group": "Parameter",
                            "type": "Number",
                            "optional": false,
                            "field": "id",
                            "description": "<p>父地区ID</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "String",
                            "optional": false,
                            "field": "parentType",
                            "description": "<p>父地区类型 province/city</p>"
                        }
                    ]
                }
            },
            "filename": "routes/enums/areas.js",
            "groupTitle": "Enums_Areas",
            "name": "GetEnumsAreasChildHasall",
            "sampleRequest": [
                {
                    "url": "http://localhost:6002/enums/areas/child/:hasAll"
                }
            ]
        },
        {
            "type": "get",
            "url": "/enums/areas/top/:hasAll",
            "title": "顶级地区枚举",
            "version": "0.0.0",
            "group": "Enums_Areas",
            "description": "<p>顶级地区枚举</p>",
            "header": {
                "fields": {
                    "Header": [
                        {
                            "group": "Header",
                            "type": "String",
                            "optional": false,
                            "field": "access-token",
                            "description": "<p>用户Token</p>"
                        }
                    ]
                }
            },
            "parameter": {
                "fields": {
                    "Parameter": [
                        {
                            "group": "Parameter",
                            "type": "Boolean",
                            "optional": false,
                            "field": "hasAll",
                            "description": "<p>是否有全国,国外字段</p>"
                        }
                    ]
                }
            },
            "filename": "routes/enums/areas.js",
            "groupTitle": "Enums_Areas",
            "name": "GetEnumsAreasTopHasall",
            "sampleRequest": [
                {
                    "url": "http://localhost:6002/enums/areas/top/:hasAll"
                }
            ]
        },
        {
            "type": "get",
            "url": "/enums/analogs-type",
            "title": "获取点号类型",
            "version": "0.0.0",
            "group": "Enums_Devices",
            "description": "<p>获取点号类型</p>",
            "header": {
                "fields": {
                    "Header": [
                        {
                            "group": "Header",
                            "type": "String",
                            "optional": false,
                            "field": "access-token",
                            "description": "<p>用户Token</p>"
                        }
                    ]
                }
            },
            "filename": "routes/enums/analogs-types.js",
            "groupTitle": "Enums_Devices",
            "name": "GetEnumsAnalogsType",
            "sampleRequest": [
                {
                    "url": "http://localhost:6002/enums/analogs-type"
                }
            ]
        },
        {
            "type": "get",
            "url": "/enums/customer/type",
            "title": "客户类型枚举",
            "version": "0.0.0",
            "group": "Enums_Devices",
            "description": "<p>客户类型枚举</p>",
            "header": {
                "fields": {
                    "Header": [
                        {
                            "group": "Header",
                            "type": "String",
                            "optional": false,
                            "field": "access-token",
                            "description": "<p>用户Token</p>"
                        }
                    ]
                }
            },
            "filename": "routes/enums/customer.js",
            "groupTitle": "Enums_Devices",
            "name": "GetEnumsCustomerType",
            "sampleRequest": [
                {
                    "url": "http://localhost:6002/enums/customer/type"
                }
            ]
        },
        {
            "type": "get",
            "url": "/enums/devices/breaker-positions",
            "title": "获取常态位置",
            "version": "0.0.0",
            "group": "Enums_Devices",
            "description": "<p>获取常态位置</p>",
            "header": {
                "fields": {
                    "Header": [
                        {
                            "group": "Header",
                            "type": "String",
                            "optional": false,
                            "field": "access-token",
                            "description": "<p>用户Token</p>"
                        }
                    ]
                }
            },
            "filename": "routes/enums/devices.js",
            "groupTitle": "Enums_Devices",
            "name": "GetEnumsDevicesBreakerPositions",
            "sampleRequest": [
                {
                    "url": "http://localhost:6002/enums/devices/breaker-positions"
                }
            ]
        },
        {
            "type": "get",
            "url": "/enums/devices/cool-types",
            "title": "获取冷却方式",
            "version": "0.0.0",
            "group": "Enums_Devices",
            "description": "<p>获取冷却方式</p>",
            "header": {
                "fields": {
                    "Header": [
                        {
                            "group": "Header",
                            "type": "String",
                            "optional": false,
                            "field": "access-token",
                            "description": "<p>用户Token</p>"
                        }
                    ]
                }
            },
            "filename": "routes/enums/devices.js",
            "groupTitle": "Enums_Devices",
            "name": "GetEnumsDevicesCoolTypes",
            "sampleRequest": [
                {
                    "url": "http://localhost:6002/enums/devices/cool-types"
                }
            ]
        },
        {
            "type": "get",
            "url": "/enums/devices/electricity-modes",
            "title": "获取用电方式",
            "version": "0.0.0",
            "group": "Enums_Devices",
            "description": "<p>获取用电方式</p>",
            "header": {
                "fields": {
                    "Header": [
                        {
                            "group": "Header",
                            "type": "String",
                            "optional": false,
                            "field": "access-token",
                            "description": "<p>用户Token</p>"
                        }
                    ]
                }
            },
            "filename": "routes/enums/devices.js",
            "groupTitle": "Enums_Devices",
            "name": "GetEnumsDevicesElectricityModes",
            "sampleRequest": [
                {
                    "url": "http://localhost:6002/enums/devices/electricity-modes"
                }
            ]
        },
        {
            "type": "get",
            "url": "/enums/devices/insulation-types",
            "title": "获取绝缘介质",
            "version": "0.0.0",
            "group": "Enums_Devices",
            "description": "<p>获取绝缘介质</p>",
            "header": {
                "fields": {
                    "Header": [
                        {
                            "group": "Header",
                            "type": "String",
                            "optional": false,
                            "field": "access-token",
                            "description": "<p>用户Token</p>"
                        }
                    ]
                }
            },
            "filename": "routes/enums/devices.js",
            "groupTitle": "Enums_Devices",
            "name": "GetEnumsDevicesInsulationTypes",
            "sampleRequest": [
                {
                    "url": "http://localhost:6002/enums/devices/insulation-types"
                }
            ]
        },
        {
            "type": "get",
            "url": "/enums/devices/object-type",
            "title": "获取设备对象类型",
            "version": "0.0.0",
            "group": "Enums_Devices",
            "description": "<p>获取设备对象类型</p>",
            "header": {
                "fields": {
                    "Header": [
                        {
                            "group": "Header",
                            "type": "String",
                            "optional": false,
                            "field": "access-token",
                            "description": "<p>用户Token</p>"
                        }
                    ]
                }
            },
            "filename": "routes/enums/devices.js",
            "groupTitle": "Enums_Devices",
            "name": "GetEnumsDevicesObjectType",
            "sampleRequest": [
                {
                    "url": "http://localhost:6002/enums/devices/object-type"
                }
            ]
        },
        {
            "type": "get",
            "url": "/enums/devices/parent",
            "title": "获取设备上级",
            "version": "0.0.0",
            "group": "Enums_Devices",
            "description": "<p>获取设备上级</p>",
            "header": {
                "fields": {
                    "Header": [
                        {
                            "group": "Header",
                            "type": "String",
                            "optional": false,
                            "field": "access-token",
                            "description": "<p>用户Token</p>"
                        }
                    ]
                }
            },
            "parameter": {
                "fields": {
                    "Parameter": [
                        {
                            "group": "Parameter",
                            "type": "Number",
                            "optional": false,
                            "field": "deviceTypeId",
                            "description": "<p>设备类型ID</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "Number",
                            "optional": false,
                            "field": "energyUnitId",
                            "description": "<p>能量单元ID</p>"
                        }
                    ]
                }
            },
            "filename": "routes/enums/devices.js",
            "groupTitle": "Enums_Devices",
            "name": "GetEnumsDevicesParent",
            "sampleRequest": [
                {
                    "url": "http://localhost:6002/enums/devices/parent"
                }
            ]
        },
        {
            "type": "get",
            "url": "/enums/devices/property",
            "title": "获取设备属性枚举",
            "version": "0.0.0",
            "group": "Enums_Devices",
            "description": "<p>获取设备属性枚举</p>",
            "header": {
                "fields": {
                    "Header": [
                        {
                            "group": "Header",
                            "type": "String",
                            "optional": false,
                            "field": "access-token",
                            "description": "<p>用户Token</p>"
                        }
                    ]
                }
            },
            "parameter": {
                "fields": {
                    "Parameter": [
                        {
                            "group": "Parameter",
                            "type": "Number",
                            "optional": false,
                            "field": "deviceTypeId",
                            "description": "<p>设备类型ID</p>"
                        }
                    ]
                }
            },
            "filename": "routes/enums/devices.js",
            "groupTitle": "Enums_Devices",
            "name": "GetEnumsDevicesProperty",
            "sampleRequest": [
                {
                    "url": "http://localhost:6002/enums/devices/property"
                }
            ]
        },
        {
            "type": "get",
            "url": "/enums/devices/terminal-types",
            "title": "获取设备端子",
            "version": "0.0.0",
            "group": "Enums_Devices",
            "description": "<p>获取设备端子</p>",
            "header": {
                "fields": {
                    "Header": [
                        {
                            "group": "Header",
                            "type": "String",
                            "optional": false,
                            "field": "access-token",
                            "description": "<p>用户Token</p>"
                        }
                    ]
                }
            },
            "parameter": {
                "fields": {
                    "Parameter": [
                        {
                            "group": "Parameter",
                            "type": "Number",
                            "optional": false,
                            "field": "deviceTypeId",
                            "description": "<p>设备类型ID</p>"
                        }
                    ]
                }
            },
            "filename": "routes/enums/devices.js",
            "groupTitle": "Enums_Devices",
            "name": "GetEnumsDevicesTerminalTypes",
            "sampleRequest": [
                {
                    "url": "http://localhost:6002/enums/devices/terminal-types"
                }
            ]
        },
        {
            "type": "get",
            "url": "/enums/devices/type",
            "title": "获取设备类型",
            "version": "0.0.0",
            "group": "Enums_Devices",
            "description": "<p>获取设备类型</p>",
            "header": {
                "fields": {
                    "Header": [
                        {
                            "group": "Header",
                            "type": "String",
                            "optional": false,
                            "field": "access-token",
                            "description": "<p>用户Token</p>"
                        }
                    ]
                }
            },
            "filename": "routes/enums/devices.js",
            "groupTitle": "Enums_Devices",
            "name": "GetEnumsDevicesType",
            "sampleRequest": [
                {
                    "url": "http://localhost:6002/enums/devices/type"
                }
            ]
        },
        {
            "type": "get",
            "url": "/enums/devices/winding-types",
            "title": "获取绕组数量",
            "version": "0.0.0",
            "group": "Enums_Devices",
            "description": "<p>获取绕组数量</p>",
            "header": {
                "fields": {
                    "Header": [
                        {
                            "group": "Header",
                            "type": "String",
                            "optional": false,
                            "field": "access-token",
                            "description": "<p>用户Token</p>"
                        }
                    ]
                }
            },
            "filename": "routes/enums/devices.js",
            "groupTitle": "Enums_Devices",
            "name": "GetEnumsDevicesWindingTypes",
            "sampleRequest": [
                {
                    "url": "http://localhost:6002/enums/devices/winding-types"
                }
            ]
        },
        {
            "type": "get",
            "url": "/enums/roles",
            "title": "角色枚举",
            "version": "0.0.0",
            "group": "Enums_Devices",
            "description": "<p>客户类型枚举</p>",
            "header": {
                "fields": {
                    "Header": [
                        {
                            "group": "Header",
                            "type": "String",
                            "optional": false,
                            "field": "access-token",
                            "description": "<p>用户Token</p>"
                        }
                    ]
                }
            },
            "filename": "routes/enums/roles.js",
            "groupTitle": "Enums_Devices",
            "name": "GetEnumsRoles",
            "sampleRequest": [
                {
                    "url": "http://localhost:6002/enums/roles"
                }
            ]
        },
        {
            "type": "get",
            "url": "/enums/superior/units",
            "title": "上级单位枚举",
            "version": "0.0.0",
            "group": "Enums_Devices",
            "description": "<p>客户类型枚举</p>",
            "header": {
                "fields": {
                    "Header": [
                        {
                            "group": "Header",
                            "type": "String",
                            "optional": false,
                            "field": "access-token",
                            "description": "<p>用户Token</p>"
                        }
                    ]
                }
            },
            "filename": "routes/enums/superior.js",
            "groupTitle": "Enums_Devices",
            "name": "GetEnumsSuperiorUnits",
            "sampleRequest": [
                {
                    "url": "http://localhost:6002/enums/superior/units"
                }
            ]
        },
        {
            "type": "get",
            "url": "/enums/energy-units",
            "title": "根据设备类型和电站查询能量单元",
            "version": "0.0.0",
            "group": "Enums_EnergyUnit",
            "description": "<p>根据设备类型和电站查询能量单元</p>",
            "header": {
                "fields": {
                    "Header": [
                        {
                            "group": "Header",
                            "type": "String",
                            "optional": false,
                            "field": "access-token",
                            "description": "<p>用户Token</p>"
                        }
                    ]
                }
            },
            "parameter": {
                "fields": {
                    "Parameter": [
                        {
                            "group": "Parameter",
                            "type": "Number",
                            "optional": false,
                            "field": "deviceTypeId",
                            "description": "<p>设备类型ID</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "Number",
                            "optional": false,
                            "field": "stationId",
                            "description": "<p>电站ID</p>"
                        }
                    ]
                }
            },
            "filename": "routes/enums/energy-units.js",
            "groupTitle": "Enums_EnergyUnit",
            "name": "GetEnumsEnergyUnits",
            "sampleRequest": [
                {
                    "url": "http://localhost:6002/enums/energy-units"
                }
            ]
        },
        {
            "type": "get",
            "url": "/enums/energy-units/IO",
            "title": "能量单元进线/输出方式",
            "version": "0.0.0",
            "group": "Enums_EnergyUnit",
            "description": "<p>能量单元进线/输出方式</p>",
            "header": {
                "fields": {
                    "Header": [
                        {
                            "group": "Header",
                            "type": "String",
                            "optional": false,
                            "field": "access-token",
                            "description": "<p>用户Token</p>"
                        }
                    ]
                }
            },
            "filename": "routes/enums/energy-units.js",
            "groupTitle": "Enums_EnergyUnit",
            "name": "GetEnumsEnergyUnitsIo",
            "sampleRequest": [
                {
                    "url": "http://localhost:6002/enums/energy-units/IO"
                }
            ]
        },
        {
            "type": "get",
            "url": "/enums/energy-units/measure-points",
            "title": "能量单元计量点位置",
            "version": "0.0.0",
            "group": "Enums_EnergyUnit",
            "description": "<p>能量单元计量点位置</p>",
            "header": {
                "fields": {
                    "Header": [
                        {
                            "group": "Header",
                            "type": "String",
                            "optional": false,
                            "field": "access-token",
                            "description": "<p>用户Token</p>"
                        }
                    ]
                }
            },
            "filename": "routes/enums/energy-units.js",
            "groupTitle": "Enums_EnergyUnit",
            "name": "GetEnumsEnergyUnitsMeasurePoints",
            "sampleRequest": [
                {
                    "url": "http://localhost:6002/enums/energy-units/measure-points"
                }
            ]
        },
        {
            "type": "get",
            "url": "/enums/energy-units/type",
            "title": "能量单元类型",
            "version": "0.0.0",
            "group": "Enums_EnergyUnit",
            "description": "<p>能量单元类型</p>",
            "header": {
                "fields": {
                    "Header": [
                        {
                            "group": "Header",
                            "type": "String",
                            "optional": false,
                            "field": "access-token",
                            "description": "<p>用户Token</p>"
                        }
                    ]
                }
            },
            "filename": "routes/enums/energy-units.js",
            "groupTitle": "Enums_EnergyUnit",
            "name": "GetEnumsEnergyUnitsType",
            "sampleRequest": [
                {
                    "url": "http://localhost:6002/enums/energy-units/type"
                }
            ]
        },
        {
            "type": "get",
            "url": "/enums/energy-units/voltage-levels",
            "title": "能量单元并网等级",
            "version": "0.0.0",
            "group": "Enums_EnergyUnit",
            "description": "<p>能量单元并网等级</p>",
            "header": {
                "fields": {
                    "Header": [
                        {
                            "group": "Header",
                            "type": "String",
                            "optional": false,
                            "field": "access-token",
                            "description": "<p>用户Token</p>"
                        }
                    ]
                }
            },
            "filename": "routes/enums/energy-units.js",
            "groupTitle": "Enums_EnergyUnit",
            "name": "GetEnumsEnergyUnitsVoltageLevels",
            "sampleRequest": [
                {
                    "url": "http://localhost:6002/enums/energy-units/voltage-levels"
                }
            ]
        },
        {
            "type": "get",
            "url": "/enums/firms/idAndType",
            "title": "获取单位枚举",
            "version": "0.0.0",
            "group": "Enums_Firms",
            "description": "<p>获取单位枚举</p>",
            "header": {
                "fields": {
                    "Header": [
                        {
                            "group": "Header",
                            "type": "String",
                            "optional": false,
                            "field": "access-token",
                            "description": "<p>用户Token</p>"
                        }
                    ]
                }
            },
            "filename": "routes/enums/firms.js",
            "groupTitle": "Enums_Firms",
            "name": "GetEnumsFirmsIdandtype",
            "sampleRequest": [
                {
                    "url": "http://localhost:6002/enums/firms/idAndType"
                }
            ]
        },
        {
            "type": "get",
            "url": "/enums/firms/type",
            "title": "获取单位类型枚举",
            "version": "0.0.0",
            "group": "Enums_Firms",
            "description": "<p>获取单位类型枚举</p>",
            "header": {
                "fields": {
                    "Header": [
                        {
                            "group": "Header",
                            "type": "String",
                            "optional": false,
                            "field": "access-token",
                            "description": "<p>用户Token</p>"
                        }
                    ]
                }
            },
            "filename": "routes/enums/firms.js",
            "groupTitle": "Enums_Firms",
            "name": "GetEnumsFirmsType",
            "sampleRequest": [
                {
                    "url": "http://localhost:6002/enums/firms/type"
                }
            ]
        },
        {
            "type": "get",
            "url": "/enums/prices/priceRate",
            "title": "电价费率枚举",
            "version": "0.0.0",
            "group": "Enums_Prices",
            "description": "<p>电价费率枚举</p>",
            "header": {
                "fields": {
                    "Header": [
                        {
                            "group": "Header",
                            "type": "String",
                            "optional": false,
                            "field": "access-token",
                            "description": "<p>用户Token</p>"
                        }
                    ]
                }
            },
            "parameter": {
                "fields": {
                    "Parameter": [
                        {
                            "group": "Parameter",
                            "type": "Number",
                            "optional": true,
                            "field": "seasonPriceId",
                            "description": "<p>季节电价ID</p>"
                        }
                    ]
                }
            },
            "filename": "routes/enums/prices.js",
            "groupTitle": "Enums_Prices",
            "name": "GetEnumsPricesPricerate",
            "sampleRequest": [
                {
                    "url": "http://localhost:6002/enums/prices/priceRate"
                }
            ]
        },
        {
            "type": "get",
            "url": "/enums/prices/voltageLevels",
            "title": "电价电压等级",
            "version": "0.0.0",
            "group": "Enums_Prices",
            "description": "<p>电价电压等级</p>",
            "header": {
                "fields": {
                    "Header": [
                        {
                            "group": "Header",
                            "type": "String",
                            "optional": false,
                            "field": "access-token",
                            "description": "<p>用户Token</p>"
                        }
                    ]
                }
            },
            "parameter": {
                "fields": {
                    "Parameter": [
                        {
                            "group": "Parameter",
                            "type": "Number",
                            "optional": true,
                            "field": "seasonPriceId",
                            "description": "<p>季节电价ID</p>"
                        }
                    ]
                }
            },
            "filename": "routes/enums/prices.js",
            "groupTitle": "Enums_Prices",
            "name": "GetEnumsPricesVoltagelevels",
            "sampleRequest": [
                {
                    "url": "http://localhost:6002/enums/prices/voltageLevels"
                }
            ]
        },
        {
            "type": "get",
            "url": "/enums/stations/status/:hasAll",
            "title": "获取电站状态枚举",
            "version": "0.0.0",
            "group": "Enums_Stations",
            "description": "<p>获取电站状态枚举</p>",
            "header": {
                "fields": {
                    "Header": [
                        {
                            "group": "Header",
                            "type": "String",
                            "optional": false,
                            "field": "access-token",
                            "description": "<p>用户Token</p>"
                        }
                    ]
                }
            },
            "parameter": {
                "fields": {
                    "Parameter": [
                        {
                            "group": "Parameter",
                            "type": "Boolean",
                            "optional": false,
                            "field": "hasAll",
                            "description": "<p>是否含有全部字段</p>"
                        }
                    ]
                }
            },
            "filename": "routes/enums/stations.js",
            "groupTitle": "Enums_Stations",
            "name": "GetEnumsStationsStatusHasall",
            "sampleRequest": [
                {
                    "url": "http://localhost:6002/enums/stations/status/:hasAll"
                }
            ]
        },
        {
            "type": "get",
            "url": "/enums/stations/type",
            "title": "获取电站类型枚举",
            "version": "0.0.0",
            "group": "Enums_Stations",
            "description": "<p>获取电站类型枚举</p>",
            "header": {
                "fields": {
                    "Header": [
                        {
                            "group": "Header",
                            "type": "String",
                            "optional": false,
                            "field": "access-token",
                            "description": "<p>用户Token</p>"
                        }
                    ]
                }
            },
            "filename": "routes/enums/stations.js",
            "groupTitle": "Enums_Stations",
            "name": "GetEnumsStationsType",
            "sampleRequest": [
                {
                    "url": "http://localhost:6002/enums/stations/type"
                }
            ]
        },
        {
            "type": "get",
            "url": "/models/image",
            "title": "下载",
            "version": "0.0.0",
            "group": "Image",
            "header": {
                "fields": {
                    "Header": [
                        {
                            "group": "Header",
                            "type": "String",
                            "optional": false,
                            "field": "access-token",
                            "description": "<p>用户Token</p>"
                        }
                    ]
                }
            },
            "filename": "routes/models/image.js",
            "groupTitle": "Image",
            "name": "GetModelsImage",
            "sampleRequest": [
                {
                    "url": "http://localhost:6002/models/image"
                }
            ]
        },
        {
            "type": "post",
            "url": "/models/login",
            "title": "登录",
            "version": "0.0.0",
            "group": "Login",
            "parameter": {
                "fields": {
                    "Parameter": [
                        {
                            "group": "Parameter",
                            "type": "String",
                            "optional": false,
                            "field": "name",
                            "description": "<p>用户名</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "String",
                            "optional": false,
                            "field": "password",
                            "description": "<p>密码</p>"
                        }
                    ]
                }
            },
            "filename": "routes/models/login.js",
            "groupTitle": "Login",
            "name": "PostModelsLogin",
            "sampleRequest": [
                {
                    "url": "http://localhost:6002/models/login"
                }
            ]
        },
        {
            "type": "post",
            "url": "/models/login/out",
            "title": "退出登录",
            "version": "0.0.0",
            "group": "Login",
            "header": {
                "fields": {
                    "Header": [
                        {
                            "group": "Header",
                            "type": "String",
                            "optional": false,
                            "field": "access-token",
                            "description": "<p>用户Token</p>"
                        }
                    ]
                }
            },
            "parameter": {
                "fields": {
                    "Parameter": [
                        {
                            "group": "Parameter",
                            "type": "Number",
                            "optional": false,
                            "field": "id",
                            "description": "<p>用户ID</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "String",
                            "optional": false,
                            "field": "name",
                            "description": "<p>用户名</p>"
                        }
                    ]
                }
            },
            "filename": "routes/models/login.js",
            "groupTitle": "Login",
            "name": "PostModelsLoginOut",
            "sampleRequest": [
                {
                    "url": "http://localhost:6002/models/login/out"
                }
            ]
        },
        {
            "type": "get",
            "url": "/models/firms/list/by-type",
            "title": "根据单位类型获取单位列表",
            "version": "0.0.0",
            "group": "Model_Firms",
            "description": "<p>根据单位类型获取单位列表</p>",
            "header": {
                "fields": {
                    "Header": [
                        {
                            "group": "Header",
                            "type": "String",
                            "optional": false,
                            "field": "access-token",
                            "description": "<p>用户Token</p>"
                        }
                    ]
                }
            },
            "parameter": {
                "fields": {
                    "Parameter": [
                        {
                            "group": "Parameter",
                            "type": "String",
                            "optional": false,
                            "field": "firmType",
                            "description": "<p>单位类型</p>"
                        }
                    ]
                }
            },
            "filename": "routes/models/firms.js",
            "groupTitle": "Model_Firms",
            "name": "GetModelsFirmsListByType",
            "sampleRequest": [
                {
                    "url": "http://localhost:6002/models/firms/list/by-type"
                }
            ]
        },
        {
            "type": "delete",
            "url": "/models/prices/cost/:id",
            "title": "删除用电电价",
            "version": "0.0.0",
            "group": "Model_Prices",
            "description": "<p>删除用电电价</p>",
            "header": {
                "fields": {
                    "Header": [
                        {
                            "group": "Header",
                            "type": "String",
                            "optional": false,
                            "field": "access-token",
                            "description": "<p>用户Token</p>"
                        }
                    ]
                }
            },
            "parameter": {
                "fields": {
                    "Parameter": [
                        {
                            "group": "Parameter",
                            "type": "Object",
                            "optional": false,
                            "field": "price",
                            "description": "<p>电价对象</p>"
                        }
                    ]
                }
            },
            "filename": "routes/models/prices.js",
            "groupTitle": "Model_Prices",
            "name": "DeleteModelsPricesCostId",
            "sampleRequest": [
                {
                    "url": "http://localhost:6002/models/prices/cost/:id"
                }
            ]
        },
        {
            "type": "delete",
            "url": "/models/prices/generate/:id",
            "title": "删除发电电价",
            "version": "0.0.0",
            "group": "Model_Prices",
            "description": "<p>删除发电电价</p>",
            "header": {
                "fields": {
                    "Header": [
                        {
                            "group": "Header",
                            "type": "String",
                            "optional": false,
                            "field": "access-token",
                            "description": "<p>用户Token</p>"
                        }
                    ]
                }
            },
            "filename": "routes/models/prices.js",
            "groupTitle": "Model_Prices",
            "name": "DeleteModelsPricesGenerateId",
            "sampleRequest": [
                {
                    "url": "http://localhost:6002/models/prices/generate/:id"
                }
            ]
        },
        {
            "type": "get",
            "url": "/models/prices/cost/:id",
            "title": "根据ID查询用电电价详情",
            "version": "0.0.0",
            "group": "Model_Prices",
            "description": "<p>根据ID查询用电电价详情</p>",
            "header": {
                "fields": {
                    "Header": [
                        {
                            "group": "Header",
                            "type": "String",
                            "optional": false,
                            "field": "access-token",
                            "description": "<p>用户Token</p>"
                        }
                    ]
                }
            },
            "parameter": {
                "fields": {
                    "Parameter": [
                        {
                            "group": "Parameter",
                            "type": "Number",
                            "optional": false,
                            "field": "id",
                            "description": "<p>发电电价Id</p>"
                        }
                    ]
                }
            },
            "filename": "routes/models/prices.js",
            "groupTitle": "Model_Prices",
            "name": "GetModelsPricesCostId",
            "sampleRequest": [
                {
                    "url": "http://localhost:6002/models/prices/cost/:id"
                }
            ]
        },
        {
            "type": "get",
            "url": "/models/prices/list/cost",
            "title": "获取用电电价列表",
            "version": "0.0.0",
            "group": "Model_Prices",
            "description": "<p>获取用电电价列表</p>",
            "header": {
                "fields": {
                    "Header": [
                        {
                            "group": "Header",
                            "type": "String",
                            "optional": false,
                            "field": "access-token",
                            "description": "<p>用户Token</p>"
                        }
                    ]
                }
            },
            "parameter": {
                "fields": {
                    "Parameter": [
                        {
                            "group": "Parameter",
                            "type": "String",
                            "optional": true,
                            "field": "queryStr",
                            "description": "<p>模糊查询字符串</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "NUmber",
                            "optional": true,
                            "field": "page",
                            "description": "<p>页码</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "String",
                            "optional": true,
                            "field": "size",
                            "description": "<p>每一页的记录数</p>"
                        }
                    ]
                }
            },
            "filename": "routes/models/prices.js",
            "groupTitle": "Model_Prices",
            "name": "GetModelsPricesListCost",
            "sampleRequest": [
                {
                    "url": "http://localhost:6002/models/prices/list/cost"
                }
            ]
        },
        {
            "type": "get",
            "url": "/models/prices/list/generate",
            "title": "获取发电电价列表",
            "version": "0.0.0",
            "group": "Model_Prices",
            "description": "<p>获取发电电价列表</p>",
            "header": {
                "fields": {
                    "Header": [
                        {
                            "group": "Header",
                            "type": "String",
                            "optional": false,
                            "field": "access-token",
                            "description": "<p>用户Token</p>"
                        }
                    ]
                }
            },
            "parameter": {
                "fields": {
                    "Parameter": [
                        {
                            "group": "Parameter",
                            "type": "String",
                            "optional": true,
                            "field": "queryStr",
                            "description": "<p>模糊查询字符串</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "NUmber",
                            "optional": true,
                            "field": "page",
                            "description": "<p>页码</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "String",
                            "optional": true,
                            "field": "size",
                            "description": "<p>每一页的记录数</p>"
                        }
                    ]
                }
            },
            "filename": "routes/models/prices.js",
            "groupTitle": "Model_Prices",
            "name": "GetModelsPricesListGenerate",
            "sampleRequest": [
                {
                    "url": "http://localhost:6002/models/prices/list/generate"
                }
            ]
        },
        {
            "type": "post",
            "url": "/models/prices/cost",
            "title": "新增用电电价",
            "version": "0.0.0",
            "group": "Model_Prices",
            "description": "<p>新增用电电价</p>",
            "header": {
                "fields": {
                    "Header": [
                        {
                            "group": "Header",
                            "type": "String",
                            "optional": false,
                            "field": "access-token",
                            "description": "<p>用户Token</p>"
                        }
                    ]
                }
            },
            "parameter": {
                "fields": {
                    "Parameter": [
                        {
                            "group": "Parameter",
                            "type": "Object",
                            "optional": false,
                            "field": "price",
                            "description": "<p>电价对象</p>"
                        }
                    ]
                }
            },
            "filename": "routes/models/prices.js",
            "groupTitle": "Model_Prices",
            "name": "PostModelsPricesCost",
            "sampleRequest": [
                {
                    "url": "http://localhost:6002/models/prices/cost"
                }
            ]
        },
        {
            "type": "post",
            "url": "/models/prices/generate",
            "title": "新增发电电价",
            "version": "0.0.0",
            "group": "Model_Prices",
            "description": "<p>新增发电电价</p>",
            "header": {
                "fields": {
                    "Header": [
                        {
                            "group": "Header",
                            "type": "String",
                            "optional": false,
                            "field": "access-token",
                            "description": "<p>用户Token</p>"
                        }
                    ]
                }
            },
            "parameter": {
                "fields": {
                    "Parameter": [
                        {
                            "group": "Parameter",
                            "type": "Number",
                            "optional": false,
                            "field": "provinceId",
                            "description": "<p>省ID</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "Number",
                            "optional": false,
                            "field": "cityId",
                            "description": "<p>市ID</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "Number",
                            "optional": false,
                            "field": "districtId",
                            "description": "<p>区ID</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "String",
                            "optional": false,
                            "field": "title",
                            "description": "<p>标题</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "Number",
                            "optional": false,
                            "field": "windPrice",
                            "description": "<p>风电电价</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "Number",
                            "optional": false,
                            "field": "pvPrice",
                            "description": "<p>光伏电价</p>"
                        }
                    ]
                }
            },
            "filename": "routes/models/prices.js",
            "groupTitle": "Model_Prices",
            "name": "PostModelsPricesGenerate",
            "sampleRequest": [
                {
                    "url": "http://localhost:6002/models/prices/generate"
                }
            ]
        },
        {
            "type": "put",
            "url": "/models/prices/cost/:id",
            "title": "修改用电电价",
            "version": "0.0.0",
            "group": "Model_Prices",
            "description": "<p>修改用电电价</p>",
            "header": {
                "fields": {
                    "Header": [
                        {
                            "group": "Header",
                            "type": "String",
                            "optional": false,
                            "field": "access-token",
                            "description": "<p>用户Token</p>"
                        }
                    ]
                }
            },
            "parameter": {
                "fields": {
                    "Parameter": [
                        {
                            "group": "Parameter",
                            "type": "Object",
                            "optional": false,
                            "field": "price",
                            "description": "<p>电价对象</p>"
                        }
                    ]
                }
            },
            "filename": "routes/models/prices.js",
            "groupTitle": "Model_Prices",
            "name": "PutModelsPricesCostId",
            "sampleRequest": [
                {
                    "url": "http://localhost:6002/models/prices/cost/:id"
                }
            ]
        },
        {
            "type": "put",
            "url": "/models/prices/generate/:id",
            "title": "修改发电电价",
            "version": "0.0.0",
            "group": "Model_Prices",
            "description": "<p>修改发电电价</p>",
            "header": {
                "fields": {
                    "Header": [
                        {
                            "group": "Header",
                            "type": "String",
                            "optional": false,
                            "field": "access-token",
                            "description": "<p>用户Token</p>"
                        }
                    ]
                }
            },
            "parameter": {
                "fields": {
                    "Parameter": [
                        {
                            "group": "Parameter",
                            "type": "Number",
                            "optional": false,
                            "field": "provinceId",
                            "description": "<p>省ID</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "Number",
                            "optional": false,
                            "field": "cityId",
                            "description": "<p>市ID</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "Number",
                            "optional": false,
                            "field": "districtId",
                            "description": "<p>区ID</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "String",
                            "optional": false,
                            "field": "title",
                            "description": "<p>标题</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "Number",
                            "optional": false,
                            "field": "windPrice",
                            "description": "<p>风电电价</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "Number",
                            "optional": false,
                            "field": "pvPrice",
                            "description": "<p>光伏电价</p>"
                        }
                    ]
                }
            },
            "filename": "routes/models/prices.js",
            "groupTitle": "Model_Prices",
            "name": "PutModelsPricesGenerateId",
            "sampleRequest": [
                {
                    "url": "http://localhost:6002/models/prices/generate/:id"
                }
            ]
        },
        {
            "type": "delete",
            "url": "/models/stations/:id",
            "title": "删除电站",
            "version": "0.0.0",
            "group": "Model_Stations",
            "description": "<p>删除电站</p>",
            "header": {
                "fields": {
                    "Header": [
                        {
                            "group": "Header",
                            "type": "String",
                            "optional": false,
                            "field": "access-token",
                            "description": "<p>用户Token</p>"
                        }
                    ]
                }
            },
            "filename": "routes/models/stations.js",
            "groupTitle": "Model_Stations",
            "name": "DeleteModelsStationsId",
            "sampleRequest": [
                {
                    "url": "http://localhost:6002/models/stations/:id"
                }
            ]
        },
        {
            "type": "get",
            "url": "/models/stations/:id",
            "title": "查询电站详情",
            "version": "0.0.0",
            "group": "Model_Stations",
            "description": "<p>查询电站详情</p>",
            "header": {
                "fields": {
                    "Header": [
                        {
                            "group": "Header",
                            "type": "String",
                            "optional": false,
                            "field": "access-token",
                            "description": "<p>用户Token</p>"
                        }
                    ]
                }
            },
            "filename": "routes/models/stations.js",
            "groupTitle": "Model_Stations",
            "name": "GetModelsStationsId",
            "sampleRequest": [
                {
                    "url": "http://localhost:6002/models/stations/:id"
                }
            ]
        },
        {
            "type": "get",
            "url": "/models/stations/list",
            "title": "获取电站列表",
            "version": "0.0.0",
            "group": "Model_Stations",
            "description": "<p>获取电站列表</p>",
            "header": {
                "fields": {
                    "Header": [
                        {
                            "group": "Header",
                            "type": "String",
                            "optional": false,
                            "field": "access-token",
                            "description": "<p>用户Token</p>"
                        }
                    ]
                }
            },
            "parameter": {
                "fields": {
                    "Parameter": [
                        {
                            "group": "Parameter",
                            "type": "Number",
                            "optional": false,
                            "field": "stationStatusId",
                            "description": "<p>电站状态ID</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "String",
                            "optional": true,
                            "field": "queryStr",
                            "description": "<p>模糊查询字符串</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "NUmber",
                            "optional": true,
                            "field": "page",
                            "description": "<p>页码</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "String",
                            "optional": true,
                            "field": "size",
                            "description": "<p>每一页的记录数</p>"
                        }
                    ]
                }
            },
            "filename": "routes/models/stations.js",
            "groupTitle": "Model_Stations",
            "name": "GetModelsStationsList",
            "sampleRequest": [
                {
                    "url": "http://localhost:6002/models/stations/list"
                }
            ]
        },
        {
            "type": "patch",
            "url": "/models/stations/:id",
            "title": "变量修改电站",
            "version": "0.0.0",
            "group": "Model_Stations",
            "description": "<p>变量修改电站</p>",
            "header": {
                "fields": {
                    "Header": [
                        {
                            "group": "Header",
                            "type": "String",
                            "optional": false,
                            "field": "access-token",
                            "description": "<p>用户Token</p>"
                        }
                    ]
                }
            },
            "parameter": {
                "fields": {
                    "Parameter": [
                        {
                            "group": "Parameter",
                            "type": "String",
                            "optional": true,
                            "field": "title",
                            "description": "<p>电站标题</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "Number",
                            "optional": true,
                            "field": "finalUserId",
                            "description": "<p>终端用户ID</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "Number",
                            "optional": true,
                            "field": "operatorId",
                            "description": "<p>运营商ID</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "Number",
                            "optional": true,
                            "field": "maintenanceId",
                            "description": "<p>运维商ID</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "Number",
                            "optional": true,
                            "field": "stationTypeId",
                            "description": "<p>电站类型ID</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "Number",
                            "optional": true,
                            "field": "ratedPower",
                            "description": "<p>额定功率</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "Number",
                            "optional": true,
                            "field": "scale",
                            "description": "<p>建设规模</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "Number",
                            "optional": true,
                            "field": "provinceId",
                            "description": "<p>省ID</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "Number",
                            "optional": true,
                            "field": "cityId",
                            "description": "<p>市ID</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "Number",
                            "optional": true,
                            "field": "districtId",
                            "description": "<p>县Id</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "String",
                            "optional": true,
                            "field": "address",
                            "description": "<p>地区</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "Number",
                            "optional": true,
                            "field": "longitude",
                            "description": "<p>经度</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "Number",
                            "optional": true,
                            "field": "latitude",
                            "description": "<p>纬度</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "Array",
                            "optional": true,
                            "field": "photoFiles",
                            "description": "<p>电站图片</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "String",
                            "optional": true,
                            "field": "description",
                            "description": "<p>电站描述</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "String",
                            "optional": true,
                            "field": "productionTime",
                            "description": "<p>投产时间</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "Number",
                            "optional": true,
                            "field": "stationStatusId",
                            "description": "<p>电站状态ID</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "Boolean",
                            "optional": true,
                            "field": "activity",
                            "description": "<p>是否可用</p>"
                        }
                    ]
                }
            },
            "filename": "routes/models/stations.js",
            "groupTitle": "Model_Stations",
            "name": "PatchModelsStationsId",
            "sampleRequest": [
                {
                    "url": "http://localhost:6002/models/stations/:id"
                }
            ]
        },
        {
            "type": "post",
            "url": "/models/stations",
            "title": "新增电站",
            "version": "0.0.0",
            "group": "Model_Stations",
            "description": "<p>新增电站</p>",
            "header": {
                "fields": {
                    "Header": [
                        {
                            "group": "Header",
                            "type": "String",
                            "optional": false,
                            "field": "access-token",
                            "description": "<p>用户Token</p>"
                        }
                    ]
                }
            },
            "parameter": {
                "fields": {
                    "Parameter": [
                        {
                            "group": "Parameter",
                            "type": "String",
                            "optional": false,
                            "field": "titile",
                            "description": "<p>电站标题</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "Number",
                            "optional": false,
                            "field": "finalUserId",
                            "description": "<p>终端用户ID</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "Number",
                            "optional": false,
                            "field": "operatorId",
                            "description": "<p>运营商ID</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "Number",
                            "optional": false,
                            "field": "maintenanceId",
                            "description": "<p>运维商ID</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "Number",
                            "optional": false,
                            "field": "stationTypeId",
                            "description": "<p>电站类型ID</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "Number",
                            "optional": false,
                            "field": "ratedPower",
                            "description": "<p>额定功率</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "Number",
                            "optional": false,
                            "field": "scale",
                            "description": "<p>建设规模</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "Number",
                            "optional": false,
                            "field": "provinceId",
                            "description": "<p>省ID</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "Number",
                            "optional": false,
                            "field": "cityId",
                            "description": "<p>市ID</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "Number",
                            "optional": false,
                            "field": "districtId",
                            "description": "<p>县Id</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "String",
                            "optional": false,
                            "field": "address",
                            "description": "<p>地区</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "Number",
                            "optional": false,
                            "field": "longitude",
                            "description": "<p>经度</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "Number",
                            "optional": false,
                            "field": "latitude",
                            "description": "<p>纬度</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "Array",
                            "optional": false,
                            "field": "photoFiles",
                            "description": "<p>电站图片</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "String",
                            "optional": false,
                            "field": "description",
                            "description": "<p>电站描述</p>"
                        }
                    ]
                }
            },
            "filename": "routes/models/stations.js",
            "groupTitle": "Model_Stations",
            "name": "PostModelsStations",
            "sampleRequest": [
                {
                    "url": "http://localhost:6002/models/stations"
                }
            ]
        },
        {
            "type": "put",
            "url": "/models/stations/:id",
            "title": "全量修改电站",
            "version": "0.0.0",
            "group": "Model_Stations",
            "description": "<p>全量修改电站</p>",
            "header": {
                "fields": {
                    "Header": [
                        {
                            "group": "Header",
                            "type": "String",
                            "optional": false,
                            "field": "access-token",
                            "description": "<p>用户Token</p>"
                        }
                    ]
                }
            },
            "parameter": {
                "fields": {
                    "Parameter": [
                        {
                            "group": "Parameter",
                            "type": "String",
                            "optional": false,
                            "field": "title",
                            "description": "<p>电站标题</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "Number",
                            "optional": false,
                            "field": "finalUserId",
                            "description": "<p>终端用户ID</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "Number",
                            "optional": false,
                            "field": "operatorId",
                            "description": "<p>运营商ID</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "Number",
                            "optional": false,
                            "field": "maintenanceId",
                            "description": "<p>运维商ID</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "Number",
                            "optional": false,
                            "field": "stationTypeId",
                            "description": "<p>电站类型ID</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "Number",
                            "optional": false,
                            "field": "ratedPower",
                            "description": "<p>额定功率</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "Number",
                            "optional": false,
                            "field": "scale",
                            "description": "<p>建设规模</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "Number",
                            "optional": false,
                            "field": "provinceId",
                            "description": "<p>省ID</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "Number",
                            "optional": false,
                            "field": "cityId",
                            "description": "<p>市ID</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "Number",
                            "optional": false,
                            "field": "districtId",
                            "description": "<p>县Id</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "String",
                            "optional": false,
                            "field": "address",
                            "description": "<p>地区</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "Number",
                            "optional": false,
                            "field": "longitude",
                            "description": "<p>经度</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "Number",
                            "optional": false,
                            "field": "latitude",
                            "description": "<p>纬度</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "Array",
                            "optional": false,
                            "field": "photoFiles",
                            "description": "<p>电站图片</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "String",
                            "optional": false,
                            "field": "description",
                            "description": "<p>电站描述</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "String",
                            "optional": false,
                            "field": "productionTime",
                            "description": "<p>投产时间</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "Number",
                            "optional": false,
                            "field": "costId",
                            "description": "<p>用电电价ID</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "Number",
                            "optional": false,
                            "field": "generatorId",
                            "description": "<p>发电电价ID</p>"
                        }
                    ]
                }
            },
            "filename": "routes/models/stations.js",
            "groupTitle": "Model_Stations",
            "name": "PutModelsStationsId",
            "sampleRequest": [
                {
                    "url": "http://localhost:6002/models/stations/:id"
                }
            ]
        },
        {
            "type": "delete",
            "url": "/models/analogs/:id",
            "title": "删除点号",
            "version": "0.0.0",
            "group": "Models_Analogs",
            "description": "<p>删除点号</p>",
            "header": {
                "fields": {
                    "Header": [
                        {
                            "group": "Header",
                            "type": "String",
                            "optional": false,
                            "field": "access-token",
                            "description": "<p>用户Token</p>"
                        }
                    ]
                }
            },
            "parameter": {
                "fields": {
                    "Parameter": [
                        {
                            "group": "Parameter",
                            "type": "Number",
                            "optional": false,
                            "field": "deviceId",
                            "description": "<p>设备ID</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "String",
                            "optional": true,
                            "field": "title",
                            "description": "<p>点号标题</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "Number",
                            "optional": true,
                            "field": "pointNumber",
                            "description": "<p>点号ID</p>"
                        }
                    ]
                }
            },
            "filename": "routes/models/analogs.js",
            "groupTitle": "Models_Analogs",
            "name": "DeleteModelsAnalogsId",
            "sampleRequest": [
                {
                    "url": "http://localhost:6002/models/analogs/:id"
                }
            ]
        },
        {
            "type": "get",
            "url": "/enums/device-types-analogs",
            "title": "获取点号类型枚举",
            "version": "0.0.0",
            "group": "Models_Analogs",
            "description": "<p>获取点号类型枚举</p>",
            "header": {
                "fields": {
                    "Header": [
                        {
                            "group": "Header",
                            "type": "String",
                            "optional": false,
                            "field": "access-token",
                            "description": "<p>用户Token</p>"
                        }
                    ]
                }
            },
            "parameter": {
                "fields": {
                    "Parameter": [
                        {
                            "group": "Parameter",
                            "type": "Number",
                            "optional": false,
                            "field": "deviceId",
                            "description": "<p>设备ID</p>"
                        }
                    ]
                }
            },
            "filename": "routes/enums/device-types-analogs.js",
            "groupTitle": "Models_Analogs",
            "name": "GetEnumsDeviceTypesAnalogs",
            "sampleRequest": [
                {
                    "url": "http://localhost:6002/enums/device-types-analogs"
                }
            ]
        },
        {
            "type": "get",
            "url": "/models/analogs",
            "title": "根据设备ID获取点号列表",
            "version": "0.0.0",
            "group": "Models_Analogs",
            "description": "<p>根据设备ID获取点号列表</p>",
            "header": {
                "fields": {
                    "Header": [
                        {
                            "group": "Header",
                            "type": "String",
                            "optional": false,
                            "field": "access-token",
                            "description": "<p>用户Token</p>"
                        }
                    ]
                }
            },
            "parameter": {
                "fields": {
                    "Parameter": [
                        {
                            "group": "Parameter",
                            "type": "Number",
                            "optional": false,
                            "field": "deviceId",
                            "description": "<p>设备ID</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "Number",
                            "optional": true,
                            "field": "page",
                            "description": "<p>页码</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "Number",
                            "optional": true,
                            "field": "size",
                            "description": "<p>每一页的记录数</p>"
                        }
                    ]
                }
            },
            "filename": "routes/models/analogs.js",
            "groupTitle": "Models_Analogs",
            "name": "GetModelsAnalogs",
            "sampleRequest": [
                {
                    "url": "http://localhost:6002/models/analogs"
                }
            ]
        },
        {
            "type": "get",
            "url": "/models/analogs/:id",
            "title": "根据ID查询点号详情",
            "version": "0.0.0",
            "group": "Models_Analogs",
            "description": "<p>根据ID查询点号详情</p>",
            "header": {
                "fields": {
                    "Header": [
                        {
                            "group": "Header",
                            "type": "String",
                            "optional": false,
                            "field": "access-token",
                            "description": "<p>用户Token</p>"
                        }
                    ]
                }
            },
            "parameter": {
                "fields": {
                    "Parameter": [
                        {
                            "group": "Parameter",
                            "type": "Number",
                            "optional": false,
                            "field": "deviceId",
                            "description": "<p>设备ID</p>"
                        }
                    ]
                }
            },
            "filename": "routes/models/analogs.js",
            "groupTitle": "Models_Analogs",
            "name": "GetModelsAnalogsId",
            "sampleRequest": [
                {
                    "url": "http://localhost:6002/models/analogs/:id"
                }
            ]
        },
        {
            "type": "patch",
            "url": "/models/analogs/:id",
            "title": "修改点号",
            "version": "0.0.0",
            "group": "Models_Analogs",
            "description": "<p>修改点号</p>",
            "header": {
                "fields": {
                    "Header": [
                        {
                            "group": "Header",
                            "type": "String",
                            "optional": false,
                            "field": "access-token",
                            "description": "<p>用户Token</p>"
                        }
                    ]
                }
            },
            "parameter": {
                "fields": {
                    "Parameter": [
                        {
                            "group": "Parameter",
                            "type": "Number",
                            "optional": false,
                            "field": "deviceId",
                            "description": "<p>设备ID</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "String",
                            "optional": true,
                            "field": "title",
                            "description": "<p>点号标题</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "Number",
                            "optional": true,
                            "field": "pointNumber",
                            "description": "<p>点号ID</p>"
                        }
                    ]
                }
            },
            "filename": "routes/models/analogs.js",
            "groupTitle": "Models_Analogs",
            "name": "PatchModelsAnalogsId",
            "sampleRequest": [
                {
                    "url": "http://localhost:6002/models/analogs/:id"
                }
            ]
        },
        {
            "type": "post",
            "url": "/models/analogs",
            "title": "新增点号",
            "version": "0.0.0",
            "group": "Models_Analogs",
            "description": "<p>新增点号</p>",
            "header": {
                "fields": {
                    "Header": [
                        {
                            "group": "Header",
                            "type": "String",
                            "optional": false,
                            "field": "access-token",
                            "description": "<p>用户Token</p>"
                        }
                    ]
                }
            },
            "parameter": {
                "fields": {
                    "Parameter": [
                        {
                            "group": "Parameter",
                            "type": "Number",
                            "optional": false,
                            "field": "deviceId",
                            "description": "<p>设备ID</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "Number",
                            "optional": false,
                            "field": "pointNumber",
                            "description": "<p>点号</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "Number",
                            "optional": false,
                            "field": "terminalTypeId",
                            "description": "<p>端子ID</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "String",
                            "optional": false,
                            "field": "title",
                            "description": "<p>点号标题</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "Number",
                            "optional": false,
                            "field": "typeId",
                            "description": "<p>点号数据类型ID</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "String",
                            "optional": false,
                            "field": "singalTitle",
                            "description": "<p>信号名称</p>"
                        }
                    ]
                }
            },
            "filename": "routes/models/analogs.js",
            "groupTitle": "Models_Analogs",
            "name": "PostModelsAnalogs",
            "sampleRequest": [
                {
                    "url": "http://localhost:6002/models/analogs"
                }
            ]
        },
        {
            "type": "delete",
            "url": "/models/analogs-types/delete",
            "title": "删除点号类型",
            "version": "0.0.0",
            "group": "Models_Analogs_Types",
            "description": "<p>删除点号类型</p>",
            "header": {
                "fields": {
                    "Header": [
                        {
                            "group": "Header",
                            "type": "String",
                            "optional": false,
                            "field": "access-token",
                            "description": "<p>用户Token</p>"
                        }
                    ]
                }
            },
            "filename": "routes/models/analogs-types.js",
            "groupTitle": "Models_Analogs_Types",
            "name": "DeleteModelsAnalogsTypesDelete",
            "sampleRequest": [
                {
                    "url": "http://localhost:6002/models/analogs-types/delete"
                }
            ]
        },
        {
            "type": "get",
            "url": "/models/analogs-types/information",
            "title": "获取点号类型",
            "version": "0.0.0",
            "group": "Models_Analogs_Types",
            "description": "<p>获取点号类型</p>",
            "header": {
                "fields": {
                    "Header": [
                        {
                            "group": "Header",
                            "type": "String",
                            "optional": false,
                            "field": "access-token",
                            "description": "<p>用户Token</p>"
                        }
                    ]
                }
            },
            "filename": "routes/models/analogs-types.js",
            "groupTitle": "Models_Analogs_Types",
            "name": "GetModelsAnalogsTypesInformation",
            "sampleRequest": [
                {
                    "url": "http://localhost:6002/models/analogs-types/information"
                }
            ]
        },
        {
            "type": "get",
            "url": "/models/analogs-types/new-name",
            "title": "获取新点号类型Id",
            "version": "0.0.0",
            "group": "Models_Analogs_Types",
            "description": "<p>获取新点号类型Id</p>",
            "header": {
                "fields": {
                    "Header": [
                        {
                            "group": "Header",
                            "type": "String",
                            "optional": false,
                            "field": "access-token",
                            "description": "<p>用户Token</p>"
                        }
                    ]
                }
            },
            "filename": "routes/models/analogs-types.js",
            "groupTitle": "Models_Analogs_Types",
            "name": "GetModelsAnalogsTypesNewName",
            "sampleRequest": [
                {
                    "url": "http://localhost:6002/models/analogs-types/new-name"
                }
            ]
        },
        {
            "type": "post",
            "url": "/models/analogs-types/add",
            "title": "新增点号类型",
            "version": "0.0.0",
            "group": "Models_Analogs_Types",
            "description": "<p>新增点号类型</p>",
            "header": {
                "fields": {
                    "Header": [
                        {
                            "group": "Header",
                            "type": "String",
                            "optional": false,
                            "field": "access-token",
                            "description": "<p>用户Token</p>"
                        }
                    ]
                }
            },
            "filename": "routes/models/analogs-types.js",
            "groupTitle": "Models_Analogs_Types",
            "name": "PostModelsAnalogsTypesAdd",
            "sampleRequest": [
                {
                    "url": "http://localhost:6002/models/analogs-types/add"
                }
            ]
        },
        {
            "type": "put",
            "url": "/models/analogs-types/revise",
            "title": "修改点号类型",
            "version": "0.0.0",
            "group": "Models_Analogs_Types",
            "description": "<p>修改点号类型</p>",
            "header": {
                "fields": {
                    "Header": [
                        {
                            "group": "Header",
                            "type": "String",
                            "optional": false,
                            "field": "access-token",
                            "description": "<p>用户Token</p>"
                        }
                    ]
                }
            },
            "filename": "routes/models/analogs-types.js",
            "groupTitle": "Models_Analogs_Types",
            "name": "PutModelsAnalogsTypesRevise",
            "sampleRequest": [
                {
                    "url": "http://localhost:6002/models/analogs-types/revise"
                }
            ]
        },
        {
            "type": "delete",
            "url": "/models/customer/delete",
            "title": "删除客户信息",
            "version": "0.0.0",
            "group": "Models_Customer",
            "description": "<p>删除客户信息</p>",
            "header": {
                "fields": {
                    "Header": [
                        {
                            "group": "Header",
                            "type": "String",
                            "optional": false,
                            "field": "access-token",
                            "description": "<p>用户Token</p>"
                        }
                    ]
                }
            },
            "filename": "routes/models/customer.js",
            "groupTitle": "Models_Customer",
            "name": "DeleteModelsCustomerDelete",
            "sampleRequest": [
                {
                    "url": "http://localhost:6002/models/customer/delete"
                }
            ]
        },
        {
            "type": "get",
            "url": "/enums/accuracy",
            "title": "获取精度枚举",
            "version": "0.0.0",
            "group": "Models_Customer",
            "description": "<p>获取精度枚举</p>",
            "header": {
                "fields": {
                    "Header": [
                        {
                            "group": "Header",
                            "type": "String",
                            "optional": false,
                            "field": "access-token",
                            "description": "<p>用户Token</p>"
                        }
                    ]
                }
            },
            "filename": "routes/enums/accuracy.js",
            "groupTitle": "Models_Customer",
            "name": "GetEnumsAccuracy",
            "sampleRequest": [
                {
                    "url": "http://localhost:6002/enums/accuracy"
                }
            ]
        },
        {
            "type": "get",
            "url": "/enums/device-types",
            "title": "获取设备类型枚举",
            "version": "0.0.0",
            "group": "Models_Customer",
            "description": "<p>获取设备类型枚举</p>",
            "header": {
                "fields": {
                    "Header": [
                        {
                            "group": "Header",
                            "type": "String",
                            "optional": false,
                            "field": "access-token",
                            "description": "<p>用户Token</p>"
                        }
                    ]
                }
            },
            "filename": "routes/enums/device-types.js",
            "groupTitle": "Models_Customer",
            "name": "GetEnumsDeviceTypes",
            "sampleRequest": [
                {
                    "url": "http://localhost:6002/enums/device-types"
                }
            ]
        },
        {
            "type": "get",
            "url": "/models/customer/information",
            "title": "获取客户信息",
            "version": "0.0.0",
            "group": "Models_Customer",
            "description": "<p>获取客户信息</p>",
            "header": {
                "fields": {
                    "Header": [
                        {
                            "group": "Header",
                            "type": "String",
                            "optional": false,
                            "field": "access-token",
                            "description": "<p>用户Token</p>"
                        }
                    ]
                }
            },
            "filename": "routes/models/customer.js",
            "groupTitle": "Models_Customer",
            "name": "GetModelsCustomerInformation",
            "sampleRequest": [
                {
                    "url": "http://localhost:6002/models/customer/information"
                }
            ]
        },
        {
            "type": "get",
            "url": "/models/customer/station/information",
            "title": "获取客户电站信息",
            "version": "0.0.0",
            "group": "Models_Customer",
            "description": "<p>获取客户电站信息</p>",
            "header": {
                "fields": {
                    "Header": [
                        {
                            "group": "Header",
                            "type": "String",
                            "optional": false,
                            "field": "access-token",
                            "description": "<p>用户Token</p>"
                        }
                    ]
                }
            },
            "filename": "routes/models/customer.js",
            "groupTitle": "Models_Customer",
            "name": "GetModelsCustomerStationInformation",
            "sampleRequest": [
                {
                    "url": "http://localhost:6002/models/customer/station/information"
                }
            ]
        },
        {
            "type": "get",
            "url": "/models/menu",
            "title": "电站类型菜单全部权限信息",
            "version": "0.0.0",
            "group": "Models_Customer",
            "description": "<p>电站类型菜单全部权限信息</p>",
            "header": {
                "fields": {
                    "Header": [
                        {
                            "group": "Header",
                            "type": "String",
                            "optional": false,
                            "field": "access-token",
                            "description": "<p>用户Token</p>"
                        }
                    ]
                }
            },
            "filename": "routes/models/menus.js",
            "groupTitle": "Models_Customer",
            "name": "GetModelsMenu",
            "sampleRequest": [
                {
                    "url": "http://localhost:6002/models/menu"
                }
            ]
        },
        {
            "type": "post",
            "url": "/models/customer/add",
            "title": "新增用户信息",
            "version": "0.0.0",
            "group": "Models_Customer",
            "description": "<p>新增用户信息</p>",
            "header": {
                "fields": {
                    "Header": [
                        {
                            "group": "Header",
                            "type": "String",
                            "optional": false,
                            "field": "access-token",
                            "description": "<p>用户Token</p>"
                        }
                    ]
                }
            },
            "filename": "routes/models/customer.js",
            "groupTitle": "Models_Customer",
            "name": "PostModelsCustomerAdd",
            "sampleRequest": [
                {
                    "url": "http://localhost:6002/models/customer/add"
                }
            ]
        },
        {
            "type": "put",
            "url": "/models/customer/revise",
            "title": "修改客户信息",
            "version": "0.0.0",
            "group": "Models_Customer",
            "description": "<p>修改客户信息</p>",
            "header": {
                "fields": {
                    "Header": [
                        {
                            "group": "Header",
                            "type": "String",
                            "optional": false,
                            "field": "access-token",
                            "description": "<p>用户Token</p>"
                        }
                    ]
                }
            },
            "filename": "routes/models/customer.js",
            "groupTitle": "Models_Customer",
            "name": "PutModelsCustomerRevise",
            "sampleRequest": [
                {
                    "url": "http://localhost:6002/models/customer/revise"
                }
            ]
        },
        {
            "type": "delete",
            "url": "/models/device-types/delete",
            "title": "删除设备类型信息",
            "version": "0.0.0",
            "group": "Models_Device_Types",
            "description": "<p>删除设备类型信息</p>",
            "header": {
                "fields": {
                    "Header": [
                        {
                            "group": "Header",
                            "type": "String",
                            "optional": false,
                            "field": "access-token",
                            "description": "<p>用户Token</p>"
                        }
                    ]
                }
            },
            "filename": "routes/models/device-types.js",
            "groupTitle": "Models_Device_Types",
            "name": "DeleteModelsDeviceTypesDelete",
            "sampleRequest": [
                {
                    "url": "http://localhost:6002/models/device-types/delete"
                }
            ]
        },
        {
            "type": "get",
            "url": "/models/device-types/information",
            "title": "获取设备类型信息",
            "version": "0.0.0",
            "group": "Models_Device_Types",
            "description": "<p>获取设备类型信息</p>",
            "header": {
                "fields": {
                    "Header": [
                        {
                            "group": "Header",
                            "type": "String",
                            "optional": false,
                            "field": "access-token",
                            "description": "<p>用户Token</p>"
                        }
                    ]
                }
            },
            "filename": "routes/models/device-types.js",
            "groupTitle": "Models_Device_Types",
            "name": "GetModelsDeviceTypesInformation",
            "sampleRequest": [
                {
                    "url": "http://localhost:6002/models/device-types/information"
                }
            ]
        },
        {
            "type": "get",
            "url": "/models/device-types/new-name",
            "title": "获取新设备类型Id",
            "version": "0.0.0",
            "group": "Models_Device_Types",
            "description": "<p>获取新设备类型Id</p>",
            "header": {
                "fields": {
                    "Header": [
                        {
                            "group": "Header",
                            "type": "String",
                            "optional": false,
                            "field": "access-token",
                            "description": "<p>用户Token</p>"
                        }
                    ]
                }
            },
            "filename": "routes/models/device-types.js",
            "groupTitle": "Models_Device_Types",
            "name": "GetModelsDeviceTypesNewName",
            "sampleRequest": [
                {
                    "url": "http://localhost:6002/models/device-types/new-name"
                }
            ]
        },
        {
            "type": "post",
            "url": "/models/device-types/add",
            "title": "新增设备类型信息",
            "version": "0.0.0",
            "group": "Models_Device_Types",
            "description": "<p>新增设备类型信息</p>",
            "header": {
                "fields": {
                    "Header": [
                        {
                            "group": "Header",
                            "type": "String",
                            "optional": false,
                            "field": "access-token",
                            "description": "<p>用户Token</p>"
                        }
                    ]
                }
            },
            "filename": "routes/models/device-types.js",
            "groupTitle": "Models_Device_Types",
            "name": "PostModelsDeviceTypesAdd",
            "sampleRequest": [
                {
                    "url": "http://localhost:6002/models/device-types/add"
                }
            ]
        },
        {
            "type": "put",
            "url": "/models/device-types/revise",
            "title": "修改设备类型信息",
            "version": "0.0.0",
            "group": "Models_Device_Types",
            "description": "<p>修改设备类型信息</p>",
            "header": {
                "fields": {
                    "Header": [
                        {
                            "group": "Header",
                            "type": "String",
                            "optional": false,
                            "field": "access-token",
                            "description": "<p>用户Token</p>"
                        }
                    ]
                }
            },
            "filename": "routes/models/device-types.js",
            "groupTitle": "Models_Device_Types",
            "name": "PutModelsDeviceTypesRevise",
            "sampleRequest": [
                {
                    "url": "http://localhost:6002/models/device-types/revise"
                }
            ]
        },
        {
            "type": "delete",
            "url": "/models/device-types-analogs/delete",
            "title": "删除点号类型",
            "version": "0.0.0",
            "group": "Models_Device_Types_Analogs",
            "description": "<p>删除点号类型</p>",
            "header": {
                "fields": {
                    "Header": [
                        {
                            "group": "Header",
                            "type": "String",
                            "optional": false,
                            "field": "access-token",
                            "description": "<p>用户Token</p>"
                        }
                    ]
                }
            },
            "filename": "routes/models/device-types-analogs.js",
            "groupTitle": "Models_Device_Types_Analogs",
            "name": "DeleteModelsDeviceTypesAnalogsDelete",
            "sampleRequest": [
                {
                    "url": "http://localhost:6002/models/device-types-analogs/delete"
                }
            ]
        },
        {
            "type": "get",
            "url": "/models/device-types-analogs/information",
            "title": "根据设备类型获取点号类型列表",
            "version": "0.0.0",
            "group": "Models_Device_Types_Analogs",
            "description": "<p>根据设备类型获取点号类型列表</p>",
            "header": {
                "fields": {
                    "Header": [
                        {
                            "group": "Header",
                            "type": "String",
                            "optional": false,
                            "field": "access-token",
                            "description": "<p>用户Token</p>"
                        }
                    ]
                }
            },
            "filename": "routes/models/device-types-analogs.js",
            "groupTitle": "Models_Device_Types_Analogs",
            "name": "GetModelsDeviceTypesAnalogsInformation",
            "sampleRequest": [
                {
                    "url": "http://localhost:6002/models/device-types-analogs/information"
                }
            ]
        },
        {
            "type": "post",
            "url": "/models/device-types-analogs/add",
            "title": "新增点号类型",
            "version": "0.0.0",
            "group": "Models_Device_Types_Analogs",
            "description": "<p>新增点号类型</p>",
            "header": {
                "fields": {
                    "Header": [
                        {
                            "group": "Header",
                            "type": "String",
                            "optional": false,
                            "field": "access-token",
                            "description": "<p>用户Token</p>"
                        }
                    ]
                }
            },
            "filename": "routes/models/device-types-analogs.js",
            "groupTitle": "Models_Device_Types_Analogs",
            "name": "PostModelsDeviceTypesAnalogsAdd",
            "sampleRequest": [
                {
                    "url": "http://localhost:6002/models/device-types-analogs/add"
                }
            ]
        },
        {
            "type": "post",
            "url": "/models/device-types-analogs/bind",
            "title": "批量绑定点号类型",
            "version": "0.0.0",
            "group": "Models_Device_Types_Analogs",
            "description": "<p>绑定点号类型</p>",
            "header": {
                "fields": {
                    "Header": [
                        {
                            "group": "Header",
                            "type": "String",
                            "optional": false,
                            "field": "access-token",
                            "description": "<p>用户Token</p>"
                        }
                    ]
                }
            },
            "filename": "routes/models/device-types-analogs.js",
            "groupTitle": "Models_Device_Types_Analogs",
            "name": "PostModelsDeviceTypesAnalogsBind",
            "sampleRequest": [
                {
                    "url": "http://localhost:6002/models/device-types-analogs/bind"
                }
            ]
        },
        {
            "type": "put",
            "url": "/models/device-types-analogs/revise",
            "title": "修改点号类型",
            "version": "0.0.0",
            "group": "Models_Device_Types_Analogs",
            "description": "<p>修改点号类型</p>",
            "header": {
                "fields": {
                    "Header": [
                        {
                            "group": "Header",
                            "type": "String",
                            "optional": false,
                            "field": "access-token",
                            "description": "<p>用户Token</p>"
                        }
                    ]
                }
            },
            "filename": "routes/models/device-types-analogs.js",
            "groupTitle": "Models_Device_Types_Analogs",
            "name": "PutModelsDeviceTypesAnalogsRevise",
            "sampleRequest": [
                {
                    "url": "http://localhost:6002/models/device-types-analogs/revise"
                }
            ]
        },
        {
            "type": "delete",
            "url": "/models/devices/:id",
            "title": "删除设备",
            "version": "0.0.0",
            "group": "Models_Devices",
            "description": "<p>删除设备</p>",
            "header": {
                "fields": {
                    "Header": [
                        {
                            "group": "Header",
                            "type": "String",
                            "optional": false,
                            "field": "access-token",
                            "description": "<p>用户Token</p>"
                        }
                    ]
                }
            },
            "parameter": {
                "fields": {
                    "Parameter": [
                        {
                            "group": "Parameter",
                            "type": "Number",
                            "optional": false,
                            "field": "id",
                            "description": "<p>设备ID</p>"
                        }
                    ]
                }
            },
            "filename": "routes/models/devices.js",
            "groupTitle": "Models_Devices",
            "name": "DeleteModelsDevicesId",
            "sampleRequest": [
                {
                    "url": "http://localhost:6002/models/devices/:id"
                }
            ]
        },
        {
            "type": "get",
            "url": "/models/devices/:id",
            "title": "查询设备的具体信息",
            "version": "0.0.0",
            "group": "Models_Devices",
            "description": "<p>查询设备的具体信息</p>",
            "header": {
                "fields": {
                    "Header": [
                        {
                            "group": "Header",
                            "type": "String",
                            "optional": false,
                            "field": "access-token",
                            "description": "<p>用户Token</p>"
                        }
                    ]
                }
            },
            "parameter": {
                "fields": {
                    "Parameter": [
                        {
                            "group": "Parameter",
                            "type": "Number",
                            "optional": false,
                            "field": "id",
                            "description": "<p>设备ID</p>"
                        }
                    ]
                }
            },
            "filename": "routes/models/devices.js",
            "groupTitle": "Models_Devices",
            "name": "GetModelsDevicesId",
            "sampleRequest": [
                {
                    "url": "http://localhost:6002/models/devices/:id"
                }
            ]
        },
        {
            "type": "get",
            "url": "/models/devices/tree",
            "title": "获取设备树",
            "version": "0.0.0",
            "group": "Models_Devices",
            "description": "<p>获取设备树</p>",
            "header": {
                "fields": {
                    "Header": [
                        {
                            "group": "Header",
                            "type": "String",
                            "optional": false,
                            "field": "access-token",
                            "description": "<p>用户Token</p>"
                        }
                    ]
                }
            },
            "parameter": {
                "fields": {
                    "Parameter": [
                        {
                            "group": "Parameter",
                            "type": "Number",
                            "optional": false,
                            "field": "stationId",
                            "description": "<p>电站ID</p>"
                        }
                    ]
                }
            },
            "filename": "routes/models/devices.js",
            "groupTitle": "Models_Devices",
            "name": "GetModelsDevicesTree",
            "sampleRequest": [
                {
                    "url": "http://localhost:6002/models/devices/tree"
                }
            ]
        },
        {
            "type": "post",
            "url": "/models/devices",
            "title": "新增设备",
            "version": "0.0.0",
            "group": "Models_Devices",
            "description": "<p>新增设备</p>",
            "header": {
                "fields": {
                    "Header": [
                        {
                            "group": "Header",
                            "type": "String",
                            "optional": false,
                            "field": "access-token",
                            "description": "<p>用户Token</p>"
                        }
                    ]
                }
            },
            "parameter": {
                "fields": {
                    "Parameter": [
                        {
                            "group": "Parameter",
                            "type": "Number",
                            "optional": false,
                            "field": "energyUnitId",
                            "description": "<p>能量单元ID</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "Number",
                            "optional": false,
                            "field": "device",
                            "description": "<p>设备对象</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "Number",
                            "optional": false,
                            "field": "stationId",
                            "description": "<p>电站Id</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "Number",
                            "optional": true,
                            "field": "parentId",
                            "description": "<p>设备上级ID</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "Number",
                            "optional": true,
                            "field": "deviceCount",
                            "description": "<p>设备数</p>"
                        }
                    ]
                }
            },
            "filename": "routes/models/devices.js",
            "groupTitle": "Models_Devices",
            "name": "PostModelsDevices",
            "sampleRequest": [
                {
                    "url": "http://localhost:6002/models/devices"
                }
            ]
        },
        {
            "type": "put",
            "url": "/models/devices/batch",
            "title": "批量修改设备",
            "version": "0.0.0",
            "group": "Models_Devices",
            "description": "<p>批量修改设备</p>",
            "header": {
                "fields": {
                    "Header": [
                        {
                            "group": "Header",
                            "type": "String",
                            "optional": false,
                            "field": "access-token",
                            "description": "<p>用户Token</p>"
                        }
                    ]
                }
            },
            "parameter": {
                "fields": {
                    "Parameter": [
                        {
                            "group": "Parameter",
                            "type": "String",
                            "optional": false,
                            "field": "idList",
                            "description": "<p>设备ID字符串,逗号间隔</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "Object",
                            "optional": false,
                            "field": "device",
                            "description": "<p>设备对象</p>"
                        }
                    ]
                }
            },
            "filename": "routes/models/devices.js",
            "groupTitle": "Models_Devices",
            "name": "PutModelsDevicesBatch",
            "sampleRequest": [
                {
                    "url": "http://localhost:6002/models/devices/batch"
                }
            ]
        },
        {
            "type": "put",
            "url": "/models/devices/:id",
            "title": "修改设备",
            "version": "0.0.0",
            "group": "Models_Devices",
            "description": "<p>修改设备</p>",
            "header": {
                "fields": {
                    "Header": [
                        {
                            "group": "Header",
                            "type": "String",
                            "optional": false,
                            "field": "access-token",
                            "description": "<p>用户Token</p>"
                        }
                    ]
                }
            },
            "parameter": {
                "fields": {
                    "Parameter": [
                        {
                            "group": "Parameter",
                            "type": "Number",
                            "optional": false,
                            "field": "id",
                            "description": "<p>设备ID</p>"
                        }
                    ]
                }
            },
            "filename": "routes/models/devices.js",
            "groupTitle": "Models_Devices",
            "name": "PutModelsDevicesId",
            "sampleRequest": [
                {
                    "url": "http://localhost:6002/models/devices/:id"
                }
            ]
        },
        {
            "type": "delete",
            "url": "/models/energy-units/:id",
            "title": "删除能量单元",
            "version": "0.0.0",
            "group": "Models_EnergyUnit",
            "description": "<p>删除能量单元</p>",
            "header": {
                "fields": {
                    "Header": [
                        {
                            "group": "Header",
                            "type": "String",
                            "optional": false,
                            "field": "access-token",
                            "description": "<p>用户Token</p>"
                        }
                    ]
                }
            },
            "parameter": {
                "fields": {
                    "Parameter": [
                        {
                            "group": "Parameter",
                            "type": "Number",
                            "optional": false,
                            "field": "id",
                            "description": "<p>能量单元ID</p>"
                        }
                    ]
                }
            },
            "filename": "routes/models/energy-units.js",
            "groupTitle": "Models_EnergyUnit",
            "name": "DeleteModelsEnergyUnitsId",
            "sampleRequest": [
                {
                    "url": "http://localhost:6002/models/energy-units/:id"
                }
            ]
        },
        {
            "type": "get",
            "url": "/models/energy-units/:id",
            "title": "查询能量单元",
            "version": "0.0.0",
            "group": "Models_EnergyUnit",
            "description": "<p>查询能量单元</p>",
            "header": {
                "fields": {
                    "Header": [
                        {
                            "group": "Header",
                            "type": "String",
                            "optional": false,
                            "field": "access-token",
                            "description": "<p>用户Token</p>"
                        }
                    ]
                }
            },
            "parameter": {
                "fields": {
                    "Parameter": [
                        {
                            "group": "Parameter",
                            "type": "Number",
                            "optional": false,
                            "field": "id",
                            "description": "<p>能量单元ID</p>"
                        }
                    ]
                }
            },
            "filename": "routes/models/energy-units.js",
            "groupTitle": "Models_EnergyUnit",
            "name": "GetModelsEnergyUnitsId",
            "sampleRequest": [
                {
                    "url": "http://localhost:6002/models/energy-units/:id"
                }
            ]
        },
        {
            "type": "get",
            "url": "/models/energy-units/list",
            "title": "根据电站ID查询能量单元列表",
            "version": "0.0.0",
            "group": "Models_EnergyUnit",
            "description": "<p>根据电站ID查询能量单元列表</p>",
            "header": {
                "fields": {
                    "Header": [
                        {
                            "group": "Header",
                            "type": "String",
                            "optional": false,
                            "field": "access-token",
                            "description": "<p>用户Token</p>"
                        }
                    ]
                }
            },
            "parameter": {
                "fields": {
                    "Parameter": [
                        {
                            "group": "Parameter",
                            "type": "Number",
                            "optional": false,
                            "field": "stationId",
                            "description": "<p>电站ID</p>"
                        }
                    ]
                }
            },
            "filename": "routes/models/energy-units.js",
            "groupTitle": "Models_EnergyUnit",
            "name": "GetModelsEnergyUnitsList",
            "sampleRequest": [
                {
                    "url": "http://localhost:6002/models/energy-units/list"
                }
            ]
        },
        {
            "type": "post",
            "url": "/models/energy-units",
            "title": "新增能量单元",
            "version": "0.0.0",
            "group": "Models_EnergyUnit",
            "description": "<p>新增能量单元</p>",
            "header": {
                "fields": {
                    "Header": [
                        {
                            "group": "Header",
                            "type": "String",
                            "optional": false,
                            "field": "access-token",
                            "description": "<p>用户Token</p>"
                        }
                    ]
                }
            },
            "parameter": {
                "fields": {
                    "Parameter": [
                        {
                            "group": "Parameter",
                            "type": "Number",
                            "optional": false,
                            "field": "stationId",
                            "description": "<p>电站ID</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "Object",
                            "optional": false,
                            "field": "energyUnit",
                            "description": "<p>能量单元对象</p>"
                        }
                    ]
                }
            },
            "filename": "routes/models/energy-units.js",
            "groupTitle": "Models_EnergyUnit",
            "name": "PostModelsEnergyUnits",
            "sampleRequest": [
                {
                    "url": "http://localhost:6002/models/energy-units"
                }
            ]
        },
        {
            "type": "put",
            "url": "/models/energy-units/:id",
            "title": "修改能量单元",
            "version": "0.0.0",
            "group": "Models_EnergyUnit",
            "description": "<p>修改能量单元</p>",
            "header": {
                "fields": {
                    "Header": [
                        {
                            "group": "Header",
                            "type": "String",
                            "optional": false,
                            "field": "access-token",
                            "description": "<p>用户Token</p>"
                        }
                    ]
                }
            },
            "parameter": {
                "fields": {
                    "Parameter": [
                        {
                            "group": "Parameter",
                            "type": "Number",
                            "optional": false,
                            "field": "id",
                            "description": "<p>能量单元ID</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "Object",
                            "optional": false,
                            "field": "energyUnit",
                            "description": "<p>能量单元对象</p>"
                        }
                    ]
                }
            },
            "filename": "routes/models/energy-units.js",
            "groupTitle": "Models_EnergyUnit",
            "name": "PutModelsEnergyUnitsId",
            "sampleRequest": [
                {
                    "url": "http://localhost:6002/models/energy-units/:id"
                }
            ]
        },
        {
            "type": "delete",
            "url": "/models/roles/delete",
            "title": "删除角色信息",
            "version": "0.0.0",
            "group": "Models_Roles",
            "description": "<p>删除角色信息</p>",
            "header": {
                "fields": {
                    "Header": [
                        {
                            "group": "Header",
                            "type": "String",
                            "optional": false,
                            "field": "access-token",
                            "description": "<p>用户Token</p>"
                        }
                    ]
                }
            },
            "filename": "routes/models/roles.js",
            "groupTitle": "Models_Roles",
            "name": "DeleteModelsRolesDelete",
            "sampleRequest": [
                {
                    "url": "http://localhost:6002/models/roles/delete"
                }
            ]
        },
        {
            "type": "get",
            "url": "/models/roles/information",
            "title": "获取角色信息",
            "version": "0.0.0",
            "group": "Models_Roles",
            "description": "<p>获取角色信息</p>",
            "header": {
                "fields": {
                    "Header": [
                        {
                            "group": "Header",
                            "type": "String",
                            "optional": false,
                            "field": "access-token",
                            "description": "<p>用户Token</p>"
                        }
                    ]
                }
            },
            "filename": "routes/models/roles.js",
            "groupTitle": "Models_Roles",
            "name": "GetModelsRolesInformation",
            "sampleRequest": [
                {
                    "url": "http://localhost:6002/models/roles/information"
                }
            ]
        },
        {
            "type": "get",
            "url": "/models/roles/menu/information",
            "title": "角色菜单权限查询",
            "version": "0.0.0",
            "group": "Models_Roles",
            "description": "<p>角色菜单权限查询</p>",
            "header": {
                "fields": {
                    "Header": [
                        {
                            "group": "Header",
                            "type": "String",
                            "optional": false,
                            "field": "access-token",
                            "description": "<p>用户Token</p>"
                        }
                    ]
                }
            },
            "filename": "routes/models/roles.js",
            "groupTitle": "Models_Roles",
            "name": "GetModelsRolesMenuInformation",
            "sampleRequest": [
                {
                    "url": "http://localhost:6002/models/roles/menu/information"
                }
            ]
        },
        {
            "type": "post",
            "url": "/models/roles/add",
            "title": "新增角色信息",
            "version": "0.0.0",
            "group": "Models_Roles",
            "description": "<p>新增角色信息</p>",
            "header": {
                "fields": {
                    "Header": [
                        {
                            "group": "Header",
                            "type": "String",
                            "optional": false,
                            "field": "access-token",
                            "description": "<p>用户Token</p>"
                        }
                    ]
                }
            },
            "filename": "routes/models/roles.js",
            "groupTitle": "Models_Roles",
            "name": "PostModelsRolesAdd",
            "sampleRequest": [
                {
                    "url": "http://localhost:6002/models/roles/add"
                }
            ]
        },
        {
            "type": "put",
            "url": "/models/roles/menu/refresh",
            "title": "角色菜单权限更新",
            "version": "0.0.0",
            "group": "Models_Roles",
            "description": "<p>角色菜单权限更新</p>",
            "header": {
                "fields": {
                    "Header": [
                        {
                            "group": "Header",
                            "type": "String",
                            "optional": false,
                            "field": "access-token",
                            "description": "<p>用户Token</p>"
                        }
                    ]
                }
            },
            "filename": "routes/models/roles.js",
            "groupTitle": "Models_Roles",
            "name": "PutModelsRolesMenuRefresh",
            "sampleRequest": [
                {
                    "url": "http://localhost:6002/models/roles/menu/refresh"
                }
            ]
        },
        {
            "type": "put",
            "url": "/models/roles/menu/revise",
            "title": "角色菜单权限修改",
            "version": "0.0.0",
            "group": "Models_Roles",
            "description": "<p>角色菜单权限修改</p>",
            "header": {
                "fields": {
                    "Header": [
                        {
                            "group": "Header",
                            "type": "String",
                            "optional": false,
                            "field": "access-token",
                            "description": "<p>用户Token</p>"
                        }
                    ]
                }
            },
            "filename": "routes/models/roles.js",
            "groupTitle": "Models_Roles",
            "name": "PutModelsRolesMenuRevise",
            "sampleRequest": [
                {
                    "url": "http://localhost:6002/models/roles/menu/revise"
                }
            ]
        },
        {
            "type": "put",
            "url": "/models/roles/revise",
            "title": "修改角色信息",
            "version": "0.0.0",
            "group": "Models_Roles",
            "description": "<p>修改角色信息</p>",
            "header": {
                "fields": {
                    "Header": [
                        {
                            "group": "Header",
                            "type": "String",
                            "optional": false,
                            "field": "access-token",
                            "description": "<p>用户Token</p>"
                        }
                    ]
                }
            },
            "filename": "routes/models/roles.js",
            "groupTitle": "Models_Roles",
            "name": "PutModelsRolesRevise",
            "sampleRequest": [
                {
                    "url": "http://localhost:6002/models/roles/revise"
                }
            ]
        },
        {
            "type": "delete",
            "url": "/models/station-types/delete",
            "title": "删除电站类型信息",
            "version": "0.0.0",
            "group": "Models_Station_Types",
            "description": "<p>删除电站类型信息</p>",
            "header": {
                "fields": {
                    "Header": [
                        {
                            "group": "Header",
                            "type": "String",
                            "optional": false,
                            "field": "access-token",
                            "description": "<p>用户Token</p>"
                        }
                    ]
                }
            },
            "filename": "routes/models/station-types.js",
            "groupTitle": "Models_Station_Types",
            "name": "DeleteModelsStationTypesDelete",
            "sampleRequest": [
                {
                    "url": "http://localhost:6002/models/station-types/delete"
                }
            ]
        },
        {
            "type": "get",
            "url": "/models/station-types/information",
            "title": "获取电站类型信息",
            "version": "0.0.0",
            "group": "Models_Station_Types",
            "description": "<p>获取电站类型信息</p>",
            "header": {
                "fields": {
                    "Header": [
                        {
                            "group": "Header",
                            "type": "String",
                            "optional": false,
                            "field": "access-token",
                            "description": "<p>用户Token</p>"
                        }
                    ]
                }
            },
            "filename": "routes/models/station-types.js",
            "groupTitle": "Models_Station_Types",
            "name": "GetModelsStationTypesInformation",
            "sampleRequest": [
                {
                    "url": "http://localhost:6002/models/station-types/information"
                }
            ]
        },
        {
            "type": "get",
            "url": "/models/station-types/menu/information",
            "title": "电站类型菜单权限信息",
            "version": "0.0.0",
            "group": "Models_Station_Types",
            "description": "<p>电站类型菜单权限信息</p>",
            "header": {
                "fields": {
                    "Header": [
                        {
                            "group": "Header",
                            "type": "String",
                            "optional": false,
                            "field": "access-token",
                            "description": "<p>用户Token</p>"
                        }
                    ]
                }
            },
            "filename": "routes/models/station-types.js",
            "groupTitle": "Models_Station_Types",
            "name": "GetModelsStationTypesMenuInformation",
            "sampleRequest": [
                {
                    "url": "http://localhost:6002/models/station-types/menu/information"
                }
            ]
        },
        {
            "type": "get",
            "url": "/models/station-types/new-name",
            "title": "获取新电站类型Id",
            "version": "0.0.0",
            "group": "Models_Station_Types",
            "description": "<p>获取新电站类型Id</p>",
            "header": {
                "fields": {
                    "Header": [
                        {
                            "group": "Header",
                            "type": "String",
                            "optional": false,
                            "field": "access-token",
                            "description": "<p>用户Token</p>"
                        }
                    ]
                }
            },
            "filename": "routes/models/station-types.js",
            "groupTitle": "Models_Station_Types",
            "name": "GetModelsStationTypesNewName",
            "sampleRequest": [
                {
                    "url": "http://localhost:6002/models/station-types/new-name"
                }
            ]
        },
        {
            "type": "post",
            "url": "/models/station-types/add",
            "title": "新增电站类型信息",
            "version": "0.0.0",
            "group": "Models_Station_Types",
            "description": "<p>新增电站类型信息</p>",
            "header": {
                "fields": {
                    "Header": [
                        {
                            "group": "Header",
                            "type": "String",
                            "optional": false,
                            "field": "access-token",
                            "description": "<p>用户Token</p>"
                        }
                    ]
                }
            },
            "filename": "routes/models/station-types.js",
            "groupTitle": "Models_Station_Types",
            "name": "PostModelsStationTypesAdd",
            "sampleRequest": [
                {
                    "url": "http://localhost:6002/models/station-types/add"
                }
            ]
        },
        {
            "type": "put",
            "url": "/models/station-types/revise",
            "title": "修改电站类型信息",
            "version": "0.0.0",
            "group": "Models_Station_Types",
            "description": "<p>修改电站类型信息</p>",
            "header": {
                "fields": {
                    "Header": [
                        {
                            "group": "Header",
                            "type": "String",
                            "optional": false,
                            "field": "access-token",
                            "description": "<p>用户Token</p>"
                        }
                    ]
                }
            },
            "filename": "routes/models/station-types.js",
            "groupTitle": "Models_Station_Types",
            "name": "PutModelsStationTypesRevise",
            "sampleRequest": [
                {
                    "url": "http://localhost:6002/models/station-types/revise"
                }
            ]
        },
        {
            "type": "put",
            "url": "/models/station-types/station/revise电站类型菜单权限修改",
            "title": "",
            "version": "0.0.0",
            "group": "Models_Station_Types",
            "description": "<p>电站类型菜单权限修改</p>",
            "header": {
                "fields": {
                    "Header": [
                        {
                            "group": "Header",
                            "type": "String",
                            "optional": false,
                            "field": "access-token",
                            "description": "<p>用户Token</p>"
                        }
                    ]
                }
            },
            "filename": "routes/models/station-types.js",
            "groupTitle": "Models_Station_Types",
            "name": "PutModelsStationTypesStationRevise",
            "sampleRequest": [
                {
                    "url": "http://localhost:6002/models/station-types/station/revise电站类型菜单权限修改"
                }
            ]
        },
        {
            "type": "get",
            "url": "/models/tree/firm",
            "title": "获取单位树",
            "version": "0.0.0",
            "group": "Models_Tree",
            "description": "<p>获取客户信息</p>",
            "header": {
                "fields": {
                    "Header": [
                        {
                            "group": "Header",
                            "type": "String",
                            "optional": false,
                            "field": "access-token",
                            "description": "<p>用户Token</p>"
                        }
                    ]
                }
            },
            "filename": "routes/models/tree.js",
            "groupTitle": "Models_Tree",
            "name": "GetModelsTreeFirm",
            "sampleRequest": [
                {
                    "url": "http://localhost:6002/models/tree/firm"
                }
            ]
        },
        {
            "type": "delete",
            "url": "/models/users/delete",
            "title": "删除用户信息",
            "version": "0.0.0",
            "group": "Models_Users",
            "description": "<p>删除用户信息</p>",
            "header": {
                "fields": {
                    "Header": [
                        {
                            "group": "Header",
                            "type": "String",
                            "optional": false,
                            "field": "access-token",
                            "description": "<p>用户Token</p>"
                        }
                    ]
                }
            },
            "filename": "routes/models/users.js",
            "groupTitle": "Models_Users",
            "name": "DeleteModelsUsersDelete",
            "sampleRequest": [
                {
                    "url": "http://localhost:6002/models/users/delete"
                }
            ]
        },
        {
            "type": "get",
            "url": "/models/users/by-Id",
            "title": "根据id获取用户信息",
            "version": "0.0.0",
            "group": "Models_Users",
            "description": "<p>根据id获取用户信息</p>",
            "header": {
                "fields": {
                    "Header": [
                        {
                            "group": "Header",
                            "type": "String",
                            "optional": false,
                            "field": "access-token",
                            "description": "<p>用户Token</p>"
                        }
                    ]
                }
            },
            "filename": "routes/models/users.js",
            "groupTitle": "Models_Users",
            "name": "GetModelsUsersById",
            "sampleRequest": [
                {
                    "url": "http://localhost:6002/models/users/by-Id"
                }
            ]
        },
        {
            "type": "get",
            "url": "/models/users/information",
            "title": "获取用户信息",
            "version": "0.0.0",
            "group": "Models_Users",
            "description": "<p>获取用户信息</p>",
            "header": {
                "fields": {
                    "Header": [
                        {
                            "group": "Header",
                            "type": "String",
                            "optional": false,
                            "field": "access-token",
                            "description": "<p>用户Token</p>"
                        }
                    ]
                }
            },
            "filename": "routes/models/users.js",
            "groupTitle": "Models_Users",
            "name": "GetModelsUsersInformation",
            "sampleRequest": [
                {
                    "url": "http://localhost:6002/models/users/information"
                }
            ]
        },
        {
            "type": "get",
            "url": "/models/users/station/information",
            "title": "用户电站权限信息",
            "version": "0.0.0",
            "group": "Models_Users",
            "description": "<p>用户电站权限信息</p>",
            "header": {
                "fields": {
                    "Header": [
                        {
                            "group": "Header",
                            "type": "String",
                            "optional": false,
                            "field": "access-token",
                            "description": "<p>用户Token</p>"
                        }
                    ]
                }
            },
            "filename": "routes/models/users.js",
            "groupTitle": "Models_Users",
            "name": "GetModelsUsersStationInformation",
            "sampleRequest": [
                {
                    "url": "http://localhost:6002/models/users/station/information"
                }
            ]
        },
        {
            "type": "post",
            "url": "/models/users/add",
            "title": "新增用户信息",
            "version": "0.0.0",
            "group": "Models_Users",
            "description": "<p>新增用户信息</p>",
            "header": {
                "fields": {
                    "Header": [
                        {
                            "group": "Header",
                            "type": "String",
                            "optional": false,
                            "field": "access-token",
                            "description": "<p>用户Token</p>"
                        }
                    ]
                }
            },
            "filename": "routes/models/users.js",
            "groupTitle": "Models_Users",
            "name": "PostModelsUsersAdd",
            "sampleRequest": [
                {
                    "url": "http://localhost:6002/models/users/add"
                }
            ]
        },
        {
            "type": "put",
            "url": "/models/users/resetPassword",
            "title": "重置用户密码",
            "version": "0.0.0",
            "group": "Models_Users",
            "description": "<p>重置用户密码</p>",
            "header": {
                "fields": {
                    "Header": [
                        {
                            "group": "Header",
                            "type": "String",
                            "optional": false,
                            "field": "access-token",
                            "description": "<p>用户Token</p>"
                        }
                    ]
                }
            },
            "filename": "routes/models/users.js",
            "groupTitle": "Models_Users",
            "name": "PutModelsUsersResetpassword",
            "sampleRequest": [
                {
                    "url": "http://localhost:6002/models/users/resetPassword"
                }
            ]
        },
        {
            "type": "put",
            "url": "/models/users/revise",
            "title": "修改用户信息",
            "version": "0.0.0",
            "group": "Models_Users",
            "description": "<p>修改用户信息</p>",
            "header": {
                "fields": {
                    "Header": [
                        {
                            "group": "Header",
                            "type": "String",
                            "optional": false,
                            "field": "access-token",
                            "description": "<p>用户Token</p>"
                        }
                    ]
                }
            },
            "filename": "routes/models/users.js",
            "groupTitle": "Models_Users",
            "name": "PutModelsUsersRevise",
            "sampleRequest": [
                {
                    "url": "http://localhost:6002/models/users/revise"
                }
            ]
        },
        {
            "type": "put",
            "url": "/models/users/revisePassword",
            "title": "修改用户密码",
            "version": "0.0.0",
            "group": "Models_Users",
            "description": "<p>修改用户密码</p>",
            "header": {
                "fields": {
                    "Header": [
                        {
                            "group": "Header",
                            "type": "String",
                            "optional": false,
                            "field": "access-token",
                            "description": "<p>用户Token</p>"
                        }
                    ]
                }
            },
            "filename": "routes/models/users.js",
            "groupTitle": "Models_Users",
            "name": "PutModelsUsersRevisepassword",
            "sampleRequest": [
                {
                    "url": "http://localhost:6002/models/users/revisePassword"
                }
            ]
        },
        {
            "type": "put",
            "url": "/models/users/station/revise",
            "title": "用户电站权限修改",
            "version": "0.0.0",
            "group": "Models_Users",
            "description": "<p>用户电站权限修改</p>",
            "header": {
                "fields": {
                    "Header": [
                        {
                            "group": "Header",
                            "type": "String",
                            "optional": false,
                            "field": "access-token",
                            "description": "<p>用户Token</p>"
                        }
                    ]
                }
            },
            "filename": "routes/models/users.js",
            "groupTitle": "Models_Users",
            "name": "PutModelsUsersStationRevise",
            "sampleRequest": [
                {
                    "url": "http://localhost:6002/models/users/station/revise"
                }
            ]
        }
    ]
});
