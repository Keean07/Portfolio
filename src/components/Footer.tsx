export default function Footer() {
  return (
    <footer className="border-t border-line py-8 pb-12">
      <div className="mx-auto flex max-w-[1120px] flex-wrap justify-between gap-x-4 gap-y-1 px-4 font-mono text-[0.72rem] text-ink-dim sm:px-8">
        <span>&copy; {new Date().getFullYear()} Keean Ferreira</span>
        <span>Built with React &amp; Tailwind &middot; IBM Plex</span>
      </div>
    </footer>
  );
}
