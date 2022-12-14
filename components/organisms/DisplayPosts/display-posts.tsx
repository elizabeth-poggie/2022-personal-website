import PostPreview from '../../molecules/PostPreview/post-preview'
import type Post from '../../../interfaces/post'

type Props = {
  posts: Post[]
}

const DisplayPosts = ({ posts }: Props) => {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-16 lg:gap-x-32">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            slug={`/posts/${post.slug}`}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  )
}

export default DisplayPosts
