const socials = [
  { label: "Behance", href: "#" },
  { label: "Dribbble", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "LinkedIn", href: "#" },
];

const Footer = () => {
  return (
    <footer className="py-10 bg-foreground text-primary-foreground">
      <div className="max-w-7xl mx-auto section-padding flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-sm opacity-70">
          © {new Date().getFullYear()} Portfolio. All rights reserved.
        </p>
        <div className="flex gap-6">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              className="text-sm opacity-70 hover:opacity-100 transition-opacity duration-200"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
