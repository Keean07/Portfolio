import { asset } from './asset';

export interface ProjectLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface Project {
  id: string;
  title: string;
  /** year the work was done (degree ran 2019–2023) */
  year: string;
  /** "solo" | "team of 6" | "team" */
  role: string;
  hook: string;
  tags: string[];
  /** has a dedicated /work/:id case-study page */
  caseStudy: boolean;
  links: ProjectLink[];
  /** card image, relative to /public — falls back to a procedural thumbnail */
  image?: string;
}

const REPO = 'https://github.com/Keean07/Portfolio';

export const projects: Project[] = [
  {
    id: 'coinhop',
    title: 'CoinHop',
    year: '2023',
    role: 'solo',
    hook:
      'A physics game built solo for my final-year project: tilt the plane to roll a ball across it, sweep up the coins, and stay on the edge — with a score chase and rising difficulty.',
    tags: ['Unity', 'C#', 'Physics'],
    caseStudy: true,
    image: 'images/projects/coin-hop-1.webp',
    links: [
      { label: 'play', href: 'https://play.unity.com/mg/other/webgl-builds-364015', external: true },
      { label: 'code', href: 'https://github.com/Keean07/BSc-Final-Project', external: true },
    ],
  },
  {
    id: 'cyberspider',
    title: 'CyberSpider',
    year: '2022',
    role: 'team of 6',
    hook:
      'A 2D platformer made with GameDevTeam6 — an astronaut fights bugs and viruses across levels, grabbing power-ups and answering code questions against the clock. I built movement and level scripting.',
    tags: ['Unity', 'C#', 'Team of 6'],
    caseStudy: true,
    image: 'images/projects/cyber-spider-1.webp',
    links: [
      { label: 'play', href: 'https://play.unity.com/mg/other/cyberspider', external: true },
      { label: 'code', href: 'https://github.com/GameDevTeam6/CyberSpider', external: true },
    ],
  },
  {
    id: 'digit-classification',
    title: 'Digit Classification',
    year: '2022',
    role: 'solo',
    hook:
      'A convolutional network in TensorFlow that reads handwritten digits — data prep, training, and evaluation walked through end to end in a notebook.',
    tags: ['Python', 'TensorFlow', 'Jupyter'],
    caseStudy: true,
    links: [
      { label: 'notebook', href: asset('DigitClassification/NotebookHTML.html') },
    ],
  },
  {
    id: 'p5-assignments',
    title: 'P5.js Assignments',
    year: '2021',
    role: 'solo',
    hook:
      'Eight creative-coding sketches for a 3D graphics module: flow fields, a webcam piano, a solar system, and physics-based game clones.',
    tags: ['JavaScript', 'p5.js', 'WebGL'],
    caseStudy: false,
    links: [
      { label: 'view all 8', href: asset('p5Assignments.html') },
      { label: 'code', href: REPO, external: true },
    ],
  },
  {
    id: 'drawing-app',
    title: 'Drawing App',
    year: '2020',
    role: 'solo',
    hook:
      'A browser paint tool with custom brushes, mirror drawing, a spray can and image stamps — an early build, in vanilla p5.js.',
    tags: ['JavaScript', 'p5.js', 'Canvas'],
    caseStudy: false,
    links: [
      { label: 'open app', href: asset('DrawingApp/index.html') },
      { label: 'code', href: REPO, external: true },
    ],
  },
  {
    id: 'braaimasters',
    title: 'BraaiMasters',
    year: '2021',
    role: 'team',
    hook:
      'A multi-page site for a Destiny gaming community — wireframes, responsive layout, gallery and FAQ, designed and built with a small team.',
    tags: ['HTML', 'CSS', 'Figma'],
    caseStudy: false,
    links: [
      { label: 'visit site', href: asset('LocalCommunityWebsite/index.html') },
      { label: 'code', href: REPO, external: true },
    ],
  },
];

export const projectById = (id: string) => projects.find((p) => p.id === id);
