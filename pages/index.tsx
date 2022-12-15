import Container from '../components/atoms/Container/container'
import DisplayPosts from '../components/organisms/DisplayPosts/display-posts'
import DisplayNotes from '../components/organisms/DisplayNotes/display-notes'
import DisplayPresentation from '../components/organisms/DisplayPresenations/display-presentations'
import Layout from '../components/templates/layout'
import { getAllPosts, getAllNotes, getAllPresentations } from '../lib/api'
import Head from 'next/head'
import Post from '../interfaces/post'
import Note from '../interfaces/note'
import Presentation from '../interfaces/presentation'
import Text from '../components/atoms/Text/text'

type Props = {
  allPosts: Post[]
  allNotes: Note[]
  allPresentations: Presentation[]
}

export default function Index({ allPosts, allNotes, allPresentations }: Props) {
  return (
    <>
      <Layout>
        <Head>
          <title>I am Poggie.</title>
        </Head>
        <Container>
        <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
          <Text variant="h1">
            I am Poggie.
          </Text>
        </section>
        <div className="mb-8">
          <Text variant="h2">
            Portfolio
          </Text>
        </div>
        <section className="mb-8">
          <DisplayPosts posts={allPosts} />
        </section>
        <div className="mb-8">
          <Text variant="h2">
            Presentations
          </Text>
        </div>
        <section className="mb-8">
          <DisplayPresentation presentations={allPresentations} />
        </section>
        <div className="mb-8">
          <Text variant="h2">
            Notes
          </Text>
        </div>
        <section className="mb-8">
          <DisplayNotes notes={allNotes} />
        </section>
        </Container>
      </Layout>
    </>
  )
}


export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'coverImage',
    'excerpt',
  ])

  const allNotes = getAllNotes([
    'title',
    'slug',
    'excerpt',
    'source',
  ])

  const allPresentations = getAllPresentations([
    'title',
    'date',
    'slug',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts, allNotes, allPresentations },
  }
}
