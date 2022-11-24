import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

// TODO fix the amount of code duplication happening here lmao

// Get Directory Path
const postsDirectory = join(process.cwd(), '_posts')
const notesDirectory = join(process.cwd(), '_notes')
const presentationsDirectory = join(process.cwd(), '_presentations')


// Read Directory Slugs
export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}
export function getNoteSlugs() {
  return fs.readdirSync(notesDirectory)
}
export function getPresentationSlugs() {
  return fs.readdirSync(presentationsDirectory)
}

// Read MD Content
export function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  type Items = {
    [key: string]: string
  }

  const items: Items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field]
    }
  })

  return items
}

export function getNotesBySlugs(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(notesDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  type Items = {
    [key: string]: string
  }

  const items: Items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field]
    }
  })

  return items
}

export function getPresentationBySlugs(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(presentationsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  type Items = {
    [key: string]: string
  }

  const items: Items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field]
    }
  })

  return items
}


export function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return posts
}

export function getAllNotes(fields: string[] = []) {
  const slugs = getNoteSlugs()
  const notes = slugs
    .map((slug) => getNotesBySlugs(slug, fields))
  return notes
}

export function getAllPresentations(fields: string[] = []) {
  const slugs = getPresentationSlugs()
  const notes = slugs
    .map((slug) => getPresentationBySlugs(slug, fields))
  return notes
}