import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="text-center max-w-3xl mx-auto mb-16"
    >
      {eyebrow && (
        <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-5">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-glow" />
          <span className="text-xs font-medium tracking-wider uppercase text-muted-foreground">
            {eyebrow}
          </span>
        </div>
      )}
      <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-5 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-muted-foreground">{subtitle}</p>
      )}
    </motion.div>
  );
}
