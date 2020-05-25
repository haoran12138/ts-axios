import { isPlainObject, deepMerge } from './index'
/**
 * headers key 大小标准化
 * @param headers
 * @param normalizeHeaderName 标准headers key
 */
function normalizeHeaderName(headers: any, normalizeHeaderName: string): void {
  if (!headers) {
    return
  }
  Object.keys(headers).forEach(name => {
    if (name !== normalizeHeaderName && name.toUpperCase() === normalizeHeaderName.toUpperCase()) {
      headers[normalizeHeaderName] = headers[name]
      delete headers[name]
    }
  })
}
/**
 * 处理 headers  大小写标准化
 * @param headers
 * @param data
 */
export function processHeaders(headers: any, data: any): any {
  normalizeHeaderName(headers, 'Content-Type')
  normalizeHeaderName(headers, 'Accept')
  if (isPlainObject(data)) {
    if (headers && !headers['Content-Type']) {
      headers['Content-Type'] = 'application/json;charset=utf-8'
    }
  }
  return headers
}

/**
 *
 * @param headers 字符串headers
 * @return 对象化 headers
 */
export function parseHeaders(headers: string): any {
  let parsed = Object.create(null)
  if (!headers) {
    return parsed
  }

  headers.split('\r\n').forEach(line => {
    let [key, val] = line.split(':')
    key = key.trim().toLowerCase()

    if (!key) {
      return
    }
    if (val) {
      val = val.trim()
    }
    parsed[key] = val
  })
  return parsed
}

export function flattenHeaders(headers: any, method: string): any {
  if (!headers) {
    return headers
  }

  headers = deepMerge(headers.common, headers[method], headers)
  const methosToDelete = ['delete', 'get', 'post', 'put', 'head', 'options', 'patch', 'common']
  methosToDelete.forEach(method => {
    delete headers[method]
  })
  return headers
}
