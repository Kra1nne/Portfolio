import React from 'react'

export function FileTab({ children }) {
  return (
    <span className="inline-flex items-center gap-2 -mb-px rounded-t-lg border border-b-0 border-border bg-card px-3.5 py-1.5 font-mono text-[13px] text-muted-foreground">
      <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/40" />
      {children}
    </span>
  )
}

export function SectionPanel({ children, className = '' }) {
  const base = 'rounded-b-2xl rounded-tr-2xl border border-border bg-card p-8 sm:p-11'
  return <div className={base + ' ' + className}>{children}</div>
}

export function Tag({ children }) {
  return (
    <span className="rounded-md bg-muted px-2.5 py-1 font-mono text-[11px] text-muted-foreground">
      {children}
    </span>
  )
}