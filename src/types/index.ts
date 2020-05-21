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
  baseURL?: string
  method?: Method
  data?: any
  params?: any
  headers?: any
  responseType?: XMLHttpRequestResponseType
  timeout?: number
}

export interface AxiosResponse {
  data: any
  status: number
  statusText: string
  headers: any
  config: AxiosRequestConfig
  request: any
}

export interface AxiosPromise extends Promise<AxiosResponse> {}
