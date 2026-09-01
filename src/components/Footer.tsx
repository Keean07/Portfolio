export default function Footer() {
  return (
    <footer className="border-t border-line py-8 pb-12">
      <div className="mx-auto flex max-w-[1120px] flex-wrap justify-between gap-2 px-5 font-mono text-[0.72rem] text-ink-dim sm:px-8">
        <span>&copy; {new Date().getFullYear()} Keean Ferreira</span>
        <span>Design direction: &ldquo;Coordinate Space&rdquo; &middot; IBM Plex</span>
      </div>
    </footer>
  );
}
