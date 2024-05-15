import type { $Fetch } from 'ofetch'

export class MbbFetchFactory {
  protected $fetch: $Fetch

  constructor(fetcher: $Fetch) {
    this.$fetch = fetcher
  }
}
