import { IEntityApi } from '~/types/index'

export interface IOfferApi extends IEntityApi {
  body: string | null
  description: string
  name: string
}
