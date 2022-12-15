import CoverImage from '../../atoms/cover-image'
import styles from './post-styles.module.css'
import markdownStyles from '../../../styles/markdown-styles.module.css'
import Text from '../../../components/atoms/Text/text'

type Props = {
  title: string
  coverImage:string
  content: string
}

const PostHeader = ({ title, coverImage, content }: Props) => {
  return (
    <>
      <div className={styles.title}>
        <Text variant="h1">
            {title}
        </Text>
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} src={coverImage} width={1300} height={630}/>
      </div>
      <div className={styles.post_container}>
        <div
          className={markdownStyles['markdown']}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </>
  )
}

export default PostHeader
