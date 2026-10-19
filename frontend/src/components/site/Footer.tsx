import { Play, Youtube, Facebook, Instagram, Linkedin } from "lucide-react";

const cols = [
  { title: "Platform", links: ["About", "Services", "Media", "Startups"] },
  { title: "Content", links: ["Podcasts", "Livestreams", "Events", "Education"] },
  { title: "Community", links: ["Discord", "WhatsApp", "Newsletter", "Creators"] },
];

const Footer = () => {
  return (
    <footer className="relative pt-20 pb-10 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-9 h-9 rounded-lg bg-gradient-primary flex items-center justify-center shadow-[var(--shadow-glow)]">
                <Play className="w-4 h-4 text-white fill-white" />
              </div>
              <span className="font-display font-bold text-xl">
                ULB <span className="text-gradient">TV</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground max-w-sm mb-5 leading-relaxed">
              The modern African technology media platform. Informing, educating
              and showcasing the innovators of tomorrow.
            </p>
            <div className="flex gap-3">
              {[Youtube, Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-lg glass flex items-center justify-center hover:bg-gradient-primary transition-all">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="font-semibold text-sm mb-4">{c.title}</h4>
              <ul className="space-y-3">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} ULB TV. Built in Africa, for the world.</p>
          <p className="text-xs text-muted-foreground">ulbgroup8@gmail.com • +237 678 994 026</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer