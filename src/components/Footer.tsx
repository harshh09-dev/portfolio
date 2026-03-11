const Footer = () => {
  return (
    <footer className="border-t border-border px-6 py-10 md:px-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-sm text-muted-foreground">
          © 2025 Anjali Kamal. All rights reserved.
        </p>
        <div className="flex gap-6">
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
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
