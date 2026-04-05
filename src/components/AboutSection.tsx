import ScrollReveal from "./ScrollReveal";
import { Parallax } from "./ScrollReveal";

const AboutSection = () => {
  return (
    <section className="px-6 py-32 md:px-16">
      <div className="mx-auto max-w-5xl">
        <ScrollReveal>
          <p className="section-label text-primary">A little about me</p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="mt-4 text-3xl font-bold leading-tight text-foreground md:text-5xl">
            Nice to meet you. I'm <span className="text-primary">Anjali</span>
          </h2>
        </ScrollReveal>

        <div className="mt-12 grid gap-12 md:grid-cols-2">
          <Parallax speed={0.15}>
            <ScrollReveal direction="left" scale>
              <div className="overflow-hidden rounded-2xl">
                <img
                  src="https://aversee.vercel.app/cyber-security-experts-working-with-tech-devices-neon-lights.jpg"
                  alt="Working with tech devices"
                  className="w-full object-cover rounded-2xl transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
              </div>
            </ScrollReveal>
          </Parallax>

          <div className="flex flex-col justify-center space-y-4 text-muted-foreground">
            <ScrollReveal delay={0.1}>
              <p>
                I'm Anjali Kamal, a BTech student at IIIT Jabalpur passionate about building full-stack applications that combine clean architecture with great user experiences.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p>
                My work spans across full-stack web development, system design, and creative writing. I enjoy transforming complex problems into elegant, scalable solutions.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <p>
                Apart from coding, I love photography, creative writing and exploring ideas that blend technology with storytelling. Currently I'm building projects that solve real-world problems and exploring freelancing opportunities.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="flex gap-4 pt-4">
                {[
                  { label: "LinkedIn", href: "https://www.linkedin.com/in/anjalikamal-ak3105/" },
                  { label: "GitHub", href: "https://github.com/A-verse" },
                  { label: "Instagram", href: "https://instagram.com/anjalikamal3105" },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-border px-4 py-2 text-xs font-medium text-muted-foreground transition-all duration-300 hover:border-primary hover:text-primary hover:shadow-[0_0_20px_-8px_hsl(330,80%,60%,0.3)]"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
