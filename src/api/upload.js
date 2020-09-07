import request from '@/utils/request'

export function uploadPlan(params) {
  return request({
    url: '/api/v1/fetch_scripts/upload',
    method: 'post',
    headers: { 'Content-Type': 'multipart/form-data' },
    data: params
  })
}
