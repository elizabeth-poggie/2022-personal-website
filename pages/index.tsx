import Container from '../components/atoms/Container/container'
import DisplayPosts from '../components/organisms/DisplayPosts/display-posts'
import DisplayNotes from '../components/organisms/DisplayNotes/display-notes'
import Layout from '../components/templates/layout'
import { getAllPosts, getAllNotes } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import Post from '../interfaces/post'
import Note from '../interfaces/note'

type Props = {
  allPosts: Post[]
  allNotes: Note[]
}

export default function Index({ allPosts, allNotes }: Props) {
  return (
    <>
      <Layout>
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>
        <Container>
        <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
            I am Poggie.
          </h1>
        </section>
        <p className="text-lg leading-relaxed mb-4">I do art and code.</p>
        <br></br>
        <h2 className="mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
          Personal Projects
        </h2>
        <DisplayPosts posts={allPosts} />
        <h2 className="mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
          Presentations
        </h2>
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
    'author',
    'coverImage',
    'excerpt',
  ])

  const allNotes = getAllNotes([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts, allNotes },
  }
}
