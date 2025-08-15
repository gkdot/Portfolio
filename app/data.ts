import exp from "constants"

type Project = {
  name: string
  description: string
  tags?: string[]
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export type ProjectVideoProps = {
  src: string
}

export const ROLES = [
  'Software Engineer',
  'Mobile App Developer',
  'AI Engineer',
  'Full Stack Developer',
]

export const PROJECTS: Project[] = [
  // Add projects here
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Walt Disney Imagineering',
    title: 'Software Developer Intern',
    start: 'May 2025',
    end: 'Present',
    link: 'https://sites.disney.com/waltdisneyimagineering/',
    id: 'work1',
  },
  {
    company: 'Freelance',
    title: 'Web Designer',
    start: 'Feb',
    end: 'May 2025',
    link: '',
    id: 'work2',
  },
  {
    company: 'Black Cape',
    title: 'Technologist Intern',
    start: 'May',
    end: 'Dec 2024',
    link: 'https://blackcape.io/products/rubicon',
    id: 'work3',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  // Add blog posts here
]

export const SOCIAL_LINKS = [
  {
    label: 'Resume',
    link: 'https://www.resume.lol/share/al035y7',
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

export const EMAIL = 'gigikuffa@gmail.com'
