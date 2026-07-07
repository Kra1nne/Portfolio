import React, { useState, useEffect, useRef } from 'react'
import ThemeToggle from '../src/components/theme/toggle'
import Resume from '../src/assets/docs/Ryan_Cabarrubias-Resume.pdf'

// ---------- Certificate images ----------
import certProgrammingV2 from '../src/assets/certificate/Programming_v2.jpg'
import certEvco from '../src/assets/certificate/EVCO.jpg'
import certProgrammingV1 from '../src/assets/certificate/Programming_v1.jpg'
import certEvcoRecognition from '../src/assets/certificate/Evco_Recognation.jpg'
import certCodeChum from '../src/assets/certificate/CodeChum.png'
import certHack4GovV2 from '../src/assets/certificate/Hack4Gov_v2.jpg'
import certHack4GovV1 from '../src/assets/certificate/Hack4Gov_v1.jpg'
import certStartUp from '../src/assets/certificate/StartUp.jpg'

// ---------- Project images: SoilSnap ----------
import soilSnap0 from '../src/assets/project/SS_v0.png'
import soilSnap1 from '../src/assets/project/SS_v1.png'
import soilSnap2 from '../src/assets/project/SS_v2.png'

// ---------- Project images: Municipal Assessor ----------
import assessor0 from '../src/assets/project/MS_v0.png'
import assessor1 from '../src/assets/project/MS_v1.png'
import assessor2 from '../src/assets/project/MS_v2.png'

// ---------- Project images: Resort / Reservation ----------
import resort0 from '../src/assets/project/BO_v0.png'
import resort1 from '../src/assets/project/BO_v1.png'
import resort2 from '../src/assets/project/BO_v2.png'
import resort3 from '../src/assets/project/BO_v3.png'
import resort4 from '../src/assets/project/BO_v4.png'

// ---------- Project images: HRIS ----------
import hris0 from '../src/assets/project/HR_v0.png'
import hris1 from '../src/assets/project/HR_v1.png'
import hris2 from '../src/assets/project/HR_v2.png'
import hris3 from '../src/assets/project/HR_v3.png'
import hris4 from '../src/assets/project/HR_v4.png'

import { ChevronRight } from 'lucide-react';

const navItems = [
  { label: 'about.md', id: 'about' },
  { label: 'work/', id: 'work' },
  { label: 'experience.log', id: 'experience' },
  { label: 'skills.json', id: 'skills' },
  { label: 'certificate/', id: 'certificate' },
  { label: 'contact.sh', id: 'contact' },
]

const experience = [
  {
    role: 'Freelance Full Stack Web Developer',
    company: 'Self-Employed',
    period: 'Jan. 2024 — Present',
    location: 'Remote',
    stack: ['Laravel', 'React', 'Node.js', 'MySQL', 'PayMongo', 'Leaflet', 'QGIS'],
    points: [
      'Developed custom full-stack web applications for government offices, educational institutions, and private businesses using Laravel, React, Node.js, MySQL, and modern web technologies.',
      'Designed and implemented specialized systems including Point of Sale (POS), Clinic Management, Human Resource Information Systems (HRIS), Recruitment Systems, Reservation Systems, and the Municipal Assessor Assessment System based on client requirements.',
      'Integrated third-party services and advanced technologies such as PayMongo payment processing, facial recognition attendance, Leaflet GIS mapping, and QGIS spatial data visualization to extend application functionality.',
      'Collaborated directly with clients throughout the software development lifecycle, from requirements gathering and deployment to maintenance, feature enhancements, and technical support.',
    ],
  },
  {
    role: 'Full Stack Web Developer Intern',
    company: 'University Information Systems and Analytics',
    period: 'Jan. 2026 — May 2026',
    location: 'Sogod, Southern Leyte, Philippines',
    stack: ['Laravel', 'PHP', 'MySQL', 'JavaScript'],
    points: [
      'Modified and optimized the Bargo Reservation System to prepare it for deployment at another Southern Leyte State University campus, ensuring compatibility, reliability, and operational readiness.',
      'Enhanced sales reporting and inventory management modules by resolving logic errors, improving data accuracy, and refining report generation processes.',
      'Improved the system user interface by refining layouts, enhancing usability, and implementing interface updates based on user and stakeholder feedback.',
      'Worked closely with the Bargo Office by documenting implemented changes, reporting completed enhancements, and ensuring that system updates aligned with operational requirements.',
    ],
  },
  {
    role: 'Student Assistant',
    company: 'University Information Systems and Analytics',
    period: 'Aug. 2024 — Dec. 2024',
    location: 'Sogod, Southern Leyte, Philippines',
    stack: ['Laravel', 'PHP', 'MySQL', 'JavaScript'],
    points: [
      'Enhanced the reservation module of the Bargo Reservation System by resolving booking-related issues and improving the overall reservation workflow.',
      'Implemented an interactive calendar feature to provide users with a more intuitive reservation and scheduling experience.',
      'Developed a PDF-based form generation feature, allowing reservation details and required documents to be automatically generated and printed.',
      'Performed system maintenance by identifying and resolving application bugs, improving stability, responsiveness, and the overall user experience.',
    ],
  },
]

