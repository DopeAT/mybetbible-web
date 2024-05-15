import { MbbFetchFactory } from '~/services/mbb-fetch-factory'
import type { IBookieApi, IStrapiRes } from '~/types'

export class BookiesApi extends MbbFetchFactory {
  fetchBookie(bookie: string): Promise<IStrapiRes<IBookieApi>> {
    return this.$fetch(`/bookies/${bookie}`)
  }
}
