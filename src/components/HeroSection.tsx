import heroImage from "@/assets/hero-creative.png";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-hero-bg pt-20"
    >
      <div className="max-w-7xl mx-auto w-full section-padding grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: Text */}
        <div className="space-y-6">
          <p
            className="text-sm font-medium tracking-widest uppercase text-accent opacity-0 animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            Creative Illustrator
          </p>

          <h1
            className="text-5xl sm:text-6xl lg:text-[5.5rem] font-display font-bold leading-[0.92] tracking-tight text-foreground opacity-0 animate-fade-up text-balance"
            style={{ animationDelay: "0.25s" }}
          >
            P<span className="inline-block w-[0.65em] h-[0.65em] rounded-full border-[5px] border-foreground relative -top-1" />rtf
            <span className="text-accent">o</span>lio
          </h1>

          <p
            className="text-muted-foreground text-lg max-w-md leading-relaxed opacity-0 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            Bringing ideas to life through bold illustration, vivid color, and
            thoughtful visual storytelling.
          </p>

          <div
            className="flex flex-wrap gap-4 pt-2 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.55s" }}
          >
            <a
              href="#work"
              className="inline-flex items-center px-7 py-3.5 rounded-full bg-accent text-accent-foreground font-medium transition-transform duration-200 hover:scale-[1.03] active:scale-[0.97]"
            >
              View My Work
            </a>
            <a
              href="#about"
              className="inline-flex items-center px-7 py-3.5 rounded-full border-2 border-foreground/15 text-foreground font-medium transition-transform duration-200 hover:scale-[1.03] active:scale-[0.97]"
            >
              About Me
            </a>
          </div>
        </div>

        {/* Right: Illustration */}
        <div
          className="relative flex justify-center lg:justify-end opacity-0 animate-slide-left"
          style={{ animationDelay: "0.35s" }}
        >
          <img
            src={heroImage}
            alt="Creative illustration with design tools"
            className="w-full max-w-lg animate-float"
            loading="eager"
          />
        </div>
      </div>

      {/* Decorative shapes */}
      <div className="absolute top-24 left-[10%] w-4 h-4 rounded-full bg-accent/40 animate-float" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-32 left-[15%] w-3 h-3 rounded bg-teal/40 animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute top-40 right-[8%] w-5 h-5 rounded bg-accent/20 rotate-45 animate-float" style={{ animationDelay: "1.5s" }} />
    </section>
  );
};

export default HeroSection;
