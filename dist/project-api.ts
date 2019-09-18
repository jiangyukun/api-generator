
/*
 * generated by api-generator, do not modify.
 */

import {_get, _post, _put, _delete} from '../core/http'
import {Data, List} from '../interfaces/CommonInterface'
import {ProjectConfigFileVo,
ProjectModel
} from './types/projectType'
        
/**
 * 查询所有项目
 */
export function fetchProjectListApi(): Promise<ProjectConfigFileVo[]> {
  return _get(`/project`)
}

/**
 * 新建项目结构
 */
export function addProjectApi(model: ProjectModel): Promise<number> {
  return _post(`/project`, model)
}

/**
 * 更新项目结构(以Id为更新字段)
 */
export function updateProjectApi(model: ProjectModel): Promise<number> {
  return _put(`/project`, model)
}

/**
 * 查询项目结构
 */
export function projectApi(name: string): Promise<ProjectConfigFileVo> {
  return _get(`/project/${name}`, name)
}

/**
 * 删除项目结构
 */
export function deleteProjectApi(projectId: number): Promise<number> {
  return _delete(`/project/${projectId}`, projectId)
}
