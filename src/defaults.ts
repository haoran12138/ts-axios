import { AxiosRequestConfig } from './types'

const defaults: AxiosRequestConfig = {
  method: 'get',
  timeout: 0,
  headers: {
    common: {
      Accepe: 'application/json,text/plain,*/*'
    }
  }
}

const mehtodsNoData = ['delete', 'get', 'head', 'options']

mehtodsNoData.forEach(method => {
  defaults.headers[method] = {}
})

const methodsWithData = ['post', 'put', 'patch']

methodsWithData.forEach(method => {
  defaults.headers[method] = {
    'Content-Type': 'application/x-www-from-urlencoded'
  }
})

export default defaults
