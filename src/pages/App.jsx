import React, { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import ThemeToggle from '../components/theme/toggle'
import Resume from '../assets/docs/Ryan_Cabarrubias-Resume.pdf'
import { ChevronDown, Newspaper } from 'lucide-react'

import { FileTab, SectionPanel, Tag } from '../components/ui/header'
import {
  navItems,
  projects,
  certificates,
  features,
  experience,
  skillGroups,
} from '../data/content'

// ---------- How many cards show before "see more" ----------
const PROJECTS_DEFAULT = 2
const CERTIFICATES_DEFAULT = 3
const FEATURES_DEFAULT = 2

function useReveal() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          io.unobserve(el)
        }
      },
      { threshold: 0.12 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return [ref, visible]
}

// ---------- SEE MORE / SEE LESS TOGGLE ----------
function SeeMoreButton({ expanded, onClick, hiddenCount }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="mb-2.5 flex items-center gap-1 font-mono text-[13px] text-primary transition hover:underline"
      aria-expanded={expanded}
    >
      {expanded ? 'see less' : `see more${hiddenCount ? ` (${hiddenCount})` : ''}`}
      <ChevronDown
        size={14}
        className={'transition-transform duration-300 ' + (expanded ? 'rotate-180' : '')}
      />
    </button>
  )
}

function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    )

    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [ids])

  return active
}

// Returning from a detail page lands on /#work, /#certificate, etc.
// This scrolls to that section once the home page has rendered.
function useHashScroll() {
  const { hash } = useLocation()
  useEffect(() => {
    if (!hash) return
    const el = document.getElementById(hash.slice(1))
    if (el) {
      requestAnimationFrame(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }))
    }
  }, [hash])
}