const certificates = [
  {
    type: 'certificate',
    title: '1st Placer, Programming Skill Competition',
    issuer: 'Southern Leyte State University, CCSIT',
    date: '2025',
    ext: '.cert',
    image: certProgrammingV2,
  },
  {
    type: 'certificate',
    title: '2nd Placer',
    issuer: 'Philippine Society of Information Technology Education, Region VIII',
    date: '2024',
    ext: '.cert',
    image: certEvco,
  },
  {
    type: 'certificate',
    title: '1st Placer, Programming Skill Competition',
    issuer: 'Southern Leyte State University, CCSIT',
    date: '2024',
    ext: '.cert',
    image: certProgrammingV1,
  },
  {
    type: 'certificate',
    title: 'Certificate of Recognation',
    issuer: 'Southern Leyte State University, FCIS',
    date: '2024',
    ext: '.cert',
    image: certEvcoRecognition,
  },
  {
    type: 'certificate',
    title: 'National Programming Challenge 2024',
    issuer: 'CodeChum',
    date: '2024',
    ext: '.cert',
    image: certCodeChum,
  },
  {
    type: 'certificate',
    title: 'HACKFORGOV',
    issuer: 'DICT Region VIII',
    date: '2024',
    ext: '.cert',
    image: certHack4GovV2,
  },
  {
    type: 'certificate',
    title: 'HACKFORGOV',
    issuer: 'DICT Region VIII',
    date: '2023',
    ext: '.cert',
    image: certHack4GovV1,
  },
  {
    type: 'certificate',
    title: 'START UP',
    issuer: 'DICT Region VIII',
    date: '2022',
    ext: '.cert',
    image: certStartUp,
  },
]

const projects = [
  {
    type: 'project',
    ext: '.web',
    title: 'SoilSnap',
    desc: 'An AI-powered soil classification system that identifies soil types from images, helping farmers and researchers analyze soil conditions quickly and accurately.',
    tags: ['MERN Stack', 'YOLOv6', 'Python', 'TensorFlow', 'Tailwind', 'PWA'],
    images: [soilSnap0, soilSnap1, soilSnap2],
  },
  {
    type: 'project',
    ext: '.web',
    title: 'Municipal Assessor System',
    desc: 'A GIS-enabled property assessment and land records management system with parcel mapping, report generation, and automated tax assessment workflows for local government.',
    tags: ['Laravel', 'Leaflet', 'QGIS', 'MySQL', 'JavaScript', 'Bootstrap'],
    images: [assessor0, assessor1, assessor2],
  },
  {
    type: 'project',
    ext: '.web',
    title: 'Resort Management and Reservation',
    desc: 'A business management platform designed to streamline daily operations through centralized data management, workflow automation, reporting and reservation.',
    tags: ['Laravel', 'Bootstrap', 'MySQL', 'PayMongo'],
    images: [resort0, resort1, resort2, resort3, resort4],
  },
  {
    type: 'project',
    ext: '.web',
    title: 'Human Resource Information System (HRIS)',
    desc: 'A web-based HR management system that automates employee records, recruitment, attendance, leave requests, payroll-related processes, and administrative reporting.',
    tags: ['Laravel', 'Face API', 'MySQL', 'Bootstrap'],
    images: [hris0, hris1, hris2, hris3, hris4],
  },
]

