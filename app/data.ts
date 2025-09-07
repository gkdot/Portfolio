import exp from "constants"

type Project = {
  name: string
  description: string
  tags?: string[]
  link: string
  video?: string
  id: number
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: number
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: number
}

type SocialLink = {
  label: string
  link: string
}

export type ProjectVideoProps = {
  src: string
  name?: string
}

export const ROLES = [
  'Software Engineer',
  'Mobile App Developer',
  'AI Engineer',
  'Full Stack Developer',
]

export const PROJECTS: Project[] = [
  {
    name: 'syllabary',
    description: 'Web app that transforms course syllabi into calendar-ready tasks and events',
    tags: ['react', 'typescript', 'vite', 'tailwind', 'firebase'],
    link: 'https://syllabary.vercel.app/',
    video: 'https://youtu.be/D_jCcPSwq5g',
    id: 1,
  }
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Walt Disney Imagineering',
    title: 'Software Developer Intern',
    start: 'May 2025',
    end: 'Aug 2025',
    link: 'https://sites.disney.com/waltdisneyimagineering/',
    id: 3,
  },
  {
    company: 'Freelance',
    title: 'Web Designer',
    start: 'Feb 2025',
    end: 'May 2025',
    link: '',
    id: 2,
  },
  {
    company: 'Black Cape',
    title: 'Technologist Intern',
    start: 'May 2024',
    end: 'Dec 2024',
    link: 'https://blackcape.io/products/rubicon',
    id: 1,
  },
]

export const BLOG_POSTS: BlogPost[] = [
  // Add blog posts here
]

export const SOCIAL_LINKS = [
  {
    label: 'Resume',
    link: 'https://www.resume.lol/share/pa03oxp',
  },
  {
    label: 'Twitter',
    link: 'https://x.com/GKD0T',
  },
  {
    label: 'LinkedIn',
    link: 'https://linkedin.com/in/gigikuffa',
  },
  {
    label: 'GitHub',
    link: 'https://github.com/gkdot',
  },
]

export const EMAIL = 'jdkuffa@gmail.com'
