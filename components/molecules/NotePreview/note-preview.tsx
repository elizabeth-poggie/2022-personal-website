import Link from 'next/link'
import notePreviewStyles from './note-preview-styles.module.css'

type Props = {
  title: string
  excerpt: string
  slug: string
  source: string
}

const NotePreview = ({
  title,
  excerpt,
  slug,
  source,
}: Props) => {
  return (
    <Link
    as={`/notes/${slug}`}
    href="/notes/[slug]"
    className={notePreviewStyles.underline}
    >
        <div className={notePreviewStyles.container}>
            <div className={notePreviewStyles.sidebar}>
            <h3 className={notePreviewStyles.underlineMobile}>{title}:&nbsp;</h3>
            <p className="text-lg leading-relaxed">{excerpt}</p>
            </div>
            <p className={notePreviewStyles.source}>{source}</p>
        </div>
    </Link>
  )
}

export default NotePreview
