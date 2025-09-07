'use client'

import React, { useState } from 'react'
import { PROJECTS, ProjectVideoProps } from './data'
import { ArrowUpRight, Trophy } from 'lucide-react'
import Personal from './page'

function ProjectVideo({ src }: ProjectVideoProps) {
  return (
    <video
      src={src}
      autoPlay
      loop
      muted
      className="aspect-video w-full rounded-xl"
    />
  )
}

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  const allTags = Array.from(
    new Set(PROJECTS.flatMap((project) => project.tags))
  )

  const filteredProjects = PROJECTS.filter((project) => {
    const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesTags =
      selectedTags.length === 0 || selectedTags.every((tag) => project.tags?.includes(tag))
    return matchesSearch && matchesTags
  })

  const toggleTag = (tag: string) => {
    setSelectedTags((prevTags) =>
      prevTags.includes(tag)
        ? prevTags.filter((t) => t !== tag)
        : [...prevTags, tag]
    )
  }
  
  return (
    <div className="space-y-6">
      <h3 className="flex items-center gap-2 font-medium">
        <Trophy className="w-4 h-4 text-yellow-500" />
        Hall of Fame
      </h3>
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search projects..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex flex-wrap gap-2">
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => toggleTag(tag as string)}
            className={`px-3 py-1 rounded-full text-sm ${
              selectedTags.includes(tag as string)
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project) => (
          <div key={project.name} className="space-y-2">
            <div className="relative rounded-2xl bg-gray-100 p-1 ring-1 ring-gray-300">
              {project.video && <ProjectVideo src={project.video} />}
            </div>
            <div className="px-1">
              <a
                className="font-medium text-lg"
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.name}
              </a>
              <p className="text-sm text-gray-600">{project.description}</p>
              <div className="flex flex-wrap gap-1 mt-2">
                {project.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs rounded-full bg-gray-200 text-gray-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
        <button
          className="max-w-60 max-h-12 right-auto max-w-fit rounded-xl px-3 py-2 text-sm font-medium 
          text-white bg-zinc-900 hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-400 
          hover:outline-none dark:text-black dark:bg-white dark:hover:bg-zinc-800 dark:hover:text-white 
          transition"
          onClick={() => window.location.href = '/'}
        >
          Go back to portfolio <ArrowUpRight size={16} />
        </button>
      </div>
    </div>
  )
}