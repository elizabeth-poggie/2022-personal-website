import NotePreview from '../../molecules/NotePreview/note-preview'
import type Note from '../../../interfaces/note'

type Props = {
  notes: Note[]
}

const DisplayNotes = ({ notes }: Props) => {
  return (
    <section>
      <div className="grid mb-8">
        {notes.map((note) => (
          <NotePreview
            key={note.slug}
            title={note.title}
            slug={note.slug}
            excerpt={note.excerpt}
            source={note.source}
          />
        ))}
      </div>
    </section>
  )
}

export default DisplayNotes
