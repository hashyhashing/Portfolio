export function Footer() {
  return (
    <footer className="mt-auto bg-ink text-paper">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 font-mono text-xs uppercase tracking-[0.08em] text-muted-dark md:flex-row md:items-center md:justify-between md:px-10">
        <span>© {new Date().getFullYear()} Ahmad Hashmi</span>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          <a href="mailto:ahmadhashmi04@outlook.com" className="focus-ring hover:text-paper">
            ahmadhashmi04@outlook.com
          </a>
          <a
            href="https://linkedin.com/in/ahmad-hashmi"
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring hover:text-paper"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Hashmi-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring hover:text-paper"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
