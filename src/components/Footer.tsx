export function Footer() {
  return (
    <footer className="px-6 sm:px-12 lg:px-20 py-16 max-w-7xl mx-auto text-center">
      <div className="flex flex-wrap justify-center gap-10 text-sm">
        <a className="hover:text-primary transition-colors" href="https://github.com/chaitanyamenon0902" target="_blank" rel="noreferrer">GitHub</a>
        <a className="hover:text-primary transition-colors" href="https://www.linkedin.com/in/chaitanya-menon" target="_blank" rel="noreferrer">LinkedIn</a>
        <a className="hover:text-primary transition-colors" href="mailto:chaitanyamenon2005@gmail.com">Gmail</a>
      </div>
      <a
        href="/resume.pdf"
        download
        className="mt-10 inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm hover:border-primary hover:text-primary transition-colors"
      >
        <span className="text-primary">$</span> ./download_resume.sh
      </a>
      <p className="mt-3 text-xs text-muted-foreground">Click to download my resume.</p>
    </footer>
  );
}
