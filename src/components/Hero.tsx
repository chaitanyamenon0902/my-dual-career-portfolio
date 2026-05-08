import { useEffect, useState } from "react";
import portrait from "@/assets/chaitanya.jpg";
import { useMode } from "./ModeToggle";

function useTypewriter(words: string[], { typeMs = 75, deleteMs = 40, holdMs = 1400 } = {}) {
  const [out, setOut] = useState("");
  const key = words.join("|");
  useEffect(() => {
    let w = 0;
    let i = 0;
    let phase: "type" | "hold" | "delete" = "type";
    let timer: ReturnType<typeof setTimeout>;
    setOut("");
    const tick = () => {
      const text = words[w];
      if (phase === "type") {
        i++;
        setOut(text.slice(0, i));
        if (i >= text.length) { phase = "hold"; timer = setTimeout(tick, holdMs); return; }
        timer = setTimeout(tick, typeMs);
      } else if (phase === "hold") {
        phase = "delete";
        timer = setTimeout(tick, deleteMs);
      } else {
        i--;
        setOut(text.slice(0, i));
        if (i <= 0) { w = (w + 1) % words.length; phase = "type"; timer = setTimeout(tick, typeMs); return; }
        timer = setTimeout(tick, deleteMs);
      }
    };
    timer = setTimeout(tick, typeMs);
    return () => clearTimeout(timer);
  }, [key, typeMs, deleteMs, holdMs]);
  return out;
}

type Skill = { name: string; slug: string; color: string };

const skillsByMode: Record<"web" | "data", Skill[]> = {
  web: [
    { name: "JavaScript", slug: "javascript", color: "F7DF1E" },
    { name: "React", slug: "react", color: "61DAFB" },
    { name: "Node.js", slug: "nodedotjs", color: "5FA04E" },
    { name: "Express", slug: "express", color: "FFFFFF" },
    { name: "MongoDB", slug: "mongodb", color: "47A248" },
    { name: "Prisma", slug: "prisma", color: "2D3748" },
    { name: "Firebase", slug: "firebase", color: "DD2C00" },
    { name: "HTML", slug: "html5", color: "E34F26" },
  ],
  data: [
    { name: "Python", slug: "python", color: "3776AB" },
    { name: "TensorFlow", slug: "tensorflow", color: "FF6F00" },
    { name: "Scikit-learn", slug: "scikitlearn", color: "F7931E" },
    { name: "Pandas", slug: "pandas", color: "150458" },
    { name: "NumPy", slug: "numpy", color: "013243" },
    { name: "Matplotlib", slug: "plotly", color: "3F4F75" },
    { name: "MySQL", slug: "mysql", color: "4479A1" },
    { name: "Power BI", slug: "powerbi", color: "F2C811" },
  ],
};

export function Hero() {
  const { mode } = useMode();
  const roles = ["Full Stack Developer", "Mobile App Developer", "Data Analyst", "ML Engineer"];
  const title = mode === "web" ? "Full Stack Developer" : "Data Scientist";
  const typed = useTypewriter(roles);

  return (
    <section className="px-6 sm:px-12 lg:px-20 pt-28 pb-16 max-w-7xl mx-auto">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl leading-tight tracking-tight">
        Hi, I'm <span className="text-primary text-glow-primary">Chaitanya</span>
        <br />
        <span aria-label={title}>{typed}</span>
        <span
          className="inline-block w-[0.55ch] ml-1 align-middle bg-primary animate-pulse"
          style={{ height: "0.85em" }}
          aria-hidden
        />
      </h1>

      <div className="mt-20 flex flex-col gap-6">
        <div className="inline-flex w-fit rounded-full bg-primary text-primary-foreground text-[11px] px-3 py-1 font-semibold">
          7.71 CGPA
        </div>
        <div>
          <h2 className="text-2xl">Chaitanya Menon</h2>
          <p className="text-muted-foreground mt-1 text-sm">
            BTech in Computational and Data Science, NITK.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 mt-2">
          {skillsByMode[mode].map((s) => (
            <div key={s.name} className="group relative">
              <div
                className="w-11 h-11 rounded-full bg-surface-elevated border border-border flex items-center justify-center hover:border-primary hover:-translate-y-0.5 transition-all"
                aria-label={s.name}
              >
                <img
                  src={`https://cdn.simpleicons.org/${s.slug}/${s.color}`}
                  alt={s.name}
                  className="w-5 h-5"
                  loading="lazy"
                />
              </div>
              <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md border border-border bg-card px-2 py-1 text-[11px] opacity-0 group-hover:opacity-100 transition-opacity">
                {s.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
