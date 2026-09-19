import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound({ what = 'page', backTo = '/' }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-background px-6 text-center font-sans text-foreground">
      <span className="font-mono text-[13px] text-muted-foreground">404</span>
      <h1 className="font-sans text-2xl font-semibold">That {what} isn’t here</h1>
      <p className="max-w-sm text-[14.5px] text-muted-foreground">
        The link may be out of date, or the entry was renamed.
      </p>
      <Link
        to={backTo}
        className="mt-2 rounded-lg bg-primary px-5 py-2.5 font-mono text-[13px] text-primary-foreground hover:opacity-90"
      >
        Go back
      </Link>
    </div>
  )
}