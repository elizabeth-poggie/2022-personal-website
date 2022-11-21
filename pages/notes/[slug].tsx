import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../components/atoms/Container/container'
import Header from '../../components/atoms/header'
import Note from '../../components/molecules/Note/note'
import Layout from '../../components/templates/layout'
import { getNotesBySlugs, getAllNotes } from '../../lib/api'
import Head from 'next/head'
import markdownToHtml from '../../lib/markdownToHtml'
import NoteType from '../../interfaces/note'

type Props = {
  note: NoteType
  preview?: boolean
}

export default function NotePage({ note, preview }: Props) {
  const router = useRouter()
  if (!router.isFallback && !note?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout preview={preview}>
      <Container>
        <Header />
          <article className="mb-32">
            <Head>
              <title>
                {note.title}
              </title>
            </Head>
            <Note
              title={note.title}
              content={note.content} 
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
  const note = getNotesBySlugs(params.slug, [
    'title',
    'slug',
    'content',
  ])
  const content = await markdownToHtml(note.content || '')

  return {
    props: {
      note: {
        ...note,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const notes = getAllNotes(['slug'])

  return {
    paths: notes.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
