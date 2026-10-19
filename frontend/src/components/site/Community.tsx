import { motion } from "framer-motion";
import { MessageCircle, Send, Users } from "lucide-react";

export function Community() {
  return (
    <section id="community" className="relative py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden glass-card p-10 lg:p-20 text-center"
        >
          <div className="absolute inset-0 bg-gradient-primary opacity-10" />
          <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-primary/30 blur-[150px] animate-pulse-glow" />
          <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-cyan-glow/30 blur-[150px]" />

          <div className="relative">
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-6">
              <Users className="w-3 h-3 text-cyan-glow" />
              <span className="text-xs font-medium uppercase tracking-wider">50K+ members</span>
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Join Africa's most <br />
              <span className="text-gradient">connected tech community.</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
              Founders, engineers, designers, creators — building the future together. Get exclusive content, early access and a seat at the table.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <a href="#" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-primary text-white font-medium shadow-[var(--shadow-glow)]">
                <MessageCircle className="w-4 h-4" /> Join Discord
              </a>
              <a href="https://wa.me/237678994026" className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass font-medium hover:border-cyan-glow">
                <Send className="w-4 h-4" /> WhatsApp Group
              </a>
            </div>

            <form className="max-w-md mx-auto flex gap-2 glass rounded-full p-1.5">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-transparent px-5 py-2.5 text-sm outline-none placeholder:text-muted-foreground"
              />
              <button className="px-5 py-2.5 rounded-full bg-gradient-primary text-white text-sm font-medium">
                Subscribe
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
