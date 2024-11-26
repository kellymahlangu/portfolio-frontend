"use client";

import { Code, Menu, X } from "lucide-react";
import React, { useState } from "react";
import ThemeToggle from "@/components/theme-toggle.tsx";

type headerInfo = {
  title: string;
  logo: React.JSX.Element | null;
};

// interface HeaderProps {
//   name: string;
//   logo: React.JSX.Element | null;
// }

const exampleHeaderInfo: headerInfo = {
  title: "K-Mahlangu",
  logo: <Code className="h-8 w-8 text-primary" />,
};

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-background shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              {exampleHeaderInfo.logo}
              <span className="ml-2 text-xl font-bold text-foreground">
                {exampleHeaderInfo.title}
              </span>
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <nav>
              <ul className="flex space-x-4">
                <li>
                  <a
                    href="/about"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="/projects"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="/skills"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
            <ThemeToggle />
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-muted-foreground hover:text-foreground"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
            <ThemeToggle />
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="/about"
              className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-foreground hover:bg-accent"
            >
              About
            </a>
            <a
              href="/projects"
              className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-foreground hover:bg-accent"
            >
              Projects
            </a>
            <a
              href="/skills"
              className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-foreground hover:bg-accent"
            >
              Skills
            </a>
            <a
              href="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-foreground hover:bg-accent"
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
