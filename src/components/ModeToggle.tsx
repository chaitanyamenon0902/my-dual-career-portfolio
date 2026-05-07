import { createContext, useContext, useState, type ReactNode } from "react";

export type Mode = "web" | "data";

type Ctx = { mode: Mode; setMode: (m: Mode) => void };
const ModeContext = createContext<Ctx | null>(null);

export function ModeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<Mode>("web");
  return <ModeContext.Provider value={{ mode, setMode }}>{children}</ModeContext.Provider>;
}

export function useMode() {
  const ctx = useContext(ModeContext);
  if (!ctx) throw new Error("useMode must be used within ModeProvider");
  return ctx;
}

export function ModeBadge() {
  const { mode, setMode } = useMode();
  const label = mode === "web" ? "Web Dev" : "Data Science";
  const next: Mode = mode === "web" ? "data" : "web";
  return (
    <button
      onClick={() => setMode(next)}
      className="fixed top-6 right-6 z-50 rounded-full border border-border bg-card/70 backdrop-blur px-4 py-2 text-xs sm:text-sm hover:border-primary hover:text-primary transition-colors"
      aria-label="Toggle mode"
    >
      Mode: <span className="text-primary">{label}</span>
    </button>
  );
}
