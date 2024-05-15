import { MbbFetchFactory } from '~/services/mbb-fetch-factory'
import type { IStrapiRes, ITrack } from '~/types'

export class TrackingApi extends MbbFetchFactory {
  trackClick(data: ITrack): Promise<IStrapiRes<ITrack>> {
    return this.$fetch(`/tracks`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: { data }
    })
  }
}
