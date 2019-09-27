
/*
 * generated by api-generator, do not modify.
 */

import {_get, _post, _put, _delete} from '../core/http'
import {Data, List} from '../interfaces/CommonInterface'
import {ProductVo,
PeripheralModel,
MicroGridController
} from './types/productsType'
        
/**
 * 查看产品模型列表
 */
export function fetchProductsListApi(): Promise<ProductVo[]> {
  return _get(`/products`)
}

/**
 * 插入更新产品模型(临时使用)
 */
export function addProductsApi(model: PeripheralModel): Promise<number> {
  return _post(`/products`, model)
}

/**
 * 查看产品模型内容详细
 */
export function fetchProductsApi(product_mode_id: number): Promise<MicroGridController> {
  return _get(`/products/${product_mode_id}`, product_mode_id)
}
