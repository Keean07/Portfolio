import { projects } from '../lib/projects';
import ProjectCard from './ProjectCard';
import Section from './Section';

export default function Work() {
  return (
    <Section id="work" eyebrow="// selected work" title="Six projects across games, graphics, and data.">
      <div className="mt-[clamp(2.5rem,6vw,4rem)] grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </Section>
  );
}
