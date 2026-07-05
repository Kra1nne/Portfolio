import React, { useState, useEffect, useRef } from 'react'
import ThemeToggle from '../src/components/theme/toggle'

const navItems = [
  { label: 'about', id: 'about' },
  { label: 'work', id: 'work' },
  { label: 'skills', id: 'skills' },
  { label: 'contact', id: 'contact' },
  { label: 'certificate', id: 'certificate' },
]
const certificates = [
  {
    title: '[Certificate Name]',
    issuer: '[Issuing Organization]',
    date: '[Month Year]',
    ext: '.cert',
    href: '#',
  },
  {
    title: '[Certificate Name]',
    issuer: '[Issuing Organization]',
    date: '[Month Year]',
    ext: '.cert',
    href: '#',
  },
  {
    title: '[Certificate Name]',
    issuer: '[Issuing Organization]',
    date: '[Month Year]',
    ext: '.cert',
    href: '#',
  },
]
const projects = [
  {
    ext: '.web',
    title: 'SoilSnap',
    desc: 'An AI-powered soil classification system that identifies soil types from images, helping farmers and researchers analyze soil conditions quickly and accurately.',
    tags: ['Laravel', 'React', 'Python', 'TensorFlow', 'MySQL'],
  },
  {
    ext: '.web',
    title: 'Municipal Assessor System',
    desc: 'A GIS-enabled property assessment and land records management system with parcel mapping, report generation, and automated tax assessment workflows for local government.',
    tags: ['Laravel', 'Leaflet', 'QGIS', 'MySQL', 'JavaScript'],
  },
  {
    ext: '.web',
    title: 'Resort Management and Reservation',
    desc: 'A business management platform designed to streamline daily operations through centralized data management, workflow automation, and reporting.',
    tags: ['Laravel', 'React', 'MySQL', 'REST API'],
  },
  {
    ext: '.web',
    title: 'Human Resource Information System (HRIS)',
    desc: 'A web-based HR management system that automates employee records, attendance, leave requests, payroll-related processes, and administrative reporting.',
    tags: ['Laravel', 'React', 'MySQL', 'Tailwind CSS'],
  },
];

const skillGroups = [
  {
    title: 'Programming Languages',
    tags: [
      'JavaScript',
      'TypeScript',
      'PHP',
      'Python',
      'Java',
      'C#',
      'C',
      'Javascript'
    ],
  },
  {
    title: 'Frameworks',
    tags: [
      'React',
      'React Native',
      'Laravel',
      'Node.js',
      'Tailwind CSS',
      'Bootstrap',
    ],
  },
  {
    title: 'Databases & Data Management',
    tags: [
      'MySQL',
      'MongoDB',
      'Data Warehousing',
      'Database Design',
      'Data Modeling',
      'SQL',
    ],
  },
  {
    title: 'GIS & Mapping',
    tags: [
      'Leaflet.js',
      'QGIS',
      'GeoJSON',
      'Interactive Maps',
      'Parcel Mapping',
    ],
  },
  {
    title: 'Tools & Platforms',
    tags: [
      'Git',
      'GitHub',
      'VS Code',
      'Postman',
      'MySQL Workbench',
      'XAMPP',
      'RoboFlow',
      'FileZilla',
    ],
  },
  {
    title: 'Concepts & Technologies',
    tags: [
      'REST API',
      'Responsive Design',
      'MVC Architecture',
      'CI/CD',
      'SDLC'
    ],
  },
];

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

function FileTab({ children }) {
  return (
    <span className="inline-flex items-center gap-2 -mb-px rounded-t-lg border border-b-0 border-border bg-card px-3.5 py-1.5 font-mono text-[13px] text-muted-foreground">
      <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/40" />
      {children}
    </span>
  )
}

function SectionPanel({ children, className = '' }) {
  const base = 'rounded-b-2xl rounded-tr-2xl border border-border bg-card p-8 sm:p-11'
  return <div className={base + ' ' + className}>{children}</div>
}

