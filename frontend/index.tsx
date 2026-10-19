
import { Navbar } from "@/components/site/Navbars";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/BlogCard";
import { Media } from "@/components/site/Media";
import { Startups } from "@/components/site/Startups";
import { Events } from "@/components/site/Events";
import { Education } from "@/components/site/Education";
import { Podcast } from "@/components/site/Podcast";
import { Creators } from "@/components/site/Creators";
import { Stats } from "@/components/site/Stats";
import { Testimonials } from "@/components/site/Testimonials";
import { Community } from "@/components/site/Community";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";



function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Media />
        <Startups />
        <Events />
        <Education />
        <Podcast />
        <Creators />
        <Stats />
        <Testimonials />
        <Community />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
