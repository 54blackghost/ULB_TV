import { motion } from "framer-motion";
import { Code2, Brain, Globe, Smartphone, Sparkles, BarChart3 } from "lucide-react";
import { SectionHeader } from "./Section";

const tracks = [
  { icon: Code2, title: "Coding Foundations", lessons: 42, level: "Beginner" },
  { icon: Brain, title: "AI & Machine Learning", lessons: 38, level: "Intermediate" },
  { icon: Globe, title: "Web Development", lessons: 56, level: "All levels" },
  { icon: Smartphone, title: "Mobile Engineering", lessons: 34, level: "Intermediate" },
  { icon: Sparkles, title: "Creator Economy 101", lessons: 22, level: "Beginner" },
  { icon: BarChart3, title: "Digital Marketing", lessons: 28, level: "All levels" },
];

export function Education() {
  return (
    <section id="education" className="relative py-32">
      <div className="container mx-auto px-6">
        <SectionHeader
          eyebrow="Learn with ULB TV"
          title={<>Educational content for the <span className="text-gradient">next generation.</span></>}
          subtitle="From your first line of code to launching your AI product — we've got a track for you."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {tracks.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.1 }}
              className="glass-card glow-border rounded-2xl p-6 relative overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-primary/10 blur-2xl group-hover:bg-primary/30 transition" />
              <div className="relative">
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl bg-gradient-primary flex items-center justify-center shadow-[var(--shadow-glow)]">
                    <t.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-[10px] uppercase tracking-wider text-muted-foreground">{t.level}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{t.title}</h3>
                <p className="text-sm text-muted-foreground">{t.lessons} lessons • Free access</p>
                <div className="mt-5 h-1 rounded-full bg-secondary overflow-hidden">
                  <div className="h-full bg-gradient-primary" style={{ width: `${30 + i * 10}%` }} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
