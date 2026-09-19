import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { DetailShell, ImageCarousel } from '../components/ui/detail-shell'
import { Tag } from '../components/ui/header'
import { projects, findProject } from '../data/content'
import NotFound from './NotFound'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = findProject(slug)

  if (!project) return <NotFound what="project" backTo="/#work" />
  
  const i = projects.indexOf(project)
  const prev = projects[i - 1]
  const next = projects[i + 1]

  return (
    <DetailShell
      tab={`work/${project.slug}${project.ext}`}
      breadcrumb={`~/rc / work / ${project.slug}`}
      backTo="/#work"
      backLabel="all work"
      title={project.title}
    >
      <span className="mb-2.5 block font-mono text-xs tracking-wider text-primary">{project.ext}</span>
      <h1 className="mb-3 font-sans text-3xl font-semibold sm:text-4xl">{project.title}</h1>
      <p className="mb-8 max-w-[65ch] text-[15.5px] leading-relaxed text-muted-foreground">
        {project.desc}
      </p>

      <ImageCarousel images={project.images} alt={project.title} />

      <div className="mt-6 flex flex-wrap gap-1.5">
        {project.tags.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </div>

      {(prev || next) && (
        <div className="mt-10 flex flex-wrap justify-between gap-4 border-t border-border pt-6 font-mono text-[13px]">
          {prev ? (
            <Link to={`/work/${prev.slug}`} className="text-primary hover:underline">
              ← {prev.title}
            </Link>
          ) : (
            <span />
          )}
          {next && (
            <Link to={`/work/${next.slug}`} className="text-primary hover:underline">
              {next.title} →
            </Link>
          )}
        </div>
      )}
    </DetailShell>
  )
}