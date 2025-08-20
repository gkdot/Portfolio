'use client'

import { motion } from 'motion/react'
import { ArrowUpRight, XIcon } from 'lucide-react'
import { Spotlight } from '@/components/ui/spotlight'
import { MagneticLink } from '@/components/magnetic-link'
import { PROJECTS, WORK_EXPERIENCE, EMAIL, SOCIAL_LINKS } from './data'
import ProjectsPage from './projects'
import { useState } from 'react'
import Particles from '@/components/ui/particles'
import { MorphingDialog, MorphingDialogTrigger, MorphingDialogContainer, MorphingDialogContent, MorphingDialogClose } from '@/components/ui/morphing-dialog'

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = {
  duration: 0.3,
}

type ProjectVideoProps = {
  src: string
}

function ProjectVideo({ src }: ProjectVideoProps) {
  return (
    <MorphingDialog
      transition={{
        type: 'spring',
        bounce: 0,
        duration: 0.3,
      }}
    >
      <MorphingDialogTrigger>
        <video
          src={src}
          autoPlay
          loop
          muted
          className="aspect-video w-full cursor-zoom-in rounded-xl"
        />
      </MorphingDialogTrigger>
      <MorphingDialogContainer>
        <MorphingDialogContent className="relative aspect-video rounded-2xl bg-zinc-50 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950 dark:ring-zinc-800/50">
          <video
            src={src}
            autoPlay
            loop
            muted
            className="aspect-video h-[50vh] w-full rounded-xl md:h-[70vh]"
          />
        </MorphingDialogContent>
        <MorphingDialogClose
          className="fixed top-6 right-6 h-fit w-fit rounded-full bg-white p-1"
          variants={{
            initial: { opacity: 0 },
            animate: {
              opacity: 1,
              transition: { delay: 0.3, duration: 0.1 },
            },
            exit: { opacity: 0, transition: { duration: 0 } },
          }}
        >
          <XIcon className="h-5 w-5 text-zinc-500" />
        </MorphingDialogClose>
      </MorphingDialogContainer>
    </MorphingDialog>
  )
}

export default function Personal() {
  const [showProjects, setShowProjects] = useState(false)

  if (showProjects) {
    return <ProjectsPage />
  }

  return (
    <div className="relative">
      <Particles className="fixed inset-0 z-0" 
        quantity={500} 
        staticity={50} 
        ease={50}
        refresh={true}
      />

      <motion.main
        className="relative z-10 space-y-24"
        variants={VARIANTS_CONTAINER}
        initial="hidden"
        animate="visible"
      >
        <motion.section variants={VARIANTS_SECTION} transition={TRANSITION_SECTION}>
          <div className="flex-1">
            <p className="text-zinc-600 dark:text-zinc-400">
              Computer Science student concentrating in AI and Machine Learning & graduating Spring 2026.
              Open to internships and full-time opportunities.
            </p>
          </div>
        </motion.section>

        <motion.section variants={VARIANTS_SECTION} transition={TRANSITION_SECTION}>
          <h3 className="flex flex-row gap-2 mb-5 text-lg font-medium">Currently working on...</h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {PROJECTS.map((project) => (
              <div key={project.name} className="space-y-2">
                <div className="relative rounded-2xl bg-zinc-50/40 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950/40 dark:ring-zinc-800/50">
                  <ProjectVideo src={project.video} />
                </div>
                <div className="px-1">
                  <a
                    className="font-base group relative inline-block font-[450] text-zinc-900 dark:text-zinc-50"
                    href={project.link}
                    target="_blank"
                  >
                    {project.name}
                    <span className="absolute bottom-0.5 left-0 block h-[1px] w-full max-w-0 bg-zinc-900 dark:bg-zinc-50 transition-all duration-200 group-hover:max-w-full"></span>
                  </a>
                  <p className="text-base text-zinc-600 dark:text-zinc-400">{project.description}</p>
                </div>
              </div>
            ))}

            <button
              className="flex right-auto max-w-fit rounded-xl px-3 py-2 text-sm font-medium text-white bg-zinc-900 
                          hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-400 hover:outline-none
                          dark:text-black dark:bg-white dark:hover:bg-zinc-800 dark:hover:text-white transition"
              onClick={() => setShowProjects(true)}
            >
              See more projects <ArrowUpRight size={16} />
            </button>
          </div>
        </motion.section>

        <motion.section variants={VARIANTS_SECTION} transition={TRANSITION_SECTION}>
          <h3 className="mb-5 text-lg font-medium">My journey</h3>
          <div className="flex flex-col space-y-2">
            {WORK_EXPERIENCE.map((job) => (
              <a
                className="relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30"
                href={job.link}
                target="_blank"
                rel="noopener noreferrer"
                key={job.id}
              >
                <Spotlight
                  className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
                  size={64}
                />
                <div className="relative h-full w-full rounded-[15px] bg-white p-4 dark:bg-zinc-950">
                  <div className="relative flex w-full flex-row justify-between">
                    <div>
                      <h4 className="font-normal dark:text-zinc-100">{job.title}</h4>
                      <p className="text-zinc-500 dark:text-zinc-400">{job.company}</p>
                    </div>
                    <p className="text-zinc-600 dark:text-zinc-400">
                      {job.start.slice(-4) == job.end.slice(-4) ? job.start.substring(0,3) : job.start} - {job.end}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </motion.section>

        <motion.section variants={VARIANTS_SECTION} transition={TRANSITION_SECTION}>
          <h3 className="mb-5 text-lg font-medium">Connect</h3>
          <p className="mb-5 text-zinc-600 dark:text-zinc-400">
            Feel free to contact me at{' '}
            <a className="underline dark:text-zinc-300" href={`mailto:${EMAIL}`}>
              {EMAIL}
            </a>
            .
          </p>
          <div className="flex items-center justify-start space-x-3">
            {SOCIAL_LINKS.map((link) => (
              <MagneticLink key={link.label} link={link.link}>
                {link.label}
              </MagneticLink>
            ))}
          </div>
        </motion.section>
      </motion.main>
    </div>
  )
}