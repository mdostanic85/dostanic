'use client'

export default function ResumeActions() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <a
        href="/Milos-Dostanic-Resume.pdf"
        download
        data-analytics-event="resume_action"
        className="inline-flex h-11 items-center bg-foreground px-5 font-mono text-[10px] uppercase tracking-[0.2em] text-inverse-foreground transition-colors hover:bg-accent hover:text-white"
      >
        Download PDF
      </a>
      <button
        type="button"
        onClick={() => window.print()}
        className="inline-flex h-11 items-center border border-[#111318]/20 px-5 font-mono text-[10px] uppercase tracking-[0.2em] text-[#111318]/70 transition-colors hover:border-[#111318] hover:text-[#111318]"
      >
        Print
      </button>
    </div>
  )
}
