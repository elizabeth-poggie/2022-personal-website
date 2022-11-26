import PostPreview from '../../molecules/PostPreview/post-preview'
import type Presentation from '../../../interfaces/presentation'

type Props = {
    presentations: Presentation[]
}

const DisplayPresentation = ({ presentations }: Props) => {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-16 lg:gap-x-32">
        {presentations.map((presentation) => (
          <PostPreview
            key={presentation.slug}
            title={presentation.title}
            coverImage={presentation.coverImage}
            slug={`/presentations/${presentation.slug}`}
            excerpt={presentation.excerpt}
          />
        ))}
      </div>
    </section>
  )
}

export default DisplayPresentation
