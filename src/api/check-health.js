import request from '@/utils/request'

export function checkHealth(params) {
  return request({
    url: '/v1/service',
    method: 'get',
    params
  })
}

export function addTask(params) {
  return request({
    url: '/task/add/',
    method: 'post',
    data: params
  })
}

export function updateTask(params) {
  return request({
    url: '/task/update/',
    method: 'put',
    data: params
  })
}

export function deleteTask(params) {
  return request({
    url: '/task/delete/',
    method: 'delete',
    data: params
  })
}