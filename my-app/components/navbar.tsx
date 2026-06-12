"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import {
  Database,
  List,
  Menu,
  Moon,
  Sun,
  Trophy,
  Users,
  X,
} from "lucide-react";
import { useState, useSyncExternalStore } from "react";
import Image from "next/image";

const isSelected = (path: string, pathname: string) => {
  return pathname === path || pathname.startsWith(`${path}/`);
};

function ThemeSwitch() {
  const isDark = useSyncExternalStore(
    (onStoreChange) => {
      const observer = new MutationObserver(onStoreChange);

      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["class"],
      });

      return () => observer.disconnect();
    },
    () => document.documentElement.classList.contains("dark"),
    () => false,
  );

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark", !isDark);
  };

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label="Cambia tema"
      onClick={toggleTheme}
      className={`relative inline-flex h-8 w-16 shrink-0 cursor-pointer items-center justify-between overflow-hidden rounded-full border px-2 shadow-inner transition-all duration-300 ${
        isDark
          ? "border-blue-400/30 bg-slate-800 hover:ring-4 hover:ring-blue-400/15"
          : "border-slate-300/70 bg-slate-200 hover:ring-4 hover:ring-amber-400/15"
      }`}
    >
      <span
        className={`absolute top-1 left-1 z-0 h-6 w-6 rounded-full bg-white shadow-md transition-transform duration-300 ${
          isDark ? "translate-x-8" : "translate-x-0"
        }`}
      />
      <Sun
        className={`relative z-10 h-4 w-4 transition-all duration-300 ${
          isDark ? "text-slate-400" : "text-amber-500"
        }`}
      />
      <Moon
        className={`relative z-10 h-4 w-4 transition-all duration-300 ${
          isDark ? "-rotate-12 text-blue-400" : "text-slate-500"
        }`}
      />
    </button>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    {
      href: "/squadre",
      label: "La Mia Squadra",
      icon: Trophy,
      activeClass:
        "bg-gradient-to-r from-red-500 to-red-800 text-white shadow-md",
      hoverClass:
        "hover:bg-red-500/10 hover:text-red-700 dark:hover:text-red-300",
    },
    {
      href: "/database",
      label: "Database",
      icon: Database,
      activeClass:
        "bg-gradient-to-r from-blue-500 to-blue-800 text-white shadow-md",
      hoverClass:
        "hover:bg-blue-500/10 hover:text-blue-700 dark:hover:text-blue-300",
    },
    {
      href: "/goasta",
      label: "Gestione Asta",
      icon: List,
      activeClass:
        "bg-gradient-to-r from-green-500 to-green-800 text-white shadow-md",
      hoverClass:
        "hover:bg-green-500/10 hover:text-green-700 dark:hover:text-green-300",
    },
    {
      href: "/multiplayer",
      label: "Asta Live",
      icon: Users,
      activeClass:
        "bg-gradient-to-r from-purple-500 to-purple-800 text-white shadow-md",
      hoverClass:
        "hover:bg-purple-500/10 hover:text-purple-700 dark:hover:text-purple-300",
    },
  ];

  return (
    <nav className="site-header sticky top-0 z-50 w-full bg-white/60 backdrop-blur-xl transition-all duration-300 dark:bg-purple-950/60">
      <div className="max-w-full mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image src="/logo.svg" alt="Logo" width={140} height={140} />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const selected = isSelected(link.href, pathname);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`group flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 ${
                    selected
                      ? link.activeClass
                      : `text-muted-foreground ${link.hoverClass}`
                  }`}
                >
                  <Icon className="h-4 w-4 transition-colors" />
                  {link.label}
                </Link>
              );
            })}

            <div className="w-[1px] h-6 bg-border mx-2"></div>

            <ThemeSwitch />
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeSwitch />
            <Button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              variant="ghost"
              size="icon"
              className="rounded-lg"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? "max-h-64 border-t border-border" : "max-h-0"}`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-background/95 backdrop-blur-sm">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const selected = isSelected(link.href, pathname);

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center gap-3 rounded-lg px-4 py-3 text-base font-medium transition-colors ${
                  selected
                    ? link.activeClass
                    : `text-muted-foreground ${link.hoverClass}`
                }`}
              >
                <Icon className="h-5 w-5" />
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
