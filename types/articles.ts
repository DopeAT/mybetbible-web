export interface IBaseFields {
  title: string
  slug: string
}

export interface IArticleApi extends IBaseFields {
  id: number
  meta_title: string
  meta_desc: string
  description: string
  publishedAt: string
  body: string
  article_categories: IBaseFields[]
  article_level: IBaseFields
}

export interface IArticleCategoryApi extends IBaseFields {
  id: number
  description: string | null
  meta_title: string | null
  meta_desc: string | null
  articles: IArticleApi[]
}

export interface IArticleLevelApi extends IBaseFields {
  id: number
  articles: IArticleApi[]
}
