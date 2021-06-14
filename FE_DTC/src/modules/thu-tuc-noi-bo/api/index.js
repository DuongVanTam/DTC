import ENDPOINT from '@/modules/thu-tuc-noi-bo/api/endpoints'
import { HTTP } from '@/api/http-common'

export function callAPiLayDanhSachHoSo() {
  return new Promise((resolve, reject) => HTTP.get('http://10.0.0.57:8099/api/v1/GroupProjectType')
    .then(response => {
      console.log(response)
      resolve(response)
    })
    .catch(error => {
      reject(error)
    }))
}

export function callApiTaoHoSo(payload) {
  return new Promise((resolve, reject) => HTTP.post(ENDPOINT.HO_SO, payload)
    .then(response => {
      resolve(response)
    })
    .catch(error => {
      reject(error)
    }))
}

export function callApiCapNhatHoSo(payload) {
  return new Promise((resolve, reject) => HTTP.put(ENDPOINT.HO_SO, payload)
    .then(response => {
      resolve(response)
    })
    .catch(error => {
      reject(error)
    }))
}

export function callApiXoaHoSo(payload) {
  return new Promise((resolve, reject) => HTTP.delete(ENDPOINT.HO_SO, payload)
    .then(response => {
      resolve(response)
    })
    .catch(error => {
      reject(error)
    }))
}
