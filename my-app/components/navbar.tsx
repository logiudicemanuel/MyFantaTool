"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import { Home, Users, Menu, X, Sun, Moon, Zap } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

const isSelected = (path: string, pathname: string) => {
  return pathname === path;
};

const toggleTheme = () => {
  const html = document.documentElement;
  html.classList.toggle("dark");
};

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home", icon: <Home className="w-4 h-4" /> },
    { href: "/goasta", label: "Goasta", icon: <Zap className="w-4 h-4" /> },
    { href: "/squadre", label: "Squadre", icon: <Users className="w-4 h-4" /> },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-white/70 dark:bg-purple-900/70 backdrop-blur-md transition-all duration-300">
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
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 group ${
                  isSelected(link.href, pathname)
                    ? "bg-gradient-to-r from-purple-500/10 to-blue-500/10 text-primary"
                    : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                }`}
              >
                <span
                  className={`transition-colors ${isSelected(link.href, pathname) ? "text-primary" : "text-muted-foreground group-hover:text-foreground"}`}
                >
                  {link.icon}
                </span>
                {link.label}
              </Link>
            ))}

            <div className="w-[1px] h-6 bg-border mx-2"></div>

            <Button
              onClick={toggleTheme}
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-accent/50 group"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-amber-500" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-blue-400" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            <Button
              onClick={toggleTheme}
              variant="ghost"
              size="icon"
              className="rounded-full"
            >
              <Sun className="h-5 w-5 dark:hidden text-amber-500" />
              <Moon className="hidden dark:block h-5 w-5 text-blue-400" />
            </Button>
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
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                isSelected(link.href, pathname)
                  ? "bg-gradient-to-r from-purple-500/10 to-blue-500/10 text-primary"
                  : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              }`}
            >
              {link.icon}
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
