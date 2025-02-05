import { ResolvedFn, RejectedFn } from '../types/index'

interface Interceptor<T> {
  resolved: ResolvedFn<T>
  rejected?: RejectedFn
}

export default class InterceptorManager<T> {
  private interceptors: Array<Interceptor<T> | null>

  constructor() {
    this.interceptors = []
  }

  use(resolved: ResolvedFn<T>, rejected?: RejectedFn): number {
    this.interceptors.push({
      resolved,
      rejected
    })
    return this.interceptors.length - 1
  }

  forEach(fn: (Interceptor: Interceptor<T>) => void): void {
    this.interceptors.forEach(interceptors => {
      if (interceptors !== null) {
        fn(interceptors)
      }
    })
  }

  eject(id: number): void {
    // ! length 做id  不可直接删除
    if (this.interceptors[id]) {
      this.interceptors[id] = null
    }
  }
}
