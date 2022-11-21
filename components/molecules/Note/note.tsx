import CoverImage from '../../atoms/cover-image'
import noteStyles from './note-styles.module.css'

type Props = {
  title: string
  coverImage: string
  content: string
}

const Note = ({ title, coverImage, content }: Props) => {
  return (
    <>
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">
        {title}
      </h1>
      <div className="max-w-2xl mx-auto">
        <div
          className={noteStyles['markdown']}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </>
  )
}

export default Note
