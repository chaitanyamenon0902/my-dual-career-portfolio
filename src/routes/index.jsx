import { createFileRoute } from "@tanstack/react-router";
import { ModeProvider, ModeBadge } from "@/components/ModeToggle";
import { Hero } from "@/components/Hero";
import { Timeline } from "@/components/Timeline";
import { Hobbies } from "@/components/Hobbies";
import { Footer } from "@/components/Footer";
export const Route = createFileRoute("/")({
    head: () => ({
        meta: [
            { title: "Chaitanya Menon — Developer & Data Scientist" },
            { name: "description", content: "Portfolio of Chaitanya Menon: full-stack web developer and data scientist at NITK." },
            { property: "og:title", content: "Chaitanya Menon — Developer & Data Scientist" },
            { property: "og:description", content: "Projects across web development and data science, with a build timeline and downloadable resume." },
        ],
    }),
    component: Index,
});
function Index() {
    return (<ModeProvider>
      <main className="min-h-screen bg-background text-foreground">
        <ModeBadge />
        <Hero />
        <Timeline />
        <Hobbies />
        <Footer />
      </main>
    </ModeProvider>);
}
