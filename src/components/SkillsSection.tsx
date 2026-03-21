import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Palette, PenTool, Monitor, Layers, Sparkles, Image } from "lucide-react";

const skills = [
  { icon: PenTool, title: "Illustration", desc: "Hand-drawn & digital illustrations for any medium" },
  { icon: Palette, title: "Color & Composition", desc: "Expert color theory and visual hierarchy" },
  { icon: Layers, title: "Character Design", desc: "Original characters with personality and depth" },
  { icon: Monitor, title: "UI Illustration", desc: "Custom visuals for apps and websites" },
  { icon: Image, title: "Editorial Art", desc: "Magazine, book & article illustrations" },
  { icon: Sparkles, title: "Brand Illustration", desc: "Unique visual systems for brand identity" },
];

const SkillsSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="skills" className="py-28 lg:py-36 bg-section-alt">
      <div className="max-w-7xl mx-auto section-padding">
        <div ref={ref} className="scroll-reveal space-y-4 mb-16 text-center">
          <p className="text-sm font-medium tracking-widest uppercase text-accent">
            What I Do
          </p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground text-balance">
            Skills & expertise
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((skill, i) => (
            <SkillCard key={skill.title} skill={skill} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

function SkillCard({
  skill,
  index,
}: {
  skill: (typeof skills)[0];
  index: number;
}) {
  const ref = useScrollReveal();
  const Icon = skill.icon;

  return (
    <div
      ref={ref}
      className="scroll-reveal bg-card rounded-2xl p-7 transition-shadow duration-300 hover:shadow-lg"
      style={{ transitionDelay: `${index * 70}ms` }}
    >
      <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-4">
        <Icon size={22} />
      </div>
      <h3 className="font-display font-semibold text-foreground mb-2">
        {skill.title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {skill.desc}
      </p>
    </div>
  );
}

export default SkillsSection;
