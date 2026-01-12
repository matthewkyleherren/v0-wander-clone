import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Github, Twitter, Linkedin } from "lucide-react"

const footerLinks = {
  company: [
    { name: "About Us", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Press", href: "/press" },
    { name: "Blog", href: "/blog" },
  ],
  hosting: [
    { name: "List Your Home", href: "/host" },
    { name: "OffGrid Sites", href: "/sites" },
    { name: "Host Resources", href: "/resources" },
    { name: "Community", href: "/community" },
  ],
  support: [
    { name: "Help Center", href: "/help" },
    { name: "Safety", href: "/safety" },
    { name: "Cancellation", href: "/cancellation" },
    { name: "Contact Us", href: "/contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "Sitemap", href: "/sitemap" },
  ],
}

const socialLinks = [
  { name: "GitHub", icon: Github, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
]

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12">
        {/* Newsletter Section */}
        <div className="bg-muted rounded-lg p-5 md:p-6 mb-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h3 className="text-base font-medium text-foreground mb-1">Get inspiration for your next trip</h3>
              <p className="text-sm text-muted-foreground">Subscribe for exclusive offers and travel tips.</p>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <Input type="email" placeholder="Enter your email" className="flex-1 md:w-56 h-9 text-sm" />
              <Button size="sm" className="h-9">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          <div>
            <h4 className="text-xs font-medium text-foreground mb-3 uppercase tracking-wide">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-medium text-foreground mb-3 uppercase tracking-wide">Hosting</h4>
            <ul className="space-y-2">
              {footerLinks.hosting.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-medium text-foreground mb-3 uppercase tracking-wide">Support</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-medium text-foreground mb-3 uppercase tracking-wide">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border pt-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* Logo and Copyright */}
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-foreground">offgrid</span>
              <span className="text-xs text-muted-foreground">© 2026 OffGrid. All rights reserved.</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-1">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="p-2 rounded-md hover:bg-muted transition-colors min-h-[36px] min-w-[36px] flex items-center justify-center"
                  aria-label={social.name}
                >
                  <social.icon className="h-4 w-4 text-muted-foreground" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
