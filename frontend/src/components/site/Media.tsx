import { motion } from "framer-motion";
import { Play, Clock } from "lucide-react";
import { SectionHeader } from "./Section";

const rows = [
  {
    title: "Podcasts",
    items: [
      { tag: "EP 042", title: "Building Fintech in Lagos", duration: "48 min", hue: "from-blue-500/30 to-cyan-400/20" },
      { tag: "EP 041", title: "African AI Founders", duration: "52 min", hue: "from-indigo-500/30 to-blue-400/20" },
      { tag: "EP 040", title: "From Bootstrapped to Series A", duration: "61 min", hue: "from-cyan-500/30 to-teal-400/20" },
      { tag: "EP 039", title: "Mobile-first Markets", duration: "44 min", hue: "from-purple-500/30 to-blue-400/20" },
    ],
  },
  {
    title: "Startup Stories",
    items: [
      { tag: "STORY", title: "Inside Yango Africa", duration: "12 min", hue: "from-blue-500/30 to-purple-400/20" },
      { tag: "STORY", title: "How Flutterwave Scaled", duration: "15 min", hue: "from-cyan-500/30 to-blue-400/20" },
      { tag: "STORY", title: "Andela's Engineering Culture", duration: "18 min", hue: "from-teal-500/30 to-cyan-400/20" },
      { tag: "STORY", title: "Building Wave from Dakar", duration: "14 min", hue: "from-indigo-500/30 to-cyan-400/20" },
    ],
  },
  {
    title: "AI & Tech Tutorials",
    items: [
      { tag: "TUTORIAL", title: "Fine-tuning LLMs in Africa", duration: "32 min", hue: "from-blue-500/30 to-cyan-400/20" },
      { tag: "TUTORIAL", title: "Edge AI on Mobile", duration: "26 min", hue: "from-purple-500/30 to-blue-400/20" },
      { tag: "DOC", title: "The State of African Tech", duration: "1h 12m", hue: "from-cyan-500/30 to-teal-400/20" },
      { tag: "LIVE", title: "Founders Live Q&A", duration: "Live now", hue: "from-blue-500/30 to-indigo-400/20" },
    ],
  },
];

export function Media() {
  return (
    <section id="media" className="relative py-32">
      <div className="container mx-auto px-6">
        <SectionHeader
          eyebrow="Cinematic content"
          title={<>Watch the <span className="text-gradient">future unfold.</span></>}
          subtitle="Podcasts, interviews, livestreams and documentaries — all in one premium media space."
        />

        <div className="space-y-12">
          {rows.map((row) => (
            <div key={row.title}>
              <h3 className="font-display text-2xl font-semibold mb-5">{row.title}</h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {row.items.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    whileHover={{ y: -8 }}
                    className="group relative aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer glass-card"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.hue}`} />
                    <div className="absolute inset-0 grid-pattern opacity-30" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />

                    {/* Play button on hover */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="w-14 h-14 rounded-full bg-gradient-primary flex items-center justify-center shadow-[var(--shadow-glow)] scale-90 group-hover:scale-100 transition-transform">
                        <Play className="w-5 h-5 text-white fill-white ml-0.5" />
                      </div>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <div className="text-[10px] font-mono tracking-widest text-cyan-glow mb-2">
                        {item.tag}
                      </div>
                      <h4 className="font-semibold text-base mb-2 leading-snug">{item.title}</h4>
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Clock className="w-3 h-3" /> {item.duration}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
