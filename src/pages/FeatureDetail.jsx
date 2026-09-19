import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { ExternalLink, Newspaper } from 'lucide-react'
import { DetailShell } from '../components/ui/detail-shell'
import { Tag } from '../components/ui/header'
import { features, findFeature } from '../data/content'
import NotFound from './NotFound'

export default function FeatureDetail() {
  const { slug } = useParams()
  const item = findFeature(slug)

  if (!item) return <NotFound what="article" backTo="/#featured" />

  const i = features.indexOf(item)
  const prev = features[i - 1]
  const next = features[i + 1]

  return (
    <DetailShell
      tab={`featured/${item.slug}${item.ext}`}
      breadcrumb={`~/rc / featured / ${item.slug}`}
      backTo="/#featured"
      backLabel="all mentions"
      title={item.title}
    >
      <div className="mb-3 flex items-center justify-between">
        <span className="rounded-md border border-border bg-background px-2 py-0.5 font-mono text-[11px] text-primary">
          {item.ext}
        </span>
        <span className="font-mono text-[11px] text-muted-foreground/70">{item.date}</span>
      </div>

      <h1 className="mb-1.5 font-sans text-2xl font-semibold leading-snug sm:text-3xl">
        {item.title}
      </h1>
      <p className="mb-6 font-mono text-[12.5px] text-muted-foreground/80">{item.outlet}</p>

      {item.image ? (
        <img
          src={item.image}
          alt={item.title}
          className="mb-6 h-64 w-full rounded-xl object-cover sm:h-96"
          onError={(e) => {
            e.currentTarget.style.display = 'none'
          }}
        />
      ) : (
        <div className="mb-6 flex h-48 items-center justify-center rounded-xl bg-muted">
          <Newspaper size={36} className="text-muted-foreground/40" />
        </div>
      )}

      {item.role && (
        <p className="mb-5 rounded-lg border border-border bg-background px-4 py-3 text-[13.5px] text-muted-foreground">
          <span className="font-mono text-[11px] text-primary">my involvement</span>
          <br />
          {item.role}
        </p>
      )}

      <p className="max-w-[65ch] text-[15.5px] leading-relaxed text-muted-foreground">{item.desc}</p>

      {item.tags && (
        <div className="mt-5 flex flex-wrap gap-1.5">
          {item.tags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      )}

      <a
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-7 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 font-mono text-[13px] text-primary-foreground transition hover:opacity-90"
      >
        Read full article <ExternalLink size={14} />
      </a>

      {(prev || next) && (
        <div className="mt-10 flex flex-wrap justify-between gap-4 border-t border-border pt-6 font-mono text-[13px]">
          {prev ? (
            <Link to={`/featured/${prev.slug}`} className="text-primary hover:underline">
              ← previous mention
            </Link>
          ) : (
            <span />
          )}
          {next && (
            <Link to={`/featured/${next.slug}`} className="text-primary hover:underline">
              next mention →
            </Link>
          )}
        </div>
      )}
    </DetailShell>
  )
}