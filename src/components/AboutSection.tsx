import { useScrollReveal } from "@/hooks/useScrollReveal";
import aboutImage from "@/assets/about-illustration.png";

const stats = [
  { number: "4+", label: "Years Experience" },
  { number: "86", label: "Projects Done" },
  { number: "32", label: "Happy Clients" },
];

const AboutSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="about" className="py-28 lg:py-36 bg-card">
      <div ref={ref} className="max-w-7xl mx-auto section-padding scroll-reveal grid lg:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <div className="relative flex justify-center">
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-accent/10 -rotate-3" />
            <img
              src={aboutImage}
              alt="Creative workspace illustration"
              className="relative rounded-2xl w-full max-w-md"
              loading="lazy"
            />
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6">
          <p className="text-sm font-medium tracking-widest uppercase text-accent">
            About Me
          </p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold leading-tight text-foreground text-balance">
            I turn concepts into compelling visual stories
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-lg">
            I'm a freelance illustrator and visual designer with a passion for
            creating artwork that connects with people. From character design to
            editorial illustrations, I work across styles to find the perfect
            visual language for every project.
          </p>
          <p className="text-muted-foreground leading-relaxed max-w-lg">
            My process is collaborative — I believe the best results come from
            listening closely, iterating openly, and delivering work that
            exceeds expectations.
          </p>

          {/* Stats */}
          <div className="flex gap-10 pt-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-display font-bold text-foreground tabular-nums">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
