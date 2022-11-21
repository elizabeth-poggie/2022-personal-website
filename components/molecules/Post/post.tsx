import CoverImage from '../../atoms/cover-image'
import postStyles from './post-styles.module.css'

type Props = {
  title: string
  coverImage: string
  content: string
}

const PostHeader = ({ title, coverImage, content }: Props) => {
  return (
    <>
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">
        {title}
      </h1>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} src={coverImage} width={1300} height={630}/>
      </div>
      <div className="max-w-2xl mx-auto">
        <div
          className={postStyles['markdown']}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </>
  )
}

export default PostHeader
