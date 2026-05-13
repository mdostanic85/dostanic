import ProjectCard from '@/components/work/ProjectCard'
import type { Project } from '@/lib/types'

type WorkClientProps = {
  projects: Project[]
}

export default function WorkClient({ projects }: WorkClientProps) {
  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 sm:gap-y-20 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-24">
      {projects.map((project, idx) => (
        <ProjectCard
          key={project.slug}
          project={project}
          index={idx + 1}
        />
      ))}
    </div>
  )
}
