import noteStyles from './note-styles.module.css'

type Props = {
  title: string
  content: string
}

const Note = ({ title, content }: Props) => {
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
