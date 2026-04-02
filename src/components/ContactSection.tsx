import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Instagram, ArrowUpRight } from "lucide-react";
import MagneticButton from "./MagneticButton";

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/anjalikamal-ak3105/", icon: Linkedin },
  { label: "GitHub", href: "https://github.com/A-verse", icon: Github },
  { label: "Instagram", href: "https://instagram.com/anjalikamal3105", icon: Instagram },
];

const ContactSection = () => {
  return (
    <section className="px-6 py-32 md:px-16">
      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
            <span className="h-3 w-3 rounded-full bg-primary animate-pulse" />
          </div>
          <p className="text-sm font-medium text-primary">Available for work</p>
          <h2 className="mt-4 text-3xl font-bold text-foreground md:text-5xl">
            Let's build something{" "}
            <span className="font-display italic">interesting together.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm text-muted-foreground">
            Whether it's a project, collaboration, or just a conversation about technology and creativity — I'd love to connect.
          </p>

          {/* Email */}
          <MagneticButton strength={0.1}>
            <a
              href="mailto:anjalikamal3105@gmail.com"
              className="mt-8 inline-flex items-center gap-3 rounded-full border border-border bg-card px-8 py-4 text-lg font-medium text-foreground transition-all hover:border-primary hover:shadow-[0_0_30px_-8px_hsl(142,71%,45%,0.3)]"
            >
              <Mail className="h-5 w-5 text-primary" />
              anjalikamal3105@gmail.com
            </a>
          </MagneticButton>

          {/* Social links */}
          <div className="mt-8 flex justify-center gap-4">
            {socials.map((social) => (
              <MagneticButton key={social.label} strength={0.15}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-muted-foreground transition-all hover:border-primary hover:text-primary"
                >
                  <social.icon className="h-4 w-4" />
                  {social.label}
                </a>
              </MagneticButton>
            ))}
          </div>

          {/* Get In Touch CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-10"
          >
            <MagneticButton strength={0.15}>
              <a
                href="mailto:anjalikamal3105@gmail.com"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-10 py-4 text-sm font-bold text-primary-foreground transition-all hover:shadow-[0_0_30px_-6px_hsl(142,71%,45%,0.5)]"
              >
                Get In Touch
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </MagneticButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
