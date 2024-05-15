import type { IEntityApi } from '~/types/index'

export interface IBonusApi extends IEntityApi {
  body: string
  isWelcome: boolean
  name: string
  title: string
}
