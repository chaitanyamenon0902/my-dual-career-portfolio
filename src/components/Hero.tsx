import portrait from "@/assets/chaitanya.jpg";
import { useMode } from "./ModeToggle";

const skillsByMode = {
  web: ["JavaScript", "React", "Node.js", "Express", "MongoDB", "Prisma", "Firebase", "HTML"],
  data: ["Python", "TensorFlow", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "SQL", "Power BI"],
} as const;

export function Hero() {
  const { mode } = useMode();
  const title = mode === "web" ? "Full Stack Developer" : "Data Scientist";

  return (
    <section className="px-6 sm:px-12 lg:px-20 pt-28 pb-16 max-w-7xl mx-auto">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl leading-tight tracking-tight">
        Hi, I'm <span className="text-primary text-glow-primary">Chaitanya</span>
        <br />
        {title}
      </h1>

      <div className="mt-20 flex flex-col gap-6">
        <div className="relative w-32 h-32">
          <img
            src={portrait}
            alt="Chaitanya Menon"
            className="w-32 h-32 rounded-full object-cover ring-glow-primary"
          />
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-primary text-primary-foreground text-[11px] px-3 py-1 font-semibold whitespace-nowrap">
            7.71 CGPA
          </span>
        </div>
        <div>
          <h2 className="text-2xl">Chaitanya Menon</h2>
          <p className="text-muted-foreground mt-1 text-sm">
            BTech in Computational and Data Science, NITK.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 mt-2">
          {skillsByMode[mode].map((s) => (
            <span
              key={s}
              className="text-xs px-3 py-1.5 rounded-md border border-border bg-surface-elevated"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
