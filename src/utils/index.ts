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

export function extend<T, U>(to: T, from: U): T & U {
  for (const key in from) {
    ;(to as T & U)[key] = from[key] as any
  }
  return to as T & U
}

// 深拷贝   基本类型 同key 后面覆盖前面
export function deepMerge(...objs: any[]): any {
  const result = Object.create(null)

  objs.forEach(obj => {
    if (obj) {
      Object.keys(obj).forEach(key => {
        const val = obj[key]
        if (isPlainObject(val)) {
          //  result[key] 已经存在 并且为对象
          if (isPlainObject(result[key])) {
            result[key] = deepMerge(result[key], val)
          } else {
            result[key] = deepMerge(val)
          }
        } else {
          result[key] = val
        }
      })
    }
  })
  return result
}
