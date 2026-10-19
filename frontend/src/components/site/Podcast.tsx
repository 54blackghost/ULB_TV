import { motion } from "framer-motion";
import { Play, Mic, Radio } from "lucide-react";
import { SectionHeader } from "./Section";

const episodes = [
  { num: "042", title: "Building Fintech in Lagos", guest: "Tunde A.", duration: "48:21" },
  { num: "041", title: "African AI Founders Roundtable", guest: "Multiple", duration: "52:10" },
  { num: "040", title: "From Bootstrapped to Series A", guest: "Sarah M.", duration: "61:45" },
  { num: "039", title: "Mobile-first Market Strategy", guest: "Jean P.", duration: "44:02" },
  { num: "038", title: "Web3 in Africa: Hype or Future?", guest: "Marcus K.", duration: "55:18" },
];

export function Podcast() {
  return (
    <section className="relative py-32">
      <div className="container mx-auto px-6">
        <SectionHeader
          eyebrow="Audio & Live"
          title={<>Podcasts & <span className="text-gradient">livestreams.</span></>}
          subtitle="Stories, interviews and live conversations with the people building African tech."
        />

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Now playing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1 glass-card rounded-3xl p-7 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-primary opacity-15" />
            <div className="relative">
              <div className="flex items-center gap-2 text-xs text-cyan-glow font-mono tracking-widest mb-6">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" /> LIVE NOW
              </div>
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary to-cyan-glow mb-6 flex items-center justify-center shadow-[var(--shadow-glow)]">
                <Radio className="w-16 h-16 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-1">Founders Live Q&A</h3>
              <p className="text-sm text-muted-foreground mb-5">With Amina K. & Kwame O.</p>

              {/* Waveform */}
              <div className="flex items-center gap-1 h-12 mb-5">
                {Array.from({ length: 40 }).map((_, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-gradient-primary rounded-full animate-pulse"
                    style={{
                      height: `${20 + Math.sin(i * 0.5) * 30 + Math.random() * 40}%`,
                      animationDelay: `${i * 0.05}s`,
                    }}
                  />
                ))}
              </div>

              <button className="w-full py-3 rounded-full bg-gradient-primary text-white font-medium flex items-center justify-center gap-2 shadow-[var(--shadow-glow)]">
                <Play className="w-4 h-4 fill-current" /> Tune in
              </button>
            </div>
          </motion.div>

          {/* Episodes list */}
          <div className="lg:col-span-2 glass-card rounded-3xl p-7">
            <div className="flex items-center gap-2 mb-6">
              <Mic className="w-5 h-5 text-cyan-glow" />
              <h3 className="text-xl font-semibold">Latest episodes</h3>
            </div>
            <div className="divide-y divide-border">
              {episodes.map((ep, i) => (
                <motion.div
                  key={ep.num}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-4 py-4 group cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-xl glass flex items-center justify-center group-hover:bg-gradient-primary transition-all flex-shrink-0">
                    <Play className="w-4 h-4 text-cyan-glow group-hover:text-white fill-current" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[10px] font-mono tracking-widest text-muted-foreground mb-0.5">EP {ep.num}</div>
                    <h4 className="font-medium truncate group-hover:text-primary transition-colors">{ep.title}</h4>
                    <p className="text-xs text-muted-foreground">with {ep.guest}</p>
                  </div>
                  <span className="text-xs text-muted-foreground font-mono">{ep.duration}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
