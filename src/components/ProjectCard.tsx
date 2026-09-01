import { Link } from 'react-router-dom';
import type { Project } from '../lib/projects';
import { asset } from '../lib/asset';
import Thumb from './Thumb';

const thumbCls = 'relative block aspect-[16/9] overflow-hidden border-b border-line bg-panel';

export default function ProjectCard({ project }: { project: Project }) {
  const casePath = `/work/${project.id}`;
  const first = project.links[0];

  const thumbInner = (
    <>
      {project.image ? (
        <img
          src={asset(project.image)}
          alt={`${project.title} screenshot`}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      ) : (
        <Thumb id={project.id} />
      )}
      {project.caseStudy && (
        <span className="absolute left-2.5 top-2.5 rounded border border-accent/35 bg-accent-dim px-2 py-0.5 font-mono text-[0.62rem] uppercase tracking-[0.12em] text-accent">
          Case study
        </span>
      )}
    </>
  );

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-line bg-surface transition-[transform,border-color,box-shadow] duration-200 hover:-translate-y-1 hover:border-line-strong hover:shadow-panel motion-reduce:hover:translate-y-0">
      {project.caseStudy ? (
        <Link to={casePath} className={thumbCls} aria-label={`${project.title} — case study`}>
          {thumbInner}
        </Link>
      ) : (
        <a
          href={first?.href}
          target={first?.external ? '_blank' : undefined}
          rel={first?.external ? 'noreferrer' : undefined}
          className={thumbCls}
          aria-label={`${project.title} — ${first?.label}`}
        >
          {thumbInner}
        </a>
      )}

      <div className="flex flex-1 flex-col gap-2.5 p-6">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="text-[1.18rem] font-semibold tracking-[-0.015em]">{project.title}</h3>
          <span className="whitespace-nowrap font-mono text-[0.72rem] tabular-nums text-ink-dim">
            {project.year} &middot; {project.role}
          </span>
        </div>

        <p className="text-[0.94rem] leading-relaxed text-ink-mid">{project.hook}</p>

        <div className="mt-0.5 flex flex-wrap gap-1.5">
          {project.tags.map((t) => (
            <span
              key={t}
              className="rounded border border-line bg-panel px-2 py-0.5 font-mono text-[0.68rem] tracking-wide text-ink-mid"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-auto flex gap-5 pt-3.5 font-mono text-[0.76rem]">
          {project.caseStudy && (
            <Link
              to={casePath}
              className="inline-flex items-center gap-[0.4ch] text-ink transition-colors hover:text-accent"
            >
              case study <span aria-hidden="true">→</span>
            </Link>
          )}
          {project.links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.external ? '_blank' : undefined}
              rel={l.external ? 'noreferrer' : undefined}
              className="inline-flex items-center gap-[0.4ch] text-ink-dim transition-colors hover:text-accent"
            >
              {l.label} {l.external ? '↗' : '→'}
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}
