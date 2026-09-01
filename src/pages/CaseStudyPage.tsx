import { useEffect } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { projectById, projects } from '../lib/projects';
import { caseStudyById } from '../lib/caseStudies';
import { asset } from '../lib/asset';
import { useTheme } from '../hooks/useTheme';
import { useDocTitle } from '../hooks/useDocTitle';
import Footer from '../components/Footer';

export default function CaseStudyPage() {
  const { id = '' } = useParams();
  const project = projectById(id);
  const study = caseStudyById(id);
  const { theme, toggle } = useTheme();

  useDocTitle(project ? `${project.title} · Case study` : undefined);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project || !study) return <Navigate to="/" replace />;

  const caseIds = projects.filter((p) => p.caseStudy).map((p) => p.id);
  const pos = caseIds.indexOf(id);
  const next = caseIds[(pos + 1) % caseIds.length];
  const nextProject = projectById(next);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-line bg-canvas/80 backdrop-blur-md">
        <div className="mx-auto flex h-[62px] max-w-[1120px] items-center justify-between px-5 font-mono text-[0.8rem] sm:px-8">
          <Link to="/#work" className="text-ink-mid transition-colors hover:text-ink">
            ← selected work
          </Link>
          <button
            type="button"
            onClick={toggle}
            aria-pressed={theme === 'light'}
            className="rounded-full border border-line-strong px-3 py-1 text-ink-mid transition-colors hover:border-ink-dim hover:text-ink"
          >
            {theme === 'dark' ? 'light mode' : 'dark mode'}
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-[1120px] px-5 py-[clamp(3rem,8vw,6rem)] sm:px-8">
        <span className="eyebrow">
          // case study — {String(pos + 1).padStart(2, '0')}
        </span>

        <div className="mt-6 overflow-hidden rounded-2xl border border-line bg-surface">
          <div className="flex items-center gap-2 border-b border-line bg-panel px-4 py-2.5 font-mono text-[0.72rem] text-ink-dim">
            <span className="h-2.5 w-2.5 rounded-full bg-line-strong" aria-hidden="true" />
            <span className="h-2.5 w-2.5 rounded-full bg-line-strong" aria-hidden="true" />
            <span className="h-2.5 w-2.5 rounded-full bg-line-strong" aria-hidden="true" />
            <span className="ml-2 text-ink-mid">keean.dev / work / {project.id}</span>
          </div>

          <div className="grid gap-[clamp(1.5rem,4vw,3rem)] p-[clamp(1.5rem,4vw,2.6rem)] md:grid-cols-[240px_1fr] md:items-start">
            <dl className="font-mono text-[0.78rem]">
              {study.spec.map(([label, value]) => (
                <div key={label} className="mt-4 first:mt-0">
                  <dt className="text-[0.66rem] uppercase tracking-[0.04em] text-ink-dim">{label}</dt>
                  <dd className="mt-0.5 text-ink-mid">{value}</dd>
                </div>
              ))}
              <div className="mt-4">
                <dt className="text-[0.66rem] uppercase tracking-[0.04em] text-ink-dim">Links</dt>
                <dd className="mt-1 flex flex-wrap gap-x-3 gap-y-1">
                  {project.links.map((l) => (
                    <a
                      key={l.label}
                      href={l.href}
                      target={l.external ? '_blank' : undefined}
                      rel={l.external ? 'noreferrer' : undefined}
                      className="text-accent transition-colors hover:text-accent-strong"
                    >
                      {l.label} {l.external ? '↗' : '→'}
                    </a>
                  ))}
                </dd>
              </div>
            </dl>

            <div>
              <h1 className="font-mono text-[clamp(1.6rem,3.4vw,2.2rem)] font-medium tracking-[-0.02em]">
                {project.title}
              </h1>
              <p className="mt-2 max-w-[54ch] text-ink-mid">{study.tagline}</p>

              {study.sections.map((s) => (
                <section key={s.heading} className="mt-8">
                  <h2 className="font-mono text-[0.74rem] uppercase tracking-[0.14em] text-accent">
                    {s.heading}
                  </h2>
                  <div className="mt-2 max-w-[62ch] space-y-3 text-ink-mid">
                    {s.paragraphs.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                </section>
              ))}

              {study.images.length > 0 && (
                <div className="mt-10 space-y-6">
                  {study.images.map((img) => (
                    <figure key={img.src}>
                      <img
                        src={asset(img.src)}
                        alt={img.caption}
                        loading="lazy"
                        className="w-full rounded-lg border border-line"
                      />
                      <figcaption className="mt-2 font-mono text-[0.72rem] text-ink-dim">
                        {img.caption}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {nextProject && (
          <Link
            to={`/work/${next}`}
            className="mt-8 flex items-center justify-between rounded-xl border border-line bg-surface px-6 py-5 font-mono text-[0.8rem] transition-colors hover:border-line-strong"
          >
            <span className="text-ink-dim">next case study</span>
            <span className="text-ink">
              {nextProject.title} <span aria-hidden="true">→</span>
            </span>
          </Link>
        )}
      </main>

      <Footer />
    </>
  );
}
