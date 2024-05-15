export interface IStrapiRes<T> {
  data: T
  meta: Record<string, any>
  error?: {
    status: number
    name: string
    message: string
  }
}

export interface IEntityApi {
  createdAt: string | Date
  id: number
  publishedAt: string | Date
  updatedAt: string | Date
}

export * from './bookies'
export * from './bonus'
export * from './catogories'
export * from './features'
export * from './offers'
export * from './seo'
export * from './file'
export * from './tracking'
export * from './articles'
