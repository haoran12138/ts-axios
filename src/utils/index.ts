const toString = Object.prototype.toString

/**
 * 是否为日期类型
 * @param val
 */
export function isDate(val: any): val is Date {
  return toString.call(val) === '[object Date]'
}
/**
 * 是否为基础对象
 * @param val
 */
export function isPlainObject(val: any): val is Object {
  return toString.call(val) === '[object Object]'
}

/**
 * 是否为对象类型
 * @param val
 */
// export function isObject(val: any): val is Object {
//   return val !== null && typeof val === 'object'
// }

export function isFormData(val: any): val is FormData {
  return typeof val !== 'undefined' && val instanceof FormData
}
