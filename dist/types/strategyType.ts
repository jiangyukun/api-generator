
/*
 * generated by api-generator, do not modify.
 */

/**
 * 
 */
export interface StrategyVo {
    description?: string // 
name?: string // 
producer?: string // 
strategyId?: number // 
version?: string // 

}

/**
 * 
 */
export interface StrategyModel {
    description?: string // 
inputs?: InputDataPoint[] // 
name?: string // 
outputs?: OutputDataPoint[] // 
parameters?: BaseStrategyParameter // 
peripherals?: any // 
producer?: string // 
strategyId?: string // 
version?: string // 

}

/**
 * 
 */
export interface InputDataPoint {
    dataType?: string // 
defaultDataName?: string // 
defaultPeripheralType?: string // 
description?: string // 
id?: number // 
inputDataType?: string // 
name?: string // 
optional?: boolean // 
targetDataName?: string // 

}

/**
 * 
 */
export interface OutputDataPoint {
    dataType?: string // 
defaultDataName?: string // 
defaultPeripheralType?: string // 
description?: string // 
id?: number // 
inputDataType?: string // 
intermediateResult?: boolean // 
maxInterval?: number // 
name?: string // 
optional?: boolean // 
targetDataName?: string // 
updateThreshold?: number // 

}

/**
 * 
 */
export interface BaseStrategyParameter {
    executeEndTime?: string // 
executeStartTime?: string // 

}
