'use client'

import { useEffect, useState } from 'react'

/**
 * Live local clock for the footer meta rail — Belgrade time, updates
 * every second. Renders an em dash until mounted to avoid a hydration
 * mismatch.
 */
export default function LocalTime() {
  const [time, setTime] = useState<string | null>(null)

  useEffect(() => {
    const fmt = new Intl.DateTimeFormat('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
      timeZone: 'Europe/Belgrade',
    })
    const tick = () => setTime(fmt.format(new Date()))
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <span className="tabular-nums" suppressHydrationWarning>
      BEG {time ?? '—:—:—'}
    </span>
  )
}
