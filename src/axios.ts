import { AxiosInstance, AxiosRequestConfig } from './types/index'
import Axios from './core/Axios'
import { extend } from './utils/index'
import defaults from './defaults'
function createaInstance(config: AxiosRequestConfig): AxiosInstance {
  const context = new Axios(config)
  const instance = Axios.prototype.request.bind(context)
  extend(instance, context)
  return instance as AxiosInstance
}

const axios = createaInstance(defaults)

export default axios
