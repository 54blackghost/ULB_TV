import { motion } from "framer-motion";
import { Phone, Mail, Youtube, Facebook, Instagram, Linkedin, Send } from "lucide-react";
import { SectionHeader } from "./Section";

const socials = [
  { icon: Youtube, label: "YouTube", href: "#" },
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-32">
      <div className="container mx-auto px-6">
        <SectionHeader
          eyebrow="Get in touch"
          title={<>Let's build the <span className="text-gradient">next story.</span></>}
          subtitle="Founder, creator, brand or partner — we'd love to hear from you."
        />

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Info card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-8 lg:p-10 relative overflow-hidden"
          >
            <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-primary/20 blur-[100px]" />
            <div className="relative space-y-6">
              <div>
                <h3 className="font-display text-2xl font-semibold mb-2">Reach us directly</h3>
                <p className="text-sm text-muted-foreground">Available across Africa & beyond.</p>
              </div>

              <a href="tel:+237678994026" className="flex items-center gap-4 p-4 glass rounded-2xl hover:border-primary transition group">
                <div className="w-11 h-11 rounded-xl bg-gradient-primary flex items-center justify-center shadow-[var(--shadow-glow)]">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Call us</div>
                  <div className="font-medium">+237 678 994 026</div>
                </div>
              </a>

              <a href="mailto:ulbgroup8@gmail.com" className="flex items-center gap-4 p-4 glass rounded-2xl hover:border-primary transition group">
                <div className="w-11 h-11 rounded-xl bg-gradient-primary flex items-center justify-center shadow-[var(--shadow-glow)]">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Email</div>
                  <div className="font-medium">ulbgroup8@gmail.com</div>
                </div>
              </a>

              <a
                href="https://wa.me/237678994026"
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-gradient-primary text-white font-medium shadow-[var(--shadow-glow)]"
              >
                <Send className="w-4 h-4" /> Chat on WhatsApp
              </a>

              <div className="pt-2">
                <div className="text-xs uppercase tracking-wider text-muted-foreground mb-3">Follow us</div>
                <div className="flex gap-3">
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      aria-label={s.label}
                      className="w-11 h-11 rounded-xl glass flex items-center justify-center hover:bg-gradient-primary hover:border-transparent transition-all"
                    >
                      <s.icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-8 lg:p-10 space-y-5"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">Name</label>
                <input className="w-full glass rounded-xl px-4 py-3 text-sm outline-none focus:border-primary transition" placeholder="Your full name" />
              </div>
              <div>
                <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">Company</label>
                <input className="w-full glass rounded-xl px-4 py-3 text-sm outline-none focus:border-primary transition" placeholder="Your company" />
              </div>
            </div>
            <div>
              <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">Email</label>
              <input type="email" className="w-full glass rounded-xl px-4 py-3 text-sm outline-none focus:border-primary transition" placeholder="you@company.com" />
            </div>
            <div>
              <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">Project</label>
              <select className="w-full glass rounded-xl px-4 py-3 text-sm outline-none focus:border-primary transition">
                <option>Startup feature</option>
                <option>Podcast appearance</option>
                <option>Video production</option>
                <option>Event coverage</option>
                <option>Brand partnership</option>
              </select>
            </div>
            <div>
              <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">Message</label>
              <textarea rows={5} className="w-full glass rounded-xl px-4 py-3 text-sm outline-none focus:border-primary transition resize-none" placeholder="Tell us about your project..." />
            </div>
            <button className="w-full py-3.5 rounded-full bg-gradient-primary text-white font-medium shadow-[var(--shadow-glow)] hover:opacity-90 transition">
              Send message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
