import React from "react";
import { Button } from "@/components/Button";
import { ThemeToggle } from "@/components/ThemeToggle";

export const Footer = (): React.ReactElement => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { name: "Features", href: "#features" },
      { name: "Pricing", href: "#pricing" },
      { name: "Languages", href: "#languages" },
      { name: "Mobile App", href: "#mobile" },
      { name: "API", href: "#api" },
    ],
    company: [
      { name: "About Us", href: "#about" },
      { name: "Careers", href: "#careers" },
      { name: "Blog", href: "#blog" },
      { name: "Press", href: "#press" },
      { name: "Contact", href: "#contact" },
    ],
    resources: [
      { name: "Help Center", href: "#help" },
      { name: "Community", href: "#community" },
      { name: "Tutorials", href: "#tutorials" },
      { name: "Documentation", href: "#docs" },
      { name: "Status", href: "#status" },
    ],
    legal: [
      { name: "Privacy Policy", href: "#privacy" },
      { name: "Terms of Service", href: "#terms" },
      { name: "Cookie Policy", href: "#cookies" },
      { name: "GDPR", href: "#gdpr" },
      { name: "Accessibility", href: "#accessibility" },
    ],
  };

  const socialLinks = [
    { name: "Twitter", icon: "🐦", href: "#twitter" },
    { name: "Facebook", icon: "📘", href: "#facebook" },
    { name: "Instagram", icon: "📷", href: "#instagram" },
    { name: "LinkedIn", icon: "💼", href: "#linkedin" },
    { name: "YouTube", icon: "📺", href: "#youtube" },
    { name: "TikTok", icon: "🎵", href: "#tiktok" },
  ];

  return (
    <footer className="bg-card border-t border-border">
      {/* Newsletter section */}
      <div className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">
              Stay updated with language learning tips
            </h3>
            <p className="text-muted-foreground mb-8">
              Get weekly insights, new features, and exclusive content delivered
              to your inbox.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
              />
              <Button className="bg-brand-500 hover:bg-brand-600 text-white font-semibold px-6 py-3">
                Subscribe
              </Button>
            </div>

            <p className="text-xs text-muted-foreground mt-4">
              No spam, unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-brand-400 to-brand-600 flex items-center justify-center">
                <span className="text-xl">📚</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-brand-500 to-brand-600 bg-clip-text text-transparent">
                  Polyfy
                </h1>
                <p className="text-xs text-muted-foreground">
                  The Natural Way to Learn Languages
                </p>
              </div>
            </div>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              Empowering millions of learners worldwide to master new languages
              through innovative technology and proven learning methods.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-muted hover:bg-accent transition-colors duration-200 flex items-center justify-center text-lg"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links sections */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>© {currentYear} Polyfy. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <span className="flex items-center gap-1">
                Made with <span className="text-red-500">❤️</span> for language
                learners
              </span>
            </div>

            <div className="flex items-center gap-4">
              <ThemeToggle />
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>🌍</span>
                <select className="bg-transparent border-none text-muted-foreground focus:outline-none cursor-pointer">
                  <option value="en">English</option>
                  <option value="es">Español</option>
                  <option value="fr">Français</option>
                  <option value="de">Deutsch</option>
                  <option value="ja">日本語</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
