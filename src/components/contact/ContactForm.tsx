'use client'

import { useCallback, useState } from 'react'
import Button from '@/components/ui/Button'

const TO_EMAIL = 'milos@dostanic.net'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const fd = new FormData(form)
    const name = String(fd.get('name') ?? '').trim()
    const email = String(fd.get('email') ?? '').trim()
    const topic = String(fd.get('topic') ?? '').trim()
    const message = String(fd.get('message') ?? '').trim()

    if (!email || !message) return

    const subject = encodeURIComponent(
      topic ? `${topic} — ${name || 'Portfolio contact'}` : `Portfolio — ${name || 'Contact'}`
    )
    const body = encodeURIComponent(
      [`Name: ${name || '—'}`, `Email: ${email}`, topic ? `Topic: ${topic}` : '', '', message].join('\n')
    )

    window.location.href = `mailto:${TO_EMAIL}?subject=${subject}&body=${body}`
    setSubmitted(true)
    form.reset()
  }, [])

  return (
    <div className="rounded-[10px] border border-stroke bg-background p-6 lg:p-8">
      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">Message</p>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        Opens your email app with this message filled in — you can edit before sending.
      </p>

      <form className="mt-8 space-y-5" onSubmit={onSubmit} noValidate>
        <div>
          <label htmlFor="contact-name" className="block font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            className="mt-2 w-full rounded-[4px] border border-stroke bg-surface px-4 py-3 text-base text-foreground outline-none transition-colors focus-visible:border-accent"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="contact-email" className="block font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
            Email <span className="text-accent">*</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="mt-2 w-full rounded-[4px] border border-stroke bg-surface px-4 py-3 text-base text-foreground outline-none transition-colors focus-visible:border-accent"
            placeholder="you@company.com"
          />
        </div>
        <div>
          <label htmlFor="contact-topic" className="block font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
            Topic <span className="text-muted normal-case tracking-normal">(optional)</span>
          </label>
          <input
            id="contact-topic"
            name="topic"
            type="text"
            className="mt-2 w-full rounded-[4px] border border-stroke bg-surface px-4 py-3 text-base text-foreground outline-none transition-colors focus-visible:border-accent"
            placeholder="e.g. Design system audit, product UX"
          />
        </div>
        <div>
          <label htmlFor="contact-message" className="block font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
            Message <span className="text-accent">*</span>
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            rows={5}
            className="mt-2 w-full resize-y rounded-[4px] border border-stroke bg-surface px-4 py-3 text-base leading-relaxed text-foreground outline-none transition-colors focus-visible:border-accent"
            placeholder="Context, timeline, links — whatever helps."
          />
        </div>
        <Button type="submit" variant="primary">
          Compose email
        </Button>
      </form>

      {submitted ? (
        <p className="mt-4 text-sm text-muted" role="status">
          If your mail app did not open, email{' '}
          <a href={`mailto:${TO_EMAIL}`} className="text-accent underline-offset-2 hover:underline">
            {TO_EMAIL}
          </a>{' '}
          directly.
        </p>
      ) : null}
    </div>
  )
}
