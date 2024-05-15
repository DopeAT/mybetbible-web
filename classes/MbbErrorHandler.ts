import type { AxiosError } from 'axios'

export class MbbErrorHandler extends Error {
  constructor(err: Error) {
    super(err.message || 'Unknown error has occurred')
  }

  static fromFetchError(err: AxiosError) {
    return new MbbErrorHandler(new Error(err.message || 'Something went wrong'))
  }
}
