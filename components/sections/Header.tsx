const links = [
  { href: "#impact", label: "Impact" },
  { href: "#work", label: "DTE Work" },
  { href: "#culture", label: "Culture" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <a
          href="#top"
          className="focus-ring flex h-9 w-9 items-center justify-center border border-ink font-mono text-xs font-semibold"
          aria-label="Back to top"
        >
          AH
        </a>
        <nav className="hidden gap-7 md:flex" aria-label="Section navigation">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="focus-ring font-mono text-[0.75rem] uppercase tracking-[0.1em] text-muted transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="focus-ring font-mono text-[0.75rem] uppercase tracking-[0.1em] text-ink underline decoration-copper decoration-2 underline-offset-4"
        >
          Get in touch
        </a>
      </div>
    </header>
  );
}
