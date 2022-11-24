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
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
            I am Poggie.
          </h1>
        </section>
        <h2 className="mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
          Resume
        </h2>
        <br></br>
        <h2 className="mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
          Portfolio
        </h2>
        <DisplayPosts posts={allPosts} />
        <h2 className="mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
          Presentations
        </h2>
        <DisplayPresentation presentations={allPresentations} />
        <h2 className="mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
          Notes
        </h2>
        <DisplayNotes notes={allNotes} />
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
