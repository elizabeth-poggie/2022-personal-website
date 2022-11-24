import PresentationPreview from '../../molecules/PresentationPreview/presentation-preview'
import type Presentation from '../../../interfaces/presentation'

type Props = {
    presentations: Presentation[]
}

const DisplayPresentation = ({ presentations }: Props) => {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-16 lg:gap-x-32 gap-y-20">
        {presentations.map((presentation) => (
          <PresentationPreview
            key={presentation.slug}
            title={presentation.title}
            coverImage={presentation.coverImage}
            slug={presentation.slug}
            excerpt={presentation.excerpt}
          />
        ))}
      </div>
    </section>
  )
}

export default DisplayPresentation
