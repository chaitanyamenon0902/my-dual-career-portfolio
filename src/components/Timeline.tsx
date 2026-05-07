import { useMemo, useState } from "react";
import { useMode } from "./ModeToggle";

type Project = {
  id: string;
  name: string;
  tagline: string;
  tools: string[];
  highlights: string[];
  next: string[];
  events: { title: string; desc: string }[];
};

const PROJECTS: Record<"web" | "data", Project[]> = {
  web: [
    {
      id: "algoarena",
      name: "AlgoArena",
      tagline: "Collaborative coding platform with live rooms and JWT auth.",
      tools: ["React", "Node.js", "Express", "MongoDB", "WebSocket"],
      highlights: [
        "50+ concurrent users with 40% faster setup time.",
        "JWT auth handling 100+ daily active users at 99.8% uptime.",
        "Room sync across 5 languages at 200ms latency.",
      ],
      next: [
        "Add spectator mode and replay of coding sessions.",
        "Ship contests and leaderboard with anti-cheat.",
        "Improve cold-start latency for low-bandwidth users.",
      ],
      events: [
        { title: "AlgoArena — Initial Build", desc: "Live collaborative editor and room management shipped." },
        { title: "AlgoArena — Auth & Scale", desc: "JWT auth and multi-language sync hardened for 100+ DAU." },
      ],
    },
    {
      id: "iste",
      name: "ISTE App",
      tagline: "Members-only mobile app for events, profiles, and tracking.",
      tools: ["Flutter", "Firebase", "Android Studio"],
      highlights: [
        "Event browsing, participation tracking, and user profiles.",
        "Firebase auth with role-based access and password-protected invites.",
        "Real-time data models for events and calendar scheduling.",
      ],
      next: [
        "Push notifications for event RSVPs and reminders.",
        "Offline-first cache for event data.",
        "Admin dashboard for committee leads.",
      ],
      events: [
        { title: "ISTE App — MVP", desc: "Flutter app with Firebase auth and event flow." },
        { title: "ISTE App — Roles", desc: "Role-based access and invite-only events shipped." },
      ],
    },
  ],
  data: [
    {
      id: "spotify",
      name: "Spotify Genre Prediction",
      tagline: "Predicts the genre of an artist's next top hit.",
      tools: ["Spotify API", "TensorFlow", "Scikit-learn", "Matplotlib", "Postman"],
      highlights: [
        "85% accuracy with Random Forest on 10,000+ songs.",
        "SMOTE applied to fix class imbalance on minority genres.",
        "Recommendation module mapping audio features to genres.",
      ],
      next: [
        "Try gradient boosting and a small transformer baseline.",
        "Ship a live demo backed by the Spotify API.",
        "Expand to multi-label genre classification.",
      ],
      events: [
        { title: "Spotify — Data Pipeline", desc: "Pulled and engineered 15+ audio features from the Spotify API." },
        { title: "Spotify — Modeling", desc: "Trained Random Forest with SMOTE; hit 85% accuracy." },
      ],
    },
    {
      id: "potato",
      name: "Potato Disease Detection",
      tagline: "CNN classifier for potato plant diseases, deployed end to end.",
      tools: ["TensorFlow", "Python", "GCP", "React"],
      highlights: [
        "97% test accuracy on 3,000+ images.",
        "False positives reduced 18% via tuning and augmentation.",
        "Deployed on GCP with a React frontend for real-time use.",
      ],
      next: [
        "Add multi-crop support beyond potato.",
        "On-device inference via TF Lite for field use.",
        "Active learning loop from user-uploaded images.",
      ],
      events: [
        { title: "Potato — CNN Trained", desc: "TensorFlow CNN reached 97% test accuracy." },
        { title: "Potato — Deployed", desc: "GCP deployment behind a React frontend for real-time inference." },
      ],
    },
  ],
};

export function Timeline() {
  const { mode } = useMode();
  const projects = PROJECTS[mode];
  const [activeId, setActiveId] = useState(projects[0].id);

  const active = useMemo(
    () => projects.find((p) => p.id === activeId) ?? projects[0],
    [projects, activeId]
  );

  // reset selection when mode changes
  if (!projects.find((p) => p.id === activeId)) {
    setActiveId(projects[0].id);
  }

  return (
    <section className="px-6 sm:px-12 lg:px-20 py-16 max-w-7xl mx-auto">
      <h2 className="text-3xl sm:text-4xl text-center">Build Timeline</h2>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        {projects.map((p) => {
          const isActive = p.id === active.id;
          return (
            <button
              key={p.id}
              onClick={() => setActiveId(p.id)}
              className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
                isActive
                  ? "border-primary text-primary bg-primary/10"
                  : "border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              {p.name}
            </button>
          );
        })}
      </div>

      <div className="mt-10 rounded-xl border border-border bg-card p-6 sm:p-8">
        <h3 className="text-xl">{active.name} Impact Snapshot</h3>
        <p className="text-muted-foreground mt-2 text-sm">{active.tagline}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {active.highlights.map((h) => (
            <span key={h} className="rounded-full border border-primary/40 bg-primary/10 text-primary px-3 py-1 text-xs">
              {h}
            </span>
          ))}
        </div>
        <div className="my-6 border-t border-dashed border-border" />
        <h4 className="text-sm font-semibold">What I'd Build Next</h4>
        <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
          {active.next.map((n) => (
            <li key={n} className="flex gap-2"><span className="text-primary">•</span>{n}</li>
          ))}
        </ul>
        <div className="mt-4 flex flex-wrap gap-2">
          {active.tools.map((t) => (
            <span key={t} className="text-[11px] text-muted-foreground border border-border rounded px-2 py-0.5">
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="relative mt-8 pl-6">
        <div className="absolute left-2 top-2 bottom-2 w-px bg-border" />
        <div className="space-y-4">
          {active.events.map((e) => (
            <div key={e.title} className="relative">
              <span className="absolute -left-[18px] top-5 w-3 h-3 rounded-full bg-primary ring-4 ring-background" />
              <div className="rounded-xl border border-border bg-card p-5">
                <h4 className="text-base">{e.title}</h4>
                <p className="text-sm text-muted-foreground mt-1">{e.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
