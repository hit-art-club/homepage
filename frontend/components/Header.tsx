"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
      <nav className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex items-center justify-center w-10 h-10 bg-gradient-primary-teal rounded-lg">
            <span className="text-white font-bold">AC</span>
          </div>
          <span className="font-bold text-lg text-foreground hidden sm:inline">
            Art Club
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="text-foreground hover:text-blue-primary transition-colors"
          >
            ホーム
          </Link>
          <Link
            href="/about"
            className="text-foreground hover:text-blue-primary transition-colors"
          >
            部活について
          </Link>
          <Link
            href="/photos"
            className="text-foreground hover:text-blue-primary transition-colors"
          >
            作品ギャラリー
          </Link>
          <Link
            href="/news"
            className="text-foreground hover:text-blue-primary transition-colors"
          >
            ニュース
          </Link>
          <Link
            href="/contact"
            className="btn btn-primary text-sm"
          >
            お問い合わせ
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col gap-1.5 w-6"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <span
            className={`h-0.5 w-full bg-foreground transition-transform ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`h-0.5 w-full bg-foreground transition-opacity ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-full bg-foreground transition-transform ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden bg-white border-t border-slate-200">
          <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-4 flex flex-col gap-4">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="text-foreground hover:text-blue-primary transition-colors py-2"
            >
              ホーム
            </Link>
            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className="text-foreground hover:text-blue-primary transition-colors py-2"
            >
              部活について
            </Link>
            <Link
              href="/photos"
              onClick={() => setIsOpen(false)}
              className="text-foreground hover:text-blue-primary transition-colors py-2"
            >
              作品ギャラリー
            </Link>
            <Link
              href="/news"
              onClick={() => setIsOpen(false)}
              className="text-foreground hover:text-blue-primary transition-colors py-2"
            >
              ニュース
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="btn btn-primary w-full"
            >
              お問い合わせ
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
