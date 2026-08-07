import Image from 'next/image'
import { cn } from '@/lib/utils'
import type { Project } from '@/lib/types'
import { getProjectCoverSrc } from '@/lib/projectCovers'
import { getProjectCoverPlaceholderBackground } from '@/lib/projectCoverPlaceholder'

type ProjectCoverProps = {
  project: Project
  className?: string
  imageClassName?: string
  labelClassName?: string
}

/**
 * Project tile cover — real image when available, otherwise slug-stable placeholder.
 */
export default function ProjectCover({
  project,
  className,
  imageClassName,
  labelClassName,
}: ProjectCoverProps) {
  const src = getProjectCoverSrc(project)

  return (
    <div
      className={cn(
        'relative aspect-[4/3] overflow-hidden rounded-[10px] border border-stroke bg-surface transition-colors duration-300 group-hover:border-foreground',
        className,
      )}
    >
      {src ? (
        <Image
          src={src}
          alt={`${project.title} — project cover`}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className={cn(
            'object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]',
            imageClassName,
          )}
        />
      ) : (
        <div
          aria-hidden="true"
          className="flex h-full w-full items-center justify-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          style={{
            backgroundColor: getProjectCoverPlaceholderBackground(project.slug),
          }}
        >
          <span
            className={cn(
              'font-mono text-[12px] uppercase tracking-[0.2em] text-white/75',
              labelClassName,
            )}
          >
            {project.isCapability ? 'Capability' : 'Case study'}
          </span>
        </div>
      )}

      {project.isCapability ? (
        <span className="absolute left-4 top-4 z-10 rounded-[3px] bg-foreground px-2 py-1 font-mono text-[13px] uppercase tracking-[0.18em] text-inverse-foreground">
          Capability
        </span>
      ) : null}

      <span
        aria-hidden="true"
        className="absolute bottom-0 left-0 z-10 h-px w-0 bg-accent transition-all duration-500 ease-out group-hover:w-full"
      />
    </div>
  )
}
