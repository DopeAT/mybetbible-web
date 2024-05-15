import type { AxiosInstance, AxiosRequestConfig } from 'axios'
import { createOperationResult, type OperationResult } from '~/utils/operationResult'
import { MbbErrorHandler } from '~/classes/MbbErrorHandler'

export interface MbbAxiosInstance extends AxiosInstance {
  mbb_get<T = any>(url: string, config?: AxiosRequestConfig): Promise<OperationResult<T>>
  mbb_post<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<OperationResult<T>>
  mbb_put<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<OperationResult<T>>
  mbb_patch<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<OperationResult<T>>
  mbb_delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<OperationResult<T>>
  isMbbInstance: boolean
}

export const extendAxios = (axios: any): MbbAxiosInstance => {
  for (const method of ['get', 'post', 'put', 'patch', 'delete']) {
    axios['mbb_' + method] = function () {
      return this[method]
        .apply(this, arguments)
        .then((res: any) => createOperationResult({ success: true, value: res.data }))
        .catch((e: any) => {
          if ('isAxiosError' in e && e.isAxiosError) {
            return createOperationResult({
              success: false,
              error: MbbErrorHandler.fromAxiosError(e)
            })
          }

          return createOperationResult({
            success: false,
            error: new MbbErrorHandler(new Error('Unknown error has occurred'))
          })
        })
    }
  }

  axios.isMbbInstance = true

  return axios
}
