"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import Button from "@/components/ui/Button";
import { primaryNav, primaryCta, type NavLink } from "@/config/navigation";
import styles from "./Header.module.css";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  /* Sticky compact-on-scroll */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Close menus on route change */
  useEffect(() => {
    setMobileOpen(false);
    setOpenMenu(null);
    setMobileExpanded(null);
  }, [pathname]);

  /* Lock body scroll while the mobile menu is open */
  useEffect(() => {
    document.body.classList.toggle("no-scroll", mobileOpen);
    return () => document.body.classList.remove("no-scroll");
  }, [mobileOpen]);

  /* Escape closes any open menu */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenMenu(null);
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const closeDesktopMenu = useCallback(() => setOpenMenu(null), []);

  return (
    <>
    <header
      ref={headerRef}
      className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}
      data-open={mobileOpen ? "true" : undefined}
    >
      <div className={styles.inner}>
        <Link href="/" className={styles.brand} aria-label="The 5 Loaves Agency — home">
          <Logo variant="horizontal" height={94} fluid priority className={styles.logoWide} />
          <Logo variant="monogram" height={54} priority className={styles.logoMark} />
        </Link>

        {/* -------- Desktop navigation -------- */}
        <nav className={styles.desktopNav} aria-label="Primary">
          <ul className={styles.navList}>
            {primaryNav.map((item) => {
              const active = isActive(pathname, item.href);
              if (!item.children) {
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`${styles.navLink} ${active ? styles.active : ""}`}
                      aria-current={active ? "page" : undefined}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              }

              const isOpen = openMenu === item.label;
              return (
                <li
                  key={item.href}
                  className={styles.hasDropdown}
                  onMouseEnter={() => setOpenMenu(item.label)}
                  onMouseLeave={closeDesktopMenu}
                >
                  <button
                    type="button"
                    className={`${styles.navLink} ${styles.dropdownTrigger} ${
                      active ? styles.active : ""
                    }`}
                    aria-expanded={isOpen}
                    aria-haspopup="true"
                    onClick={() =>
                      setOpenMenu((cur) => (cur === item.label ? null : item.label))
                    }
                  >
                    {item.label}
                    <span className={styles.caret} aria-hidden="true" />
                  </button>

                  <div
                    className={`${styles.dropdown} ${isOpen ? styles.dropdownOpen : ""}`}
                  >
                    <ul className={styles.dropdownList}>
                      <li>
                        <Link href={item.href} className={styles.dropdownOverview}>
                          Overview
                        </Link>
                      </li>
                      {item.children.map((child: NavLink) => (
                        <li key={child.href}>
                          <Link href={child.href} className={styles.dropdownLink}>
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className={styles.actions}>
          <Button href={primaryCta.href} variant="primary" size="sm" className={styles.cta}>
            {primaryCta.label}
          </Button>

          <button
            type="button"
            className={styles.menuToggle}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span className={styles.menuBars} data-open={mobileOpen}>
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>
      </div>
    </header>

      {/* -------- Mobile menu (sibling of header so `position: fixed`
          references the viewport, not the backdrop-filtered header) -------- */}
      <div
        id="mobile-menu"
        className={`${styles.mobileMenu} ${scrolled ? styles.menuScrolled : ""} ${
          mobileOpen ? styles.mobileOpen : ""
        }`}
        hidden={!mobileOpen}
      >
        <nav aria-label="Mobile" className={styles.mobileNav}>
          <ul>
            {primaryNav.map((item) => {
              const active = isActive(pathname, item.href);
              if (!item.children) {
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`${styles.mobileLink} ${active ? styles.active : ""}`}
                      aria-current={active ? "page" : undefined}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              }
              const expanded = mobileExpanded === item.label;
              return (
                <li key={item.href} className={styles.mobileGroup}>
                  <div className={styles.mobileGroupHead}>
                    <Link
                      href={item.href}
                      className={`${styles.mobileLink} ${active ? styles.active : ""}`}
                    >
                      {item.label}
                    </Link>
                    <button
                      type="button"
                      className={styles.mobileExpand}
                      aria-expanded={expanded}
                      aria-label={`${expanded ? "Collapse" : "Expand"} ${item.label}`}
                      onClick={() =>
                        setMobileExpanded((cur) =>
                          cur === item.label ? null : item.label
                        )
                      }
                    >
                      <span className={styles.plus} data-open={expanded} />
                    </button>
                  </div>
                  <ul
                    className={`${styles.mobileSub} ${expanded ? styles.mobileSubOpen : ""}`}
                    hidden={!expanded}
                  >
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link href={child.href} className={styles.mobileSubLink}>
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              );
            })}
          </ul>
          <div className={styles.mobileCta}>
            <Button href={primaryCta.href} variant="primary" fullWidth>
              {primaryCta.label}
            </Button>
          </div>
        </nav>
      </div>
    </>
  );
}
