interface ISuccessOperationResult<T> {
  success: true
  value: T
  error?: {
    status: number
    message: string
  }
}

interface IErrorOperationResult<T> {
  success: false
  value?: T
  error: {
    status: number
    message: string
  }
}

export type OperationResult<T> = ISuccessOperationResult<T> | IErrorOperationResult<T>

export function createOperationResult<T>({
  success,
  value,
  error
}: OperationResult<T>): OperationResult<T> {
  if (success) {
    return {
      success: true as const,
      value: value as T,
      error
    }
  }

  return {
    success: false as const,
    value,
    error: error ?? new Error('No error thrown')
  }
}
