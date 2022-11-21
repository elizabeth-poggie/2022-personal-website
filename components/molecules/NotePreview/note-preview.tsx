import Link from 'next/link'

type Props = {
  title: string
  excerpt: string
  slug: string
}

const NotePreview = ({
  title,
  excerpt,
  slug,
}: Props) => {
  return (
    <div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link
          as={`/notes/${slug}`}
          href="/notes/[slug]"
          className="hover:underline"
        >
          {title}
        </Link>
      </h3>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
    </div>
  )
}

export default NotePreview
