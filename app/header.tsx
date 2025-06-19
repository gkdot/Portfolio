'use client'

import { useState } from 'react'
import { ROLES } from './data'
import { Typewriter } from 'react-simple-typewriter'
import Link from 'next/link'

const SOCIAL_ICON_VARIANTS = {
  hidden: { scale: 0, opacity: 0 },
  visible: { scale: 1, opacity: 1 },
}

export default function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div>
        <Link href="/" className="font-medium text-black dark:text-white">
          Gigi Kuffa
        </Link>
        <p className="text-zinc-600 dark:text-zinc-500">
          <Typewriter
            words={ROLES}
            loop={false}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </p>
      </div>
    </header>
  )
}