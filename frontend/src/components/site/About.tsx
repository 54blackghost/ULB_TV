import { motion } from "framer-motion";
import { Target, Eye, Zap } from "lucide-react";
import { SectionHeader } from "./Section";

const pillars = [
  {
    icon: Target,
    title: "Mission",
    text: "Inform, educate and amplify the voices of African innovators shaping the digital era.",
  },
  {
    icon: Eye,
    title: "Vision",
    text: "Become the reference media platform for African technology, startups and digital creativity.",
  },
  {
    icon: Zap,
    title: "Impact",
    text: "Build visibility for founders, creators and engineers — and accelerate the African tech ecosystem.",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-32">
      <div className="container mx-auto px-6">
        <SectionHeader
          eyebrow="About ULB TV"
          title={<>The voice of the <span className="text-gradient">African tech ecosystem.</span></>}
          subtitle="A next-generation African technology media platform dedicated to innovation, startups, software engineering, AI and digital creators."
        />

        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card glow-border rounded-3xl p-8"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 shadow-[var(--shadow-glow)]">
                <p.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">{p.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{p.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
