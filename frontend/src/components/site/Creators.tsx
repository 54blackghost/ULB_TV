import { motion } from "framer-motion";
import { Heart, Eye, Users } from "lucide-react";
import { SectionHeader } from "./Section";

const creators = [
  { name: "Zara N.", role: "AI Educator", followers: "128K", views: "4.2M", hue: "from-blue-500 to-cyan-400" },
  { name: "Diego K.", role: "Full-stack Dev", followers: "96K", views: "2.8M", hue: "from-indigo-500 to-blue-400" },
  { name: "Aisha B.", role: "Product Designer", followers: "212K", views: "6.1M", hue: "from-purple-500 to-blue-400" },
  { name: "Samuel O.", role: "Startup Storyteller", followers: "78K", views: "1.9M", hue: "from-cyan-500 to-teal-400" },
];

export function Creators() {
  return (
    <section className="relative py-32">
      <div className="container mx-auto px-6">
        <SectionHeader
          eyebrow="Creator economy"
          title={<>African creators, <span className="text-gradient">global stage.</span></>}
          subtitle="Designers, developers, educators and influencers — we help them grow and monetize."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {creators.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card glow-border rounded-2xl p-6 text-center"
            >
              <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${c.hue} mx-auto mb-4 flex items-center justify-center text-2xl font-display font-bold text-white shadow-[var(--shadow-glow)]`}>
                {c.name[0]}
              </div>
              <h3 className="font-semibold">{c.name}</h3>
              <p className="text-xs text-muted-foreground mb-5">{c.role}</p>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="glass rounded-lg p-2">
                  <div className="flex items-center justify-center gap-1 text-cyan-glow mb-1"><Users className="w-3 h-3" /></div>
                  <div className="font-mono font-semibold">{c.followers}</div>
                </div>
                <div className="glass rounded-lg p-2">
                  <div className="flex items-center justify-center gap-1 text-cyan-glow mb-1"><Eye className="w-3 h-3" /></div>
                  <div className="font-mono font-semibold">{c.views}</div>
                </div>
              </div>
              <button className="mt-5 text-xs px-4 py-2 rounded-full glass hover:border-primary transition w-full flex items-center justify-center gap-1.5">
                <Heart className="w-3 h-3" /> Collaborate
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
