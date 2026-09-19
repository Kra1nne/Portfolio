import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import ThemeToggle from '../theme/toggle'
import { FileTab, SectionPanel } from './header'

// Scrolls to the top whenever a detail page mounts.
export function useScrollTop() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
}

/**
 * DetailShell — the frame every detail page shares.
 * `backTo` is the home-page anchor to return to (e.g. '/#work').
 */
export function DetailShell({ tab, breadcrumb, backTo, backLabel, title, children }) {
  useScrollTop()

  useEffect(() => {
    if (title) document.title = title + ' · ~/rc'
    return () => {
      document.title = 'Ryan P. Cabarrubias'
    }
  }, [title])

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <header className="sticky top-0 z-50 border-border bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-5 px-6 py-3.5">
          <Link to="/" className="flex items-center gap-2.5 font-mono text-sm text-muted-foreground">
            <span className="flex gap-1.5">
              <span className="h-2 w-2 rounded-full bg-destructive/70" />
              <span className="h-2 w-2 rounded-full bg-chart-1/70" />
              <span className="h-2 w-2 rounded-full bg-chart-2/60" />
            </span>
            <span className="font-medium text-foreground">~/rc</span>
          </Link>

          <span className="hidden truncate font-mono text-[12.5px] text-muted-foreground/70 sm:block">
            {breadcrumb.length > 30 ? `${breadcrumb.slice(0, 27)}...` : breadcrumb}
          </span>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Link
              to={backTo}
              className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 font-mono text-[13px] hover:bg-muted"
            >
              <ArrowLeft size={14} />
              {backLabel}
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-12 sm:py-16">
        <FileTab>{tab}</FileTab>
        <SectionPanel>{children}</SectionPanel>

        <div className="mt-8">
          <Link to={backTo} className="font-mono text-[13px] text-primary hover:underline">
            ← {backLabel}
          </Link>
        </div>
      </main>
    </div>
  )
}

/** Carousel, moved out of the old project modal. */
export function ImageCarousel({ images, alt }) {
  const [index, setIndex] = useState(0)
  const touchStartX = useRef(null)
  const touchDeltaX = useRef(0)

  useEffect(() => {
    setIndex(0)
  }, [images])

  const go = (dir) => {
    setIndex((i) => {
      const next = i + dir
      if (next < 0) return images.length - 1
      if (next >= images.length) return 0
      return next
    })
  }

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
    touchDeltaX.current = 0
  }
  const onTouchMove = (e) => {
    if (touchStartX.current == null) return
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current
  }
  const onTouchEnd = () => {
    const threshold = 40
    if (touchDeltaX.current > threshold) go(-1)
    else if (touchDeltaX.current < -threshold) go(1)
    touchStartX.current = null
    touchDeltaX.current = 0
  }

  if (!images || images.length === 0) return null

  return (
    <div className="relative overflow-hidden rounded-xl bg-muted">
      <div
        className="flex touch-pan-y overflow-hidden"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="flex w-full transition-transform duration-300 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={alt + ' screenshot ' + (i + 1)}
              className="h-72 w-full flex-shrink-0 object-contain p-6 sm:h-[420px]"
              draggable={false}
            />
          ))}
        </div>
      </div>

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={() => go(-1)}
            className="absolute left-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-background/80 text-foreground shadow transition hover:bg-background"
            aria-label="Previous image"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-background/80 text-foreground shadow transition hover:bg-background"
            aria-label="Next image"
          >
            ›
          </button>

          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={'Go to image ' + (i + 1)}
                className={
                  'h-1.5 rounded-full transition-all ' +
                  (i === index ? 'w-5 bg-primary' : 'w-1.5 bg-background/70')
                }
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}