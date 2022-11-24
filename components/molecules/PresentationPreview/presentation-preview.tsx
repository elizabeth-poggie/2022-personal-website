import CoverImage from '../../atoms/cover-image'
import Link from 'next/link'

type Props = {
  title: string
  coverImage: string
  excerpt: string
  slug: string
}

const PresentationPreview = ({
  title,
  coverImage,
  excerpt,
  slug,
}: Props) => {
  return (
    <div>
      <div className="mb-5">
        <CoverImage slug={slug} title={title} src={coverImage} width={1300} height={630}/>
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link
          as={`/presentations/${slug}`}
          href="/presentations/[slug]"
          className="hover:underline"
        >
          {title}
        </Link>
      </h3>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
    </div>
  )
}

export default PresentationPreview
