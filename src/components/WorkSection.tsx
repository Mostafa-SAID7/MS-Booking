import { useScrollReveal } from "@/hooks/useScrollReveal";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Enchanted Forest",
    category: "Digital Illustration",
    image: project1,
  },
  {
    title: "Solara Brand Identity",
    category: "Branding & Design",
    image: project2,
  },
  {
    title: "Robo Friends",
    category: "Character Design",
    image: project3,
  },
  {
    title: "Nature & Code",
    category: "Editorial Illustration",
    image: project4,
  },
];

const WorkSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="work" className="py-28 lg:py-36 bg-background">
      <div className="max-w-7xl mx-auto section-padding">
        <div ref={ref} className="scroll-reveal space-y-4 mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-accent">
            Selected Work
          </p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground text-balance">
            Recent projects I'm proud of
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const ref = useScrollReveal();

  return (
    <div
      ref={ref}
      className="scroll-reveal project-card group cursor-pointer"
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="overflow-hidden rounded-t-2xl">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-64 sm:h-80 object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          loading="lazy"
        />
      </div>
      <div className="p-6 flex items-center justify-between">
        <div>
          <h3 className="font-display font-semibold text-lg text-foreground">
            {project.title}
          </h3>
          <p className="text-sm text-muted-foreground mt-1">
            {project.category}
          </p>
        </div>
        <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground transition-all duration-200 group-hover:bg-accent group-hover:text-accent-foreground group-hover:border-accent">
          <ArrowUpRight size={18} />
        </div>
      </div>
    </div>
  );
}

export default WorkSection;
