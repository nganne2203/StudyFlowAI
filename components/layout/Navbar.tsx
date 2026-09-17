"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Brand } from "@/components/ui/Brand";
import { ButtonLink } from "@/components/ui/ButtonLink";

const links = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Live demo", href: "#demo" },
  { label: "Pricing", href: "#pricing" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="container nav-inner" aria-label="Main navigation">
        <Brand />
        <div className="nav-links">
          {links.map((link) => <a href={link.href} key={link.href}>{link.label}</a>)}
        </div>
        <div className="nav-actions">
          <ButtonLink href="#demo" className="nav-cta" arrow>Start learning</ButtonLink>
          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>
      <div className={"mobile-nav" + (menuOpen ? " is-open" : "")} id="mobile-navigation" hidden={!menuOpen}>
        {links.map((link) => (
          <a href={link.href} key={link.href} onClick={() => setMenuOpen(false)}>{link.label}</a>
        ))}
      </div>
    </header>
  );
}
