import { AxiosRequestConfig, AxiosPromise } from './types/index'
import { buildURL } from './utils/url'
import { transformRequest } from './utils/data'
import { processHeaders } from './utils/headers'
import xhr from './xhr'

function axios(config: AxiosRequestConfig): AxiosPromise {
  processConfig(config)
  return xhr(config)
}

/**
 * 处理config
 * @param config
 */
function processConfig(config: AxiosRequestConfig): void {
  config.url = transformURL(config)
  config.headers = transfromHeaders(config)
  config.data = transformRequestData(config)
}

function transformURL(config: AxiosRequestConfig): string {
  let { url, params } = config
  return buildURL(url, params)
}

function transformRequestData(config: AxiosRequestConfig): any {
  let { data } = config
  return transformRequest(data)
}
function transfromHeaders(config: AxiosRequestConfig): any {
  let { data, headers = {} } = config
  return processHeaders(headers, data)
}

export default axios
