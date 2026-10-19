import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { SectionHeader } from "./Section";

const items = [
  { quote: "ULB TV turned our launch into a movement. Their storytelling is unmatched on the continent.", name: "Amina Kone", role: "Founder, Nyota AI" },
  { quote: "From podcast to documentary, the production quality rivals international platforms.", name: "Kwame Osei", role: "CEO, Baobab Pay" },
  { quote: "They don't just cover African tech — they amplify it with rare cinematic ambition.", name: "Fatou Diop", role: "Director, Sahel Labs" },
  { quote: "The most polished tech media brand built from and for Africa, full stop.", name: "Joseph Mwangi", role: "CTO, Karibu Cloud" },
];

export function Testimonials() {
  return (
    <section className="relative py-32">
      <div className="container mx-auto px-6">
        <SectionHeader
          eyebrow="Testimonials"
          title={<>Trusted by <span className="text-gradient">founders & creators.</span></>}
        />

        <div className="grid md:grid-cols-2 gap-5">
          {items.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card glow-border rounded-3xl p-8 relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/20" />
              <p className="text-lg leading-relaxed mb-6">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center font-display font-bold text-white shadow-[var(--shadow-glow)]">
                  {t.name[0]}
                </div>
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
