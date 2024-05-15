import qs from 'qs'

export const stringifyParams = (params?: Record<string, any>): string => {
  if (!params) return ''

  return (
    '?' +
    qs.stringify(params, {
      encodeValuesOnly: true // prettify URL
    })
  )
}
