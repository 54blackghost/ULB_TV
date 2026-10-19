import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "./Section";

const startups = [
  { name: "Nyota", founder: "Amina K.", country: "Cameroon", industry: "AI", stage: "Seed", desc: "Conversational AI for African languages." },
  { name: "Baobab Pay", founder: "Kwame O.", country: "Ghana", industry: "Fintech", stage: "Series A", desc: "Mobile payments for the unbanked." },
  { name: "Sahel Labs", founder: "Fatou D.", country: "Senegal", industry: "Climate Tech", stage: "Pre-seed", desc: "Solar microgrids for rural communities." },
  { name: "Karibu Cloud", founder: "Joseph M.", country: "Kenya", industry: "DevTools", stage: "Seed", desc: "Edge cloud built for African latency." },
  { name: "Pixel Africa", founder: "Naledi T.", country: "South Africa", industry: "Creator Tools", stage: "Seed", desc: "Monetization platform for creators." },
  { name: "Mango Health", founder: "Chibuzo E.", country: "Nigeria", industry: "Health", stage: "Series A", desc: "Telemedicine for emerging markets." },
];

export function Startups() {
  return (
    <section id="startups" className="relative py-32">
      <div className="container mx-auto px-6">
        <SectionHeader
          eyebrow="Featured startups"
          title={<>The builders shaping <span className="text-gradient">Africa's future.</span></>}
          subtitle="Founders, engineers and innovators redefining what's possible across the continent."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {startups.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.1 }}
              className="glass-card glow-border rounded-2xl p-6 group cursor-pointer"
            >
              <div className="flex items-start justify-between mb-5">
                <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center text-xl font-display font-bold shadow-[var(--shadow-glow)]">
                  {s.name[0]}
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:rotate-45 transition-all" />
              </div>
              <h3 className="text-xl font-semibold mb-1">{s.name}</h3>
              <p className="text-xs text-muted-foreground mb-3">
                {s.founder} • {s.country}
              </p>
              <p className="text-sm text-muted-foreground mb-5 leading-relaxed">{s.desc}</p>
              <div className="flex gap-2 flex-wrap">
                <span className="text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-primary/15 text-primary border border-primary/20">
                  {s.industry}
                </span>
                <span className="text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-cyan-glow/15 text-cyan-glow border border-cyan-glow/20">
                  {s.stage}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
