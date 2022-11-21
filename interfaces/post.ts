import { StringMappingType } from "typescript"

type PostType = {
  slug: string
  title: string
  date: string
  coverImage: StringMappingType
  excerpt: string
  ogImage: {
    url: string
  }
  content: string
}

export default PostType
