const HOBBIES = [
  { title: "Reading", desc: "Devouring books on tech, science, and the occasional thriller." },
  { title: "Football", desc: "Weekend matches with friends — keeps the mind sharp." },
  { title: "Coding", desc: "Tinkering on side projects and exploring new frameworks." },
];

export function Hobbies() {
  return (
    <section className="px-6 sm:px-12 lg:px-20 py-16 max-w-7xl mx-auto">
      <h2 className="text-3xl sm:text-4xl">Hobbies</h2>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {HOBBIES.map((h) => (
          <article
            key={h.title}
            className="rounded-xl border border-border bg-card overflow-hidden hover:border-primary/60 transition-colors"
          >
            <div className="h-40 bg-gradient-to-br from-primary/30 via-surface-elevated to-background" />
            <div className="p-5 border-t border-border">
              <h3 className="text-lg">{h.title}</h3>
              <p className="text-sm text-muted-foreground mt-2">{h.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
