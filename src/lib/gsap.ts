'use client'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

/* Single registration point — import { gsap, ScrollTrigger } from '@/lib/gsap'
   everywhere so the plugin is registered exactly once on the client. */
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export { gsap, ScrollTrigger }
