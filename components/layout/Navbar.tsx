"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Brand } from "@/components/ui/Brand";
import { ButtonLink } from "@/components/ui/ButtonLink";
import type { Locale, SiteCopy } from "@/data/i18n";

const hrefs = ["#features", "#how-it-works", "#demo", "#pricing"];

export function Navbar({ locale, copy }: { locale: Locale; copy: SiteCopy["nav"] }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = copy.links.map((label, index) => ({ label, href: hrefs[index] }));

  return (
    <header className="site-header">
      <nav className="container nav-inner" aria-label={copy.aria}>
        <Brand locale={locale} />
        <div className="nav-links">
          {links.map((link) => <a href={link.href} key={link.href}>{link.label}</a>)}
        </div>
        <div className="nav-actions">
          <div className="language-switch" aria-label={copy.language}>
            <Link href="/" hrefLang="en" lang="en" aria-current={locale === "en" ? "page" : undefined}>EN</Link>
            <span aria-hidden="true">/</span>
            <Link href="/vi" hrefLang="vi" lang="vi" aria-current={locale === "vi" ? "page" : undefined}>VI</Link>
          </div>
          <ButtonLink href="#demo" className="nav-cta" arrow>{copy.cta}</ButtonLink>
          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? copy.close : copy.open}
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
