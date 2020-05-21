export type Method =
  | 'get'
  | 'GET'
  | 'delete'
  | 'DELETE'
  | 'HEAD'
  | 'head'
  | 'OPTIONS'
  | 'options'
  | 'post'
  | 'POST'
  | 'patch'
  | 'PATCH'
  | 'put'
  | 'PUT'

export interface AxiosRequestConfig {
  url: string
  method?: Method
  data?: any
  params?: any
}