const skillGroups = [
  {
    title: 'Programming Languages',
    tags: ['JavaScript', 'TypeScript', 'PHP', 'Python', 'Java', 'C#', 'C'],
  },
  {
    title: 'Frameworks',
    tags: ['React', 'React Native', 'Laravel', 'Node.js', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    title: 'Databases & Data Management',
    tags: ['MySQL', 'MongoDB', 'Data Warehousing', 'Database Design', 'Data Modeling', 'SQL'],
  },
  {
    title: 'GIS & Mapping',
    tags: ['Leaflet.js', 'QGIS', 'GeoJSON', 'Interactive Maps', 'Parcel Mapping'],
  },
  {
    title: 'Tools & Platforms',
    tags: ['Git', 'GitHub', 'VS Code', 'Postman', 'MySQL Workbench', 'XAMPP', 'RoboFlow', 'FileZilla'],
  },
  {
    title: 'Concepts & Technologies',
    tags: ['REST API', 'Responsive Design', 'MVC Architecture', 'CI/CD', 'SDLC'],
  },
]

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
    
    <a  href={href}
      className={'relative rounded-t-md px-3.5 py-2 hover:bg-muted ' + base + ' ' + state}
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

// ---------- SHARED MODAL SHELL ----------
function ModalShell({ open, onClose, children, maxWidth = 'max-w-2xl' }) {
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
      const raf = requestAnimationFrame(() => setShow(true))
      return () => cancelAnimationFrame(raf)
    }
    setShow(false)
    document.body.style.overflow = ''
  }, [open])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  if (!open) return null

  return (
    <div
      className={
        'fixed inset-0 z-[100] flex items-center justify-center p-4 transition-opacity duration-300 ' +
        (show ? 'opacity-100' : 'opacity-0')
      }
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-foreground/60 backdrop-blur-sm" />
      <div
        className={
          'relative z-10 w-full ' + maxWidth + ' overflow-hidden rounded-2xl border border-border bg-card shadow-2xl transition-all duration-300 ' +
          (show ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-4 scale-95 opacity-0')
        }
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  )
}

// ---------- CERTIFICATE MODAL (full image, no cropping) ----------
function CertificateModal({ item, onClose }) {
  return (
    <ModalShell open={!!item} onClose={onClose} maxWidth="max-w-xl">
      {item && (
        <div className="max-h-[88vh] overflow-y-auto">
          <div className="flex items-center justify-center bg-muted p-4 sm:p-6">
            <img
              src={item.image}
              alt={item.title}
              className="max-h-[55vh] w-full rounded-lg object-contain"
            />
          </div>

          <div className="p-6 sm:p-8">
            <div className="mb-2.5 flex items-center justify-between">
              <span className="rounded-md border border-border bg-background px-2 py-0.5 font-mono text-[11px] text-primary">
                {item.ext}
              </span>
              {item.date && (
                <span className="font-mono text-[11px] text-muted-foreground/70">{item.date}</span>
              )}
            </div>
            <h3 className="mb-1.5 font-sans text-xl font-semibold">{item.title}</h3>
            {item.issuer && <p className="text-sm text-muted-foreground">{item.issuer}</p>}
          </div>
        </div>
      )}
    </ModalShell>
  )
}

