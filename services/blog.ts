import { MbbFetchFactory } from '~/services/mbb-fetch-factory'
import type { IArticleApi, IArticleCategoryApi, IArticleLevelApi, IStrapiRes } from '~/types'

export class BlogApi extends MbbFetchFactory {
  fetchArticles(): Promise<IStrapiRes<IArticleApi[]>> {
    return this.$fetch('/articles')
  }

  fetchCategories(): Promise<IStrapiRes<IArticleCategoryApi[]>> {
    return this.$fetch(`/article-categories`)
  }

  fetchLevels(): Promise<IStrapiRes<IArticleLevelApi[]>> {
    return this.$fetch(`/article-levels`)
  }

  findArticle(slug: string): Promise<IStrapiRes<IArticleApi>> {
    return this.$fetch(`/articles/${slug}`)
  }

  findArticlesByCategory(slug: string): Promise<IStrapiRes<IArticleCategoryApi>> {
    return this.$fetch(`/article-categories/${slug}`)
  }

  findArticlesByLevel(slug: string): Promise<IStrapiRes<IArticleLevelApi>> {
    return this.$fetch(`/article-levels/${slug}`)
  }
}
