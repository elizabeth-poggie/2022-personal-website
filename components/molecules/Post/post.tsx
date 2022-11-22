import CoverImage from '../../atoms/cover-image'
import postStyles from './post-styles.module.css'
import markdownStyles from '../../../styles/markdown-styles.module.css'

type Props = {
  title: string
  coverImage:string
  content: string
}

const PostHeader = ({ title, coverImage, content }: Props) => {
  return (
    <>
      <h1 className={postStyles.h1}>
        {title}
      </h1>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} src={coverImage} width={1300} height={630}/>
      </div>
      <div className="max-w-2xl mx-auto">
        <div
          className={markdownStyles['markdown']}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </>
  )
}

export default PostHeader
