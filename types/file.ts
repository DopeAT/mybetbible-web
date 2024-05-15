import type { IEntityApi } from '~/types/index'

export enum EImageExtensions {
  GIF = '.gif',
  JPEG = '.jpg',
  PNG = '.png',
  SVG = '.svg',
  WEBP = '.webp'
}

export enum IMimeType {
  APNG = 'image/apng',
  AVIF = 'image/avif',
  GIF = 'image/gif',
  JPEG = 'image/jpeg',
  PNG = 'image/png',
  SVG_XML = 'image/svg+xml',
  SVG = 'image/svg',
  WEBP = 'image/webp'
}

export interface IImageApi extends IEntityApi {
  alternativeText: string | null
  caption: string | null
  ext: EImageExtensions
  formats: string | null
  hash: string
  height: number
  mime: IMimeType
  name: string
  previewUrl: string | null
  provider: string
  provider_metadata: null
  size: number
  url: string
  width: number
}
