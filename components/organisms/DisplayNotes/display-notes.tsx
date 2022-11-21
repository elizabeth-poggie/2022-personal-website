import NotePreview from '../../molecules/NotePreview/note-preview'
import type Note from '../../../interfaces/note'

type Props = {
  notes: Note[]
}

const DisplayPosts = ({ notes }: Props) => {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-16 lg:gap-x-32 gap-y-20">
        {notes.map((note) => (
          <NotePreview
            key={note.slug}
            title={note.title}
            slug={note.slug}
            excerpt={note.excerpt}
          />
        ))}
      </div>
    </section>
  )
}

export default DisplayPosts