// ---------- IMAGE CAROUSEL (used inside project modal) ----------
function ImageCarousel({ images, alt }) {
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
    <div className="relative bg-muted">
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
              className="h-64 w-full flex-shrink-0 object-cover sm:h-80 p-7"
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

// ---------- PROJECT MODAL (carousel + details) ----------
function ProjectModal({ item, onClose }) {
  return (
    <ModalShell open={!!item} onClose={onClose} maxWidth="max-w-2xl">
      {item && (
        <div className="max-h-[88vh] overflow-y-auto">
          <ImageCarousel images={item.images} alt={item.title} />

          <div className="p-6 sm:p-8">
            <h3 className="mb-1.5 font-sans text-xl font-semibold">{item.title}</h3>
            {item.desc && (
              <p className="text-[14.5px] leading-relaxed text-muted-foreground">{item.desc}</p>
            )}
            {item.tags && (
              <div className="mt-4 flex flex-wrap gap-1.5">
                {item.tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </ModalShell>
  )
}

const App = () => {
  const [navOpen, setNavOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const [selectedItem, setSelectedItem] = useState(null)

  const [aboutRef, aboutVisible] = useReveal()
  const [workRef, workVisible] = useReveal()
  const [skillsRef, skillsVisible] = useReveal()
  const [contactRef, contactVisible] = useReveal()
  const [certificateRef, certificateVisible] = useReveal()
  const [experienceRef, experienceVisible] = useReveal()
  const activeSection = useActiveSection(navItems.map((item) => item.id))

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

          <nav className="hidden gap-1 sm:flex" aria-label="Section navigation">
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
            <div className='flex justify-between item-center'>
              <span className="mb-2.5 block font-mono text-xs uppercase tracking-wider text-primary">02 · Selected work</span> 
              <a href="http://" className='text-sm text-primary flex items-center'>see more <ChevronRight size={14}/></a>
            </div>
            <h2 className="mb-6 font-sans text-2xl font-semibold sm:text-3xl">Recent projects</h2>
            <div className="grid gap-5 sm:grid-cols-2">
              {projects.map((p, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setSelectedItem(p)}
                  className="flex flex-col overflow-hidden rounded-xl border border-border bg-background text-left transition hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <div className="relative h-[150px] overflow-hidden">
                    <img
                      src={p.images?.[0]}
                      alt={p.title}
                      className="h-full w-full object-cover"
                    />
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
                </button>
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
            <div className='flex justify-between items-center'>
              <span className="mb-2.5 block font-mono text-xs uppercase tracking-wider text-primary">05 · Credentials</span>
               <a href="http://" className='text-sm text-primary flex items-center'>see more <ChevronRight size={14}/></a>
            </div>
            <h2 className="mb-6 font-sans text-2xl font-semibold sm:text-3xl">Certificates &amp; awards</h2>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {certificates.map((c, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setSelectedItem(c)}
                  className="flex flex-col gap-3 rounded-xl border border-border bg-background p-5 text-left transition hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <div className="relative h-[150px] overflow-hidden">
                    <img
                      src={c.image}
                      alt={c.title}
                      className="h-full w-full object-cover"
                    />
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
                </button>
              ))}
            </div>
          </SectionPanel>
        </section>

        {/* CONTACT */}
        <section id="contact" ref={contactRef} className={'py-16 sm:py-24 w-full' + revealClass(contactVisible)}>
          <FileTab>contact.sh</FileTab>
          <SectionPanel>
            <span className="mb-2.5 block font-mono text-xs uppercase tracking-wider text-primary">06· Contact</span>
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
        
        <a  href="#hero"
          className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-primary/90"
          aria-label="Back to top"
        >
          ↑
        </a>
      </div>

      <ProjectModal
        item={selectedItem?.type === 'project' ? selectedItem : null}
        onClose={() => setSelectedItem(null)}
      />
      <CertificateModal
        item={selectedItem?.type === 'certificate' ? selectedItem : null}
        onClose={() => setSelectedItem(null)}
      />
    </div>
  )
}

export default App