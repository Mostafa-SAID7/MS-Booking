import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";

const ContactSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="contact" className="py-28 lg:py-36 bg-card">
      <div ref={ref} className="max-w-3xl mx-auto section-padding scroll-reveal text-center space-y-8">
        <p className="text-sm font-medium tracking-widest uppercase text-accent">
          Get In Touch
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground text-balance leading-tight">
          Have a project in mind? Let's create something amazing together
        </h2>
        <p className="text-muted-foreground text-lg max-w-lg mx-auto">
          I'm always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a
            href="mailto:hello@yourname.com"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-accent text-accent-foreground font-medium transition-transform duration-200 hover:scale-[1.03] active:scale-[0.97]"
          >
            <Mail size={18} />
            Say Hello
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border-2 border-foreground/15 text-foreground font-medium transition-transform duration-200 hover:scale-[1.03] active:scale-[0.97]"
          >
            View Resume
            <ArrowUpRight size={18} />
          </a>
        </div>

        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground pt-6">
          <MapPin size={16} />
          <span>Available worldwide · Remote friendly</span>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
