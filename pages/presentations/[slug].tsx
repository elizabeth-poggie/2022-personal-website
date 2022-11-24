import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../components/atoms/Container/container'
import Header from '../../components/atoms/header'
import PostHeader from '../../components/molecules/Post/post'
import Layout from '../../components/templates/layout'
import { getPresentationBySlugs, getAllPresentations } from '../../lib/api'
import Head from 'next/head'
import markdownToHtml from '../../lib/markdownToHtml'
import type PresentationType from '../../interfaces/presentation'

type Props = {
  presentation: PresentationType
  preview?: boolean
}

export default function Presentation({ presentation, preview }: Props) {
  const router = useRouter()
  if (!router.isFallback && !presentation?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout preview={preview}>
      <Container>
        <Header />
          <article className="mb-32">
            <Head>
              <title>
                {presentation.title}
              </title>
              <meta property="og:image" content={presentation.ogImage.url} />
            </Head>
            <PostHeader
              title={presentation.title}
              coverImage={presentation.coverImage}
              content={presentation.content} 
            />
          </article>
      </Container>
    </Layout>
  )
}

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const presentation = getPresentationBySlugs(params.slug, [
    'title',
    'date',
    'slug',
    'content',
    'ogImage',
    'coverImage',
  ])
  const content = await markdownToHtml(presentation.content || '')

  return {
    props: {
      presentation: {
        ...presentation,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const presentations = getAllPresentations(['slug'])

  return {
    paths: presentations.map((presentation) => {
      return {
        params: {
          slug: presentation.slug,
        },
      }
    }),
    fallback: false,
  }
}
