import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 1200, suffix: "+", label: "Videos Produced" },
  { value: 350, suffix: "+", label: "Startups Featured" },
  { value: 180, suffix: "+", label: "Podcast Episodes" },
  { value: 95, suffix: "+", label: "Tech Events Covered" },
  { value: 50, suffix: "K+", label: "Community Members" },
  { value: 28, suffix: "", label: "Countries Reached" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 2,
      onUpdate: (v) => setVal(Math.floor(v)),
    });
    return () => controls.stop();
  }, [inView, to]);
  return <span ref={ref}>{val.toLocaleString()}{suffix}</span>;
}

export function Stats() {
  return (
    <section className="relative py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-3xl p-10 lg:p-14 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-primary opacity-5" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-primary/20 blur-[120px]" />

          <div className="relative grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-4xl lg:text-5xl font-bold text-gradient mb-2">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
