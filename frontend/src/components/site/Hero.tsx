import { motion } from "framer-motion";
import { Play, Compass, Users, Brain, Mic, Code, Rocket, Radio, Newspaper, TrendingUp, Sparkles } from "lucide-react";
import heroBg from "/src/assets/hero-bg.jpg";

const floatingCards = [
  { icon: Brain, label: "AI", x: "8%", y: "20%", delay: 0 },
  { icon: Mic, label: "Podcasts", x: "85%", y: "18%", delay: 0.3 },
  { icon: Code, label: "Coding", x: "5%", y: "65%", delay: 0.6 },
  { icon: Rocket, label: "Startups", x: "88%", y: "60%", delay: 0.9 },
  { icon: Radio, label: "Livestreams", x: "12%", y: "45%", delay: 1.2 },
  { icon: Newspaper, label: "Tech News", x: "82%", y: "40%", delay: 1.5 },
  { icon: TrendingUp, label: "Visibility", x: "15%", y: "82%", delay: 1.8 },
  { icon: Sparkles, label: "Creators", x: "80%", y: "80%", delay: 2.1 },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt=""
          width={1920}
          height={1080}
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/70 to-background" />
        <div className="absolute inset-0 grid-pattern opacity-40" />
      </div>

      {/* Glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/20 blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-cyan-glow/20 blur-[100px]" />

      {/* Floating cards */}
      {floatingCards.map((card, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: card.delay, duration: 0.8 }}
          style={{ left: card.x, top: card.y }}
          className="absolute hidden md:flex items-center gap-2 glass-card rounded-2xl px-4 py-3 z-10 animate-float"
        >
          <card.icon className="w-4 h-4 text-cyan-glow" />
          <span className="text-xs font-medium">{card.label}</span>
        </motion.div>
      ))}

      {/* Content */}
      <div className="container mx-auto px-6 relative z-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-glow animate-pulse" />
          <span className="text-xs font-medium tracking-wider uppercase text-muted-foreground">
            African Tech Media Platform
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-6 glow-text"
        >
          AFRICA BUILDS<br />
          THE <span className="text-gradient">FUTURE.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
        >
          ULB TV is a modern African technology media platform that informs, educates
          and showcases the innovators building tomorrow.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="#media"
            className="group inline-flex items-center gap-2 px-7 py-4 rounded-full bg-gradient-primary text-primary-foreground font-medium shadow-[var(--shadow-glow)] hover:shadow-[0_0_80px_oklch(0.58_0.24_265/0.7)] transition-all"
          >
            <Play className="w-4 h-4 fill-current" /> Watch Content
          </a>
          <a
            href="#startups"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full glass font-medium hover:border-primary transition-all"
          >
            <Compass className="w-4 h-4" /> Explore Ecosystem
          </a>
          <a
            href="#community"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full glass font-medium hover:border-cyan-glow transition-all"
          >
            <Users className="w-4 h-4" /> Join Community
          </a>
        </motion.div>
      </div>
    </section>
  );
}