function NavLink({ label, id, onClick, mobile, active }) {
  const href = '#' + id
  const base = 'font-mono text-[13px] transition-colors'
  const state = active ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'

  if (mobile) {
    return (
      <a href={href} className={'relative py-2 ' + base + ' ' + state} onClick={onClick}>
        {active && <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-primary align-middle" />}
        {label}
      </a>
    )
  }

  return (
    <a
      href={href}
      className={'relative rounded-t-md px-3 py-2 hover:bg-muted ' + base + ' ' + state}
    >
      {label}
      <span
        className={
          'absolute inset-x-3 -bottom-px h-[2px] rounded-full bg-primary transition-all duration-300 ' +
          (active ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-50')
        }
      />
    </a>
  )
}

const App = () => {
  const [navOpen, setNavOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  // ---------- see more / see less state ----------
  const [showAllProjects, setShowAllProjects] = useState(false)
  const [showAllCertificates, setShowAllCertificates] = useState(false)
  const [showAllFeatures, setShowAllFeatures] = useState(false)

  const visibleProjects = showAllProjects ? projects : projects.slice(0, PROJECTS_DEFAULT)
  const visibleCertificates = showAllCertificates
    ? certificates
    : certificates.slice(0, CERTIFICATES_DEFAULT)
  const visibleFeatures = showAllFeatures ? features : features.slice(0, FEATURES_DEFAULT)

  const [aboutRef, aboutVisible] = useReveal()
  const [workRef, workVisible] = useReveal()
  const [skillsRef, skillsVisible] = useReveal()
  const [contactRef, contactVisible] = useReveal()
  const [certificateRef, certificateVisible] = useReveal()
  const [experienceRef, experienceVisible] = useReveal()
  const [featuredRef, featuredVisible] = useReveal()
  const activeSection = useActiveSection(navItems.map((item) => item.id))

  useHashScroll()

  const revealClass = (visible) => {
    const base = 'transition-all duration-700 ease-out'
    const state = visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
    return base + ' ' + state
  }

  const copyEmail = () => {
    navigator.clipboard.writeText('cabarrubias1002@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-border bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-6 py-3.5">
          <div className="flex items-center gap-2.5 font-mono text-sm text-muted-foreground">
            <span className="flex gap-1.5">
              <span className="h-2 w-2 rounded-full bg-destructive/70" />
              <span className="h-2 w-2 rounded-full bg-chart-1/70" />
              <span className="h-2 w-2 rounded-full bg-chart-2/60" />
            </span>
            <span className="font-medium text-foreground">~/rc</span>
          </div>

          <nav className="hidden gap-1 lg:flex" aria-label="Section navigation">
            {navItems.map((item) => (
              <NavLink key={item.id} label={item.label} id={item.id} active={item.id === activeSection} />
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle></ThemeToggle>

            <a
              href={Resume}
              download="Cabarrubias, Ryan.pdf"
              className="hidden rounded-lg bg-primary px-4 py-2 font-mono text-[13px] text-primary-foreground hover:opacity-90 sm:inline-block"
            >
              resume
            </a>
            <button
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-border font-mono lg:hidden"
              onClick={() => setNavOpen((v) => !v)}
              aria-label="Toggle navigation"
            >
              ☰
            </button>
          </div>
        </div>

        {navOpen && (
          <nav className="flex flex-col border-t border-border px-6 py-3 lg:hidden">
            {navItems.map((item) => (
              <NavLink
                key={item.id}
                label={item.label}
                id={item.id}
                mobile
                active={item.id === activeSection}
                onClick={() => setNavOpen(false)}
              />
            ))}
          </nav>
        )}
      </header>

      <main className="mx-auto flex max-w-5xl flex-col items-stretch px-6">
        {/* HERO */}
        <section id="hero" className="border-border py-16 sm:py-24">
          <FileTab>hero.js</FileTab>
          <SectionPanel>
            <div className="mb-8 flex flex-col gap-1 font-mono text-[14.5px] text-muted-foreground">
              <div className="flex gap-4"><span className="w-5 text-right text-muted-foreground/50">01</span><span><span className="text-primary">const</span> developer = {'{'}</span></div>
              <div className="flex gap-4"><span className="w-5 text-right text-muted-foreground/50">02</span><span>&nbsp;&nbsp;name: <span className="text-chart-2">"Ryan P. Cabarrubias"</span>,</span></div>
              <div className="flex gap-4"><span className="w-5 text-right text-muted-foreground/50">03</span><span>&nbsp;&nbsp;role: <span className="text-chart-2">"Web & Mobile Developer"</span>,</span></div>
              <div className="flex gap-4"><span className="w-5 text-right text-muted-foreground/50">04</span><span>&nbsp;&nbsp;availability: <span className="text-chart-2">"Open to Opportunities"</span></span></div>
              <div className="flex gap-4"><span className="w-5 text-right text-muted-foreground/50">05</span><span>{'}'};</span></div>
            </div>

            <h1 className="mb-2.5 font-sans text-4xl font-bold leading-tight sm:text-6xl">
              Hi, I'm Ryan P. Cabarrubias
              <span className="ml-1 inline-block h-[1em] w-0.5 animate-pulse bg-primary align-[-0.15em]" />
            </h1>
            <p className="mb-7 max-w-xl text-base text-muted-foreground sm:text-lg">
              I build fast, reliable web and mobile products end to end — from interface to API. Currently open for freelance work and full-time roles.
            </p>

            <div className="flex flex-wrap gap-3.5">
              <a href="#work" className="rounded-lg bg-primary px-5.5 py-3 font-mono text-[13.5px] text-primary-foreground hover:opacity-90">
                View my work
              </a>
              <a href="#contact" className="rounded-lg border border-border px-5.5 py-3 font-mono text-[13.5px] hover:bg-muted">
                Get in touch
              </a>
            </div>
          </SectionPanel>
        </section>

        {/* ABOUT */}
        <section id="about" ref={aboutRef} className={'border-border py-16 sm:py-24 ' + revealClass(aboutVisible)}>
          <FileTab>about.md</FileTab>
          <SectionPanel>
            <span className="mb-2.5 block font-mono text-xs uppercase tracking-wider text-primary">01 · About</span>
            <h2 className="mb-6 font-sans text-2xl font-semibold sm:text-3xl">A little about me</h2>
            <div className="grid gap-10 sm:grid-cols-[1.3fr_1fr]">
              <div className="space-y-4 text-[15.5px] text-muted-foreground">
                <p className='text-justify'>My journey into software development began with a curiosity about how websites and applications are built, which eventually grew into a passion for creating digital solutions that solve real-world problems. I enjoy developing web applications, automating processes, and building systems that improve efficiency, with a particular interest in full-stack development and artificial intelligence.</p>
                <p className='text-justify'>I approach every project with a focus on understanding the client's goals, writing clean and maintainable code, and delivering reliable, user-friendly solutions. Whether working independently or as part of a team, I value clear communication, continuous learning, and collaboration to ensure every project is completed successfully.</p>
              </div>
              <ul className="flex flex-col gap-3.5">
                {[
                  ['location', 'Butuan, Philippines'],
                  ['education', 'BS Information Technology'],
                  ['award', 'Cum Laude'],
                  ['focus', 'Web & Mobile Apps'],
                  ['availability', null],
                ].map((pair) => {
                  const k = pair[0]
                  const v = pair[1]
                  return (
                    <li key={k} className="flex justify-between border-dashed border-border pb-3 text-sm">
                      <span className="font-mono text-muted-foreground/70">{k}</span>
                      <span className="text-right font-medium">
                        {v ?? (
                          <>
                            <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-chart-1" />
                            Open to work
                          </>
                        )}
                      </span>
                    </li>
                  )
                })}
              </ul>
            </div>
          </SectionPanel>
        </section>

        {/* FEATURED */}
        <section id="featured" ref={featuredRef} className={'border-border py-16 sm:py-24 ' + revealClass(featuredVisible)}>
          <FileTab>featured.md</FileTab>
          <SectionPanel>
            <div className="flex items-center justify-between">
              <span className="mb-2.5 block font-mono text-xs uppercase tracking-wider text-primary">06 · Featured</span>
              {features.length > FEATURES_DEFAULT && (
                <SeeMoreButton
                  expanded={showAllFeatures}
                  hiddenCount={features.length - FEATURES_DEFAULT}
                  onClick={() => setShowAllFeatures((v) => !v)}
                />
              )}
            </div>
            <h2 className="mb-2 font-sans text-2xl font-semibold sm:text-3xl">In the news</h2>
            <p className="mb-6 text-[14.5px] text-muted-foreground">
              Articles and announcements that mention my work, research, or the teams I've been part of.
            </p>

            <div className="grid gap-5 sm:grid-cols-2">
              {visibleFeatures.map((f) => (
                <Link
                  key={f.slug}
                  to={`/featured/${f.slug}`}
                  className="group flex flex-col overflow-hidden rounded-xl border border-border bg-background text-left transition hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <div className="relative h-[150px] overflow-hidden bg-muted">
                    {f.image ? (
                      <img
                        src={f.image}
                        alt={f.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none'
                        }}
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center">
                        <Newspaper size={28} className="text-muted-foreground/40" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    <span className="absolute bottom-3 left-3 rounded-md border border-border bg-card/90 px-2 py-0.5 font-mono text-[11px] text-primary backdrop-blur-sm">
                      {f.ext}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col gap-2.5 p-5">
                    <div className="flex items-center justify-between gap-3">
                      <span className="truncate font-mono text-[11px] text-muted-foreground/70">
                        {f.outlet}
                      </span>
                      <span className="flex-shrink-0 font-mono text-[11px] text-muted-foreground/70">
                        {f.date}
                      </span>
                    </div>

                    <h3 className="font-sans text-[16px] font-semibold leading-snug">{f.title}</h3>

                    {f.role && <p className="font-mono text-[12px] text-primary/90">{f.role}</p>}

                    <p className="flex-1 line-clamp-3 text-[13.5px] text-muted-foreground">{f.desc}</p>

                    {f.tags && (
                      <div className="flex flex-wrap gap-1.5">
                        {f.tags.map((t) => <Tag key={t}>{t}</Tag>)}
                      </div>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </SectionPanel>
        </section>

        {/* PROJECTS */}
        <section id="work" ref={workRef} className={'border-border py-16 sm:py-24 ' + revealClass(workVisible)}>
          <FileTab>work/</FileTab>
          <SectionPanel>
            <div className="flex items-center justify-between">
              <span className="mb-2.5 block font-mono text-xs uppercase tracking-wider text-primary">02 · Selected work</span>
              {projects.length > PROJECTS_DEFAULT && (
                <SeeMoreButton
                  expanded={showAllProjects}
                  hiddenCount={projects.length - PROJECTS_DEFAULT}
                  onClick={() => setShowAllProjects((v) => !v)}
                />
              )}
            </div>
            <h2 className="mb-6 font-sans text-2xl font-semibold sm:text-3xl">Recent projects</h2>
            <div className="grid gap-5 sm:grid-cols-2">
              {visibleProjects.map((p) => (
                <Link
                  key={p.slug}
                  to={`/work/${p.slug}`}
                  className="flex flex-col overflow-hidden rounded-xl border border-border bg-background text-left transition hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <div className="relative h-[150px] overflow-hidden">
                    <img src={p.images?.[0]} alt={p.title} className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    <span className="absolute bottom-3 left-3 rounded-md border border-border bg-card/90 px-2 py-0.5 font-mono text-[11px] text-primary backdrop-blur-sm">
                      {p.ext}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col gap-2.5 p-5">
                    <h3 className="font-sans text-[17px] font-semibold">{p.title}</h3>
                    <p className="flex-1 text-[13.5px] text-muted-foreground">{p.desc}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {p.tags.map((t) => <Tag key={t}>{t}</Tag>)}
                    </div>
                    <div className="mt-1 flex gap-3.5">
                      <span className="font-mono text-[12.5px] text-primary hover:underline">View Details</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </SectionPanel>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" ref={experienceRef} className={'border-border py-16 sm:py-24 ' + revealClass(experienceVisible)}>
          <FileTab>experience.log</FileTab>
          <SectionPanel>
            <span className="mb-2.5 block font-mono text-xs uppercase tracking-wider text-primary">03 · Experience</span>
            <h2 className="mb-8 font-sans text-2xl font-semibold sm:text-3xl">Where I've worked</h2>

            <div className="relative space-y-10 border-l border-border pl-7 sm:pl-9">
              {experience.map((e, i) => (
                <div key={i} className="relative">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="font-sans text-[16.5px] font-semibold">{e.role}</h3>
                    <span className="font-mono text-[12px] text-muted-foreground/70">{e.period}</span>
                  </div>

                  <p className="mb-2.5 text-[13.5px] text-muted-foreground">
                    {e.company}{e.location ? ' · ' + e.location : ''}
                  </p>

                  {e.stack && (
                    <div className="mb-3 flex flex-wrap gap-1.5">
                      {e.stack.map((t) => <Tag key={t}>{t}</Tag>)}
                    </div>
                  )}

                  <ul className="space-y-1.5">
                    {e.points.map((pt, j) => (
                      <li key={j} className="flex gap-2 text-[13.5px] text-muted-foreground">
                        <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-primary/60" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </SectionPanel>
        </section>

        {/* SKILLS */}
        <section id="skills" ref={skillsRef} className={'border-border py-16 sm:py-24 ' + revealClass(skillsVisible)}>
          <FileTab>skills.json</FileTab>
          <SectionPanel>
            <span className="mb-2.5 block font-mono text-xs uppercase tracking-wider text-primary">04 · Toolkit</span>
            <h2 className="mb-6 font-sans text-2xl font-semibold sm:text-3xl">Skills &amp; tools</h2>
            <div className="grid gap-5 sm:grid-cols-3">
              {skillGroups.map((g) => (
                <div key={g.title} className="rounded-xl border border-border bg-background p-5">
                  <h3 className="mb-3.5 font-mono text-[12.5px] uppercase tracking-wide text-muted-foreground/70">
                    {g.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {g.tags.map((t) => (
                      <span key={t} className="rounded-md border border-border bg-card px-2.5 py-1 font-mono text-[11px] text-muted-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </SectionPanel>
        </section>

        {/* CERTIFICATES */}
        <section id="certificate" ref={certificateRef} className={'border-border py-16 sm:py-24 ' + revealClass(certificateVisible)}>
          <FileTab>certificate/</FileTab>
          <SectionPanel>
            <div className="flex items-center justify-between">
              <span className="mb-2.5 block font-mono text-xs uppercase tracking-wider text-primary">05 · Credentials</span>
              {certificates.length > CERTIFICATES_DEFAULT && (
                <SeeMoreButton
                  expanded={showAllCertificates}
                  hiddenCount={certificates.length - CERTIFICATES_DEFAULT}
                  onClick={() => setShowAllCertificates((v) => !v)}
                />
              )}
            </div>
            <h2 className="mb-6 font-sans text-2xl font-semibold sm:text-3xl">Certificates &amp; awards</h2>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {visibleCertificates.map((c) => (
                <Link
                  key={c.slug}
                  to={`/certificate/${c.slug}`}
                  className="flex flex-col gap-3 rounded-xl border border-border bg-background p-5 text-left transition hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <div className="relative h-[150px] overflow-hidden">
                    <img src={c.image} alt={c.title} className="h-full w-full object-cover" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="rounded-md border border-border bg-card px-2 py-0.5 font-mono text-[11px] text-primary">
                      {c.ext}
                    </span>
                    <span className="font-mono text-[11px] text-muted-foreground/70">{c.date}</span>
                  </div>
                  <h3 className="font-sans text-[16px] font-semibold leading-snug">{c.title}</h3>
                  <p className="text-[13px] text-muted-foreground">{c.issuer}</p>
                  <span className="mt-auto font-mono text-[12px] text-primary hover:underline">View credential</span>
                </Link>
              ))}
            </div>
          </SectionPanel>
        </section>

        {/* CONTACT */}
        <section id="contact" ref={contactRef} className={'py-16 sm:py-24 w-full ' + revealClass(contactVisible)}>
          <FileTab>contact.sh</FileTab>
          <SectionPanel>
            <span className="mb-2.5 block font-mono text-xs uppercase tracking-wider text-primary">07 · Contact</span>
            <h2 className="mb-6 font-sans text-2xl font-semibold sm:text-3xl">Let's build something</h2>

            <div className="space-y-2 rounded-xl bg-background p-2 font-mono text-[13.5px] leading-loose text-background/80">
              <div className='text-chart-2'><span>$</span> whoami</div>
              <div className="text-chart-2">&gt; Ryan P. Cabarrubias — available for freelance &amp; full-time work</div>
              <div className='text-chart-2'><span>$</span> contact --email</div>
              <div className="text-chart-2">&gt; <span className="text-chart-2">cabarrubias1002@gmail.com</span></div>
              <div className='text-chart-2'><span>$</span> contact --socials</div>
              <div className="text-chart-2">&gt; <span className="text-chart-2">github.com/Kra1nne</span> · <span className="text-chart-2">linkedin.com/in/ryan-cabarrubias-956952253/</span></div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3.5">
              <a href="mailto:cabarrubias1002@gmail.com" className="rounded-lg bg-primary px-5.5 py-3 font-mono text-[13.5px] text-primary-foreground hover:opacity-90">
                Send an email
              </a>
              <button onClick={copyEmail} className="rounded-lg border border-border px-5.5 py-3 font-mono text-[13.5px] hover:bg-muted">
                {copied ? 'Copied ✓' : 'Copy email'}
              </button>
            </div>
          </SectionPanel>
        </section>
      </main>

      <footer className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-wrap items-center justify-between gap-3 border-border pt-6">
          <p className="font-mono text-[12.5px] text-muted-foreground/70">
            © {new Date().getFullYear()} Ryan. Built with care.
          </p>
          <div className="flex gap-4.5 font-mono text-[12.5px] text-muted-foreground">
            <a href="https://github.com/Kra1nne" className="hover:text-primary">GitHub</a>
            <a href="https://www.linkedin.com/in/ryan-cabarrubias-956952253/" className="hover:text-primary">LinkedIn</a>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-4 right-4 z-50 hidden lg:block">
        <a
          href="#hero"
          className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-primary/90"
          aria-label="Back to top"
        >
          ↑
        </a>
      </div>
    </div>
  )
}

export default App