/** Long-form case studies for the headline projects. */

export interface CaseStudy {
  id: string;
  tagline: string;
  /** shown in the spec sidebar */
  spec: [label: string, value: string][];
  /** screenshots for the figure strip, relative to /public */
  images: { src: string; caption: string }[];
  sections: { heading: string; paragraphs: string[] }[];
}

export const caseStudies: Record<string, CaseStudy> = {
  coinhop: {
    id: 'coinhop',
    tagline: 'A tilt-and-roll physics game, built end to end as my degree capstone.',
    spec: [
      ['Role', 'Sole developer & designer'],
      ['Team', 'Solo'],
      ['Timeline', '~4 months · 2023'],
      ['Engine', 'Unity · C#'],
      ['Platform', 'WebGL — Unity Play'],
    ],
    images: [
      { src: 'images/projects/coin-hop-2.webp', caption: 'Tilting the plane to steer the ball toward coins.' },
      { src: 'images/projects/coin-hop-3.webp', caption: 'Run over: final score, restart or quit.' },
    ],
    sections: [
      {
        heading: 'The problem',
        paragraphs: [
          'The final-year brief was open: ship one complete, playable game. I wanted something small enough to actually finish and polish, but with real systems underneath — physics that feels right, a score loop, and difficulty that ramps.',
          'A tilt-the-surface balance game was a mechanic I could reason about fully in the time available, which made it the right container for the work.',
        ],
      },
      {
        heading: 'Approach',
        paragraphs: [
          'The core is the tilt: the plane rotates to player input and the ball responds to gravity and friction. Most of the tuning went into that feel — how quickly the plane tilts, how much the ball drifts and overshoots, how forgiving the edges are.',
          'On top of that: coins to collect, a running score, and a lose-and-restart loop. Scope stayed deliberately narrow so the final stretch could go to feel and bug-fixing rather than new features.',
        ],
      },
      {
        heading: 'Result',
        paragraphs: [
          'A finished, published game running in the browser via Unity Play. It does a small number of things and does them cleanly.',
          'The lasting lesson was scope discipline: nearly every feature I cut made the ones that shipped better.',
        ],
      },
    ],
  },

  cyberspider: {
    id: 'cyberspider',
    tagline: 'A team platformer with a cybersecurity streak — my first time in a shared Unity codebase.',
    spec: [
      ['Role', 'Movement & level scripting'],
      ['Team', 'GameDevTeam6 · six people'],
      ['Timeline', 'One module · 2022'],
      ['Engine', 'Unity · C#'],
      ['Platform', 'WebGL — Unity Play'],
    ],
    images: [
      { src: 'images/projects/cyber-spider-3.webp', caption: 'Level 1 — bugs, viruses, coins, and a countdown.' },
      { src: 'images/projects/cyber-spider-5.webp', caption: 'Power-ups gate on a quick code question.' },
      { src: 'images/projects/cyber-spider-6.webp', caption: 'Level 2 shifts the palette and the layout.' },
    ],
    sections: [
      {
        heading: 'The problem',
        paragraphs: [
          'The module was a group games project: six people, one Unity codebase, one deadline. The hard part was never any single system — it was coordinating a shared project without constant merge conflicts and scope drift.',
        ],
      },
      {
        heading: 'Approach',
        paragraphs: [
          'I owned player movement — run, jump, the sword — and level scripting. We split the game into loosely-coupled systems (combat, enemies, the quiz and power-up layer, UI) so people could work in parallel, kept scenes modular to avoid painful merges, and leaned on version-control discipline.',
          'Keeping my slice of the code independent — clear inputs and outputs, few assumptions about the rest — was what let the parts come together at the end.',
        ],
      },
      {
        heading: 'Result',
        paragraphs: [
          'A playable, multi-level build shipped to Unity Play. The takeaway was less about Unity and more about working in a team: communication overhead is real, and loosely-coupled code is what makes parallel work possible.',
        ],
      },
    ],
  },

  'digit-classification': {
    id: 'digit-classification',
    tagline: 'Handwriting recognition from first principles, in a notebook you can read top to bottom.',
    spec: [
      ['Role', 'Solo'],
      ['Context', 'Machine learning module · 2022'],
      ['Stack', 'Python · TensorFlow/Keras · NumPy'],
      ['Data', 'MNIST handwritten digits'],
      ['Format', 'Jupyter notebook'],
    ],
    images: [],
    sections: [
      {
        heading: 'The problem',
        paragraphs: [
          'Build a working handwritten-digit classifier and — just as importantly — explain it. Not calling a pre-trained model, but showing the whole pipeline: data in, trained network, evaluation, mistakes.',
        ],
      },
      {
        heading: 'Approach',
        paragraphs: [
          'Load and normalise MNIST, then a small convolutional network — a couple of conv/pool blocks into dense layers. Train with a validation split to watch for overfitting, and keep every step annotated so the notebook reads as an explanation, not just a script.',
          'Evaluation went past a single accuracy number: a confusion matrix to see which digits get mixed up, and a look at the specific images the model got wrong.',
        ],
      },
      {
        heading: 'Result',
        paragraphs: [
          'Strong accuracy on held-out digits, and a write-up that doubles as a reference I still return to when I need to remember how the pieces fit together.',
        ],
      },
    ],
  },
};

export const caseStudyById = (id: string): CaseStudy | undefined => caseStudies[id];
