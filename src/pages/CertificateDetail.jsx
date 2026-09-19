import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { DetailShell } from '../components/ui/detail-shell'
import { certificates, findCertificate } from '../data/content'
import NotFound from './NotFound'

export default function CertificateDetail() {
  const { slug } = useParams()
  const cert = findCertificate(slug)

  if (!cert) return <NotFound what="certificate" backTo="/#certificate" />

  const i = certificates.indexOf(cert)
  const prev = certificates[i - 1]
  const next = certificates[i + 1]

  return (
    <DetailShell
      tab={`certificate/${cert.slug}${cert.ext}`}
      breadcrumb={`~/rc / certificate / ${cert.slug}`}
      backTo="/#certificate"
      backLabel="all credentials"
      title={cert.title}
    >
      <div className="mb-3 flex items-center justify-between">
        <span className="rounded-md border border-border bg-background px-2 py-0.5 font-mono text-[11px] text-primary">
          {cert.ext}
        </span>
        <span className="font-mono text-[11px] text-muted-foreground/70">{cert.date}</span>
      </div>

      <h1 className="mb-1.5 font-sans text-2xl font-semibold sm:text-3xl">{cert.title}</h1>
      <p className="mb-8 text-[14.5px] text-muted-foreground">{cert.issuer}</p>

      <div className="flex items-center justify-center rounded-xl bg-muted p-4 sm:p-8">
        <img
          src={cert.image}
          alt={cert.title}
          className="max-h-[70vh] w-full rounded-lg object-contain"
        />
      </div>

      <div className="mt-6">
        <a
          href={cert.image}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-[13px] text-primary hover:underline"
        >
          Open full-size image
        </a>
      </div>

      {(prev || next) && (
        <div className="mt-10 flex flex-wrap justify-between gap-4 border-t border-border pt-6 font-mono text-[13px]">
          {prev ? (
            <Link to={`/certificate/${prev.slug}`} className="text-primary hover:underline">
              ← {prev.title}
            </Link>
          ) : (
            <span />
          )}
          {next && (
            <Link to={`/certificate/${next.slug}`} className="text-primary hover:underline">
              {next.title} →
            </Link>
          )}
        </div>
      )}
    </DetailShell>
  )
}