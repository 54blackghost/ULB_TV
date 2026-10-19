import { motion } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";
import { SectionHeader } from "./Section";

const events = [
  { date: "JUN 12", title: "Africa AI Summit", location: "Nairobi, Kenya", days: 12, type: "Conference" },
  { date: "JUL 03", title: "Yaoundé Hackathon", location: "Yaoundé, Cameroon", days: 33, type: "Hackathon" },
  { date: "AUG 18", title: "Lagos Startup Week", location: "Lagos, Nigeria", days: 79, type: "Festival" },
  { date: "SEP 22", title: "Cape Town DevCon", location: "Cape Town, SA", days: 114, type: "Developer" },
];

export function Events() {
  return (
    <section id="events" className="relative py-32">
      <div className="container mx-auto px-6">
        <SectionHeader
          eyebrow="Tech events"
          title={<>Where Africa <span className="text-gradient">connects & builds.</span></>}
          subtitle="Conferences, hackathons, bootcamps and meetups. We cover them all."
        />

        <div className="grid md:grid-cols-2 gap-5">
          {events.map((e, i) => (
            <motion.div
              key={e.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card glow-border rounded-3xl p-7 flex gap-6 items-center"
            >
              <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-primary flex flex-col items-center justify-center text-white shadow-[var(--shadow-glow)]">
                <span className="text-[10px] font-mono tracking-widest">{e.date.split(" ")[0]}</span>
                <span className="text-2xl font-display font-bold">{e.date.split(" ")[1]}</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[10px] font-mono tracking-widest text-cyan-glow mb-1.5">{e.type.toUpperCase()}</div>
                <h3 className="text-xl font-semibold mb-2">{e.title}</h3>
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                  <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{e.location}</span>
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />in {e.days} days</span>
                </div>
                <button className="text-sm px-4 py-2 rounded-full bg-gradient-primary text-white font-medium hover:opacity-90 transition">
                  Register
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
