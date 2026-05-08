import readingImg from "@/assets/hobby-reading.png";
import volleyballImg from "@/assets/hobby-volleyball.png";
import doodlingImg from "@/assets/hobby-doodling.png";
import codingImg from "@/assets/hobby-coding.png";

const HOBBIES = [
  { title: "Reading", desc: "Thrillers, tech deep-dives, and research papers — anything that keeps the brain ticking.", img: readingImg },
  { title: "Volleyball", desc: "Played at the inter-university level — love the speed, the spikes, and the team energy.", img: volleyballImg },
  { title: "Doodling", desc: "Sketching out whatever's on my mind — ideas, characters, random shapes that turn into stories.", img: doodlingImg },
  { title: "Coding", desc: "Always hunting for something new to build, break, and learn from.", img: codingImg },
];

export function Hobbies() {
  return (
    <section className="px-6 sm:px-12 lg:px-20 py-16 max-w-7xl mx-auto">
      <h2 className="text-3xl sm:text-4xl">Hobbies</h2>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {HOBBIES.map((h) => (
          <article
            key={h.title}
            className="rounded-xl border border-border bg-card overflow-hidden hover:border-primary/60 transition-colors"
          >
            <div className="h-40 bg-background overflow-hidden">
              <img
                src={h.img}
                alt={h.title}
                className="w-full h-full object-cover grayscale"
              />
            </div>
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
