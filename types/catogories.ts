import type { IBookieApi, IEntityApi } from '~/types/index'

export enum ECategories {
  SPORTS = 'sports',
  CASINO = 'casino',
  POKER = 'poker'
}

export interface ICategoryApi extends IEntityApi {
  name: ECategories
  slug: string
}

export interface ICategoryWithBookiesApi extends ICategoryApi {
  bookies: Omit<IBookieApi, 'body' | 'categories' | 'features' | 'offers' | 'seo'>[]
}
