import { MbbFetchFactory } from '~/services/mbb-fetch-factory'
import type { ICategoryWithBookiesApi, IStrapiRes } from '~/types'
import { ECategories } from '~/types'

export class CategoriesApi extends MbbFetchFactory {
  fetchByCategory(category: ECategories): Promise<IStrapiRes<ICategoryWithBookiesApi>> {
    return this.$fetch(`/categories/${category}`)
  }
}
