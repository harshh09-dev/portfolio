import ScrollReveal from "./ScrollReveal";
import { Parallax } from "./ScrollReveal";

const FounderSection = () => {
  return (
    <section className="px-6 py-32 md:px-16">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal scale>
          <div className="overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all duration-500 hover:border-primary/30 hover:shadow-[0_0_80px_-20px_hsl(330,80%,60%,0.08)] md:p-12">
            <div className="grid items-center gap-10 md:grid-cols-2">
              <div>
                <ScrollReveal delay={0.1} direction="left">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-sm font-bold text-foreground mb-4">
                    AK
                  </div>
                  <h3 className="text-3xl font-bold text-foreground md:text-4xl">
                    Crafting <span className="text-primary">scalable</span> systems
                  </h3>
                  <p className="mt-2 font-mono text-sm text-muted-foreground">
                    {"< Full Stack Developer />"}
                  </p>
                </ScrollReveal>
              </div>

              <Parallax speed={0.1}>
                <ScrollReveal delay={0.2} direction="right" scale>
                  <div className="w-full max-w-sm overflow-hidden rounded-xl border border-border shadow-lg mx-auto">
                    <img
                      src="https://aversee.vercel.app/cyber-security-experts-working-with-tech-devices-neon-lights.jpg"
                      alt="Tech workspace"
                      className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                </ScrollReveal>
              </Parallax>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FounderSection;
