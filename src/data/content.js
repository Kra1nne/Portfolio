// ---------- Certificate images ----------
import certProgrammingV2 from '../assets/certificate/Programming_v2.jpg'
import certEvco from '../assets/certificate/EVCO.jpg'
import certProgrammingV1 from '../assets/certificate/Programming_v1.jpg'
import certEvcoRecognition from '../assets/certificate/Evco_Recognation.jpg'
import certCodeChum from '../assets/certificate/CodeChum.png'
import certHack4GovV2 from '../assets/certificate/Hack4Gov_v2.jpg'
import certHack4GovV1 from '../assets/certificate/Hack4Gov_v1.jpg'
import certStartUp from '../assets/certificate/StartUp.jpg'

// ---------- Project images ----------
import soilSnap0 from '../assets/project/SS_v0.png'
import soilSnap1 from '../assets/project/SS_v1.png'
import soilSnap2 from '../assets/project/SS_v2.png'

import assessor0 from '../assets/project/MS_v0.png'
import assessor1 from '../assets/project/MS_v1.png'
import assessor2 from '../assets/project/MS_v2.png'

import resort0 from '../assets/project/BO_v0.png'
import resort1 from '../assets/project/BO_v1.png'
import resort2 from '../assets/project/BO_v2.png'
import resort3 from '../assets/project/BO_v3.png'
import resort4 from '../assets/project/BO_v4.png'

import hris0 from '../assets/project/HR_v0.png'
import hris1 from '../assets/project/HR_v1.png'
import hris2 from '../assets/project/HR_v2.png'
import hris3 from '../assets/project/HR_v3.png'
import hris4 from '../assets/project/HR_v4.png'

// ---------- URL slugs ----------
// Each item gets a stable, readable slug built from its title.
// Duplicate titles (e.g. two HACKFORGOV entries) get a -2, -3 suffix.
const slugify = (text) =>
  text
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')

const withSlugs = (items) => {
  const seen = {}
  return items.map((item) => {
    const base = slugify(item.title)
    seen[base] = (seen[base] || 0) + 1
    return { ...item, slug: seen[base] > 1 ? `${base}-${seen[base]}` : base }
  })
}

export const projects = withSlugs([
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
])

export const certificates = withSlugs([
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
])

export const features = withSlugs([
  {
    type: 'feature',
    ext: '.news',
    title: 'SLSU AI and ML Capstone Projects Earn 3rd Place and Finalist Honors in SiKAPtala 2026',
    outlet: 'Southern Leyte State University',
    date: 'May 22, 2026',
    role: 'Finalist — Automated Soil Identification and Classification Using Machine Learning',
    desc: 'Our capstone team advanced as a national finalist in SiKAPtala 2026, the National CS & IT Competition hosted by De La Salle University – Dasmariñas, for a machine learning system that automates soil identification and classification to support agricultural analysis and crop recommendation.',
    url: 'https://southernleytestateu.edu.ph/index.php/en/menu-page-home/3939-slsu-ai-and-ml-capstone-projects-earn-3rd-place-and-finalist-honors-in-sikaptala-2026',
    image: 'https://southernleytestateu.edu.ph/images/2026/0H5-May/AI_and_ML_Capstone_3.png',
    tags: ['Machine Learning', 'Capstone', 'National Finalist'],
  },
  {
    type: 'feature',
    ext: '.news',
    title: 'UISA Strengthens SLSU’s Digital Transformation Through AI and Data Analytics Training',
    outlet: 'Southern Leyte State University',
    date: 'August 17, 2026',
    role: 'Participant — UISA Training–Workshop on Artificial Intelligence',
    desc: 'An eight-day training–workshop on artificial intelligence, data analytics, visualization, and Python programming held at SLSU Sogod Campus, culminating in executive dashboard presentations built from real institutional datasets.',
    url: 'https://www.southernleytestateu.edu.ph/index.php/en/menu-page-home/4281-uisa-strengthens-slsu-s-digital-transformation-through-ai-and-data-analytics-training',
    image: 'https://southernleytestateu.edu.ph/images/2026/0E8-August/UISA_Training_Thumbnail_2.png',
    tags: ['Data Analytics', 'Python', 'Dashboards'],
  },
  {
    type: 'feature',
    ext: '.news',
    title: 'Kingfishers Shine at 2nd Eastern Visayas Coding Olympics',
    outlet: 'Western Leyte College of Ormoc City, Inc.',
    date: 'October 18, 2024',
    role: 'Participant - 2nd Placer',
    desc: 'Student participants from Southern Leyte State University (SLSU) secured notable awards during the 2nd Eastern Visayas Coding Olympics (EVCO 2024), organized by the PSITE Eastern Visayas Chapter',
    url: 'https://www.facebook.com/southernleytestateu/posts/pfbid02Qe6c8DizzSZciTeoPEqPR4vErmhpbxtvszNGHq1RpiQGtHBjTvhddFcikj3GKcN8l?locale=tr_TR',
    image:
      'https://scontent.fcgy2-1.fna.fbcdn.net/v/t39.30808-6/486463469_1078561010977475_1136876355757005958_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1366&ctp=s590x590&_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHwmV41qUCtrh2cHhlhZdJnVTeOgs101QpVN46CzXTVCj74O9ct5N9q-ZTj1wPQBV23cYc0q7ckZwPkUFskfqV5&_nc_ohc=rECO4aXlDT8Q7kNvwEAUlfL&_nc_oc=AdrlyTdHKrO4-B_OZuKbWumA-Db1BbITNlnAthTioxMyd8nc0pEKf9XfNy6zw2t9hXI&_nc_pt=1&_nc_zt=23&_nc_ht=scontent.fcgy2-1.fna&_nc_gid=sqMT8xGFxvzSNMEaeSNnvA&_nc_ss=7b2a8&oh=00_AQKspWVjkFPqICZowZCSF_CtffATmT7LA2EhLunmZSfHoQ&oe=6AB3D0F5',
    tags: ['Programming', 'C', 'Teamwork', 'EVCO'],
  },
])

export const experience = [
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

export const skillGroups = [
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

export const navItems = [
  { label: 'about.md', id: 'about' },
  { label: 'featured.md', id: 'featured' },
  { label: 'work/', id: 'work' },
  { label: 'experience.log', id: 'experience' },
  { label: 'skills.json', id: 'skills' },
  { label: 'certificate/', id: 'certificate' },
  { label: 'contact.sh', id: 'contact' },
]

export const findProject = (slug) => projects.find((p) => p.slug === slug)
export const findCertificate = (slug) => certificates.find((c) => c.slug === slug)
export const findFeature = (slug) => features.find((f) => f.slug === slug)