import { AxiosRequestConfig } from '../types/index'
import { isPlainObject, deepMerge } from '../utils'
// 默认策略  基本类型值
function defaultStart(val1: any, val2: any): any {
  return typeof val2 !== 'undefined' ? val2 : val1
}
// 不可以使用默认配置的 参数
function startFromVal2(val1: any, val2: any): any {
  if (typeof val2 !== 'undefined') {
    return val2
  }
}
// 复杂类型值
function deepMergeStart(val1: any, val2: any): any {
  if (isPlainObject(val2)) {
    return deepMerge(val1, val2)
  } else if (typeof val2 !== 'undefined') {
    return val2
  } else if (isPlainObject(val1)) {
    return deepMerge(val1)
  } else {
    return val1
  }
}

let starts = Object.create(null)

let startKeysFormVal2 = ['url', 'params', 'data']
startKeysFormVal2.forEach(key => {
  starts[key] = startFromVal2
})

const startKeysDeepMerge = ['headers']
startKeysDeepMerge.forEach(key => {
  starts[key] = deepMergeStart
})

export default function mergeConfig(
  config1: AxiosRequestConfig,
  config2: AxiosRequestConfig
): AxiosRequestConfig {
  let config = Object.create(null)

  for (let key in config2) {
    mergeField(key)
  }

  for (let key in config1) {
    if (!config2[key]) {
      mergeField(key)
    }
  }

  function mergeField(key: string): void {
    let start = starts[key] || defaultStart
    config[key] = start(config1[key], config2[key])
  }

  return config
}