function Tag({ children }) {
  return (
    <span className="rounded-md bg-muted px-2.5 py-1 font-mono text-[11px] text-muted-foreground">
      {children}
    </span>
  )
}

function NavLink({ label, id, onClick, mobile }) {
  const href = '#' + id
  if (mobile) {
    return (
      <a href={href} className="py-2 font-mono text-[13px] text-muted-foreground" onClick={onClick}>
        {label}
      </a>
    )
  }
  return (
    
     <a href={href}
      className="rounded-t-md px-3.5 py-2 font-mono text-[13px] text-muted-foreground hover:bg-muted hover:text-foreground"
    >
      {label}
    </a>
  )
}

const App = () => {
  const [navOpen, setNavOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  const [aboutRef, aboutVisible] = useReveal()
  const [workRef, workVisible] = useReveal()
  const [skillsRef, skillsVisible] = useReveal()
  const [contactRef, contactVisible] = useReveal()
  const [certificateRef, certificateVisible] = useReveal()

  const revealClass = (visible) => {
    const base = 'transition-all duration-700 ease-out'
    const state = visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
    return base + ' ' + state
  }

  const copyEmail = () => {
    navigator.clipboard.writeText('[email protected]')
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-border bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-5 px-6 py-3.5">
          <div className="flex items-center gap-2.5 font-mono text-sm text-muted-foreground">
            <span className="flex gap-1.5">
              <span className="h-2 w-2 rounded-full bg-destructive/70" />
              <span className="h-2 w-2 rounded-full bg-chart-1/70" />
              <span className="h-2 w-2 rounded-full bg-chart-2/60" />
            </span>
            <span className="font-medium text-foreground">~/rc</span>
          </div>

          <nav className="hidden gap-1 sm:flex" aria-label="Section navigation">
            {navItems.map((item) => (
              <NavLink key={item.id} label={item.label} id={item.id} />
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle></ThemeToggle>
            <a  href="#"
              className="hidden rounded-lg bg-primary px-4 py-2 font-mono text-[13px] text-primary-foreground hover:opacity-90 sm:inline-block"
            >
              resume
            </a>
            <button
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-border font-mono sm:hidden"
              onClick={() => setNavOpen((v) => !v)}
              aria-label="Toggle navigation"
            >
              ☰
            </button>
          </div>
        </div>

        {navOpen && (
          <nav className="flex flex-col border-t border-border px-6 py-3 sm:hidden">
            {navItems.map((item) => (
              <NavLink
                key={item.id}
                label={item.label}
                id={item.id}
                mobile
                onClick={() => setNavOpen(false)}
              />
            ))}
          </nav>
        )}
      </header>

      <main className="mx-auto max-w-5xl px-6">
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
              Hi, I'm Ryan Cabarrubias
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

        {/* PROJECTS */}
        <section id="work" ref={workRef} className={'border-border py-16 sm:py-24 ' + revealClass(workVisible)}>
          <FileTab>work/</FileTab>
          <SectionPanel>
            <span className="mb-2.5 block font-mono text-xs uppercase tracking-wider text-primary">02 · Selected work</span>
            <h2 className="mb-6 font-sans text-2xl font-semibold sm:text-3xl">Recent projects</h2>
            <div className="grid gap-5 sm:grid-cols-2">
              {projects.map((p, i) => (
                <div
                  key={i}
                  className="flex flex-col overflow-hidden rounded-xl border border-border bg-background transition hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <div className="flex h-[130px] items-end bg-gradient-to-br from-primary/10 to-muted p-4">
                    <span className="rounded-md border border-border bg-card px-2 py-0.5 font-mono text-[11px] text-primary">
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
                      <a href="http://" className="font-mono text-[12.5px] text-primary hover:underline">View Details</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </SectionPanel>
        </section>

        {/* SKILLS */}
        <section id="skills" ref={skillsRef} className={'border-border py-16 sm:py-24 ' + revealClass(skillsVisible)}>
          <FileTab>skills.json</FileTab>
          <SectionPanel>
            <span className="mb-2.5 block font-mono text-xs uppercase tracking-wider text-primary">03 · Toolkit</span>
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
      <section id="certificate" ref={certificateRef} className={'border-b border-border py-16 sm:py-24 ' + revealClass(certificateVisible)}>
        <FileTab>certificate/</FileTab>
        <SectionPanel>
          <span className="mb-2.5 block font-mono text-xs uppercase tracking-wider text-primary">05 · Credentials</span>
          <h2 className="mb-6 font-sans text-2xl font-semibold sm:text-3xl">Certificates &amp; awards</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {certificates.map((c, i) => (
              <a
                key={i}
                href={c.href}
                className="flex flex-col gap-3 rounded-xl border border-border bg-background p-5 transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <span className="rounded-md border border-border bg-card px-2 py-0.5 font-mono text-[11px] text-primary">
                    {c.ext}
                  </span>
                  <span className="font-mono text-[11px] text-muted-foreground/70">{c.date}</span>
                </div>
                <h3 className="font-sans text-[16px] font-semibold leading-snug">{c.title}</h3>
                <p className="text-[13px] text-muted-foreground">{c.issuer}</p>
                <span className="mt-auto font-mono text-[12px] text-primary hover:underline">View credential ↗</span>
              </a>
            ))}
          </div>
        </SectionPanel>
      </section>

        {/* CONTACT */}
        <section id="contact" ref={contactRef} className={'py-16 sm:py-24 ' + revealClass(contactVisible)}>
          <FileTab>contact.sh</FileTab>
          <SectionPanel>
            <span className="mb-2.5 block font-mono text-xs uppercase tracking-wider text-primary">06· Contact</span>
            <h2 className="mb-6 font-sans text-2xl font-semibold sm:text-3xl">Let's build something</h2>

            <div className="space-y-2 rounded-xl  bg-background p-2 font-mono text-[13.5px] leading-loose text-background/80">
              <div className='text-chart-2'><span >$</span> whoami</div>
              <div className="text-chart-2">&gt; Ryan P. Cabarrubias — available for freelance &amp; full-time work</div>
              <div className='text-chart-2'><span>$</span> contact --email</div>
              <div className="text-chart-2">&gt; <span className="text-chart-2">cabarrubias1002@gmail.com</span></div>
              <div className='text-chart-2'><span>$</span> contact --socials</div>
              <div className="text-chart-2">&gt; <span className="text-chart-2">github.com/Kra1nne</span> · <span className="text-chart-2">linkedin.com/in/ryan-cabarrubias-956952253/</span></div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3.5">
              <a href="mailto:[email protected]" className="rounded-lg bg-primary px-5.5 py-3 font-mono text-[13.5px] text-primary-foreground hover:opacity-90">
                Send an email
              </a>
              <button onClick={copyEmail} className="rounded-lg border border-border px-5.5 py-3 font-mono text-[13.5px] hover:bg-muted">
                {copied ? 'Copied ✓' : 'Copy email'}
              </button>
            </div>
          </SectionPanel>
        </section>
      </main>

      <footer className="mx-auto max-w-5xl px-6 py-10">
        <div className="flex flex-wrap items-center justify-between gap-3 border-border pt-6">
          <p className="font-mono text-[12.5px] text-muted-foreground/70">
            © {new Date().getFullYear()} Ryan. Built with care.
          </p>
          <div className="flex gap-4.5 font-mono text-[12.5px] text-muted-foreground">
            <a href="https://github.com/Kra1nne" className="hover:text-primary">GitHub</a>
            <a href="https://www.linkedin.com/in/ryan-cabarrubias-956952253/" className="hover:text-primary">LinkedIn</a>
            <a href="#hero" className="hover:text-primary">Back to top ↑</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App