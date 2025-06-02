"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import navLogo from "@/public/nav-item-logo.png";
import whiteLogo from "@/public/logo-white.png";
import SearchIcon from "@/public/icons/SearchIcon";
import CartIcon from "@/public/icons/CartIcon";
import { ArrowUpRight, Menu, X } from "lucide-react";

interface NavLink {
  label: string;
  href: string;
}

const NavLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Nights", href: "/nights" },
  { label: "Entertainment", href: "/entertainment" },
  { label: " Colophon", href: "/colophon" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const getNavbarBackground = () => {
    switch (pathname) {
      case "/nights":
        return "bg-green-200";
      case "/entertainment":
        return "bg-blue-200";
      case "/colophon":
        return "bg-red-200";
      default:
        return "bg-black";
    }
  };

  // Close mobile menu on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  return (
    <nav className={`${getNavbarBackground()} w-full   `}>
      <div className="container mx-auto flex justify-between items-center  px-4 md:px-0">
        {/* Logo */}
        <div>
          <Image src={whiteLogo} alt="white-logo" className=" w-auto" />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex justify-center items-center gap-4">
          {NavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex justify-center items-center gap-1 border border-[#6c6c6c] rounded-full py-2 px-4"
            >
              <Image src={navLogo} alt="nav-item-logo" />
              <p className="text-lg text-[#6c6c6c]">{link.label}</p>
            </Link>
          ))}
        </div>

        {/* Right section - Desktop */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-8">
            <SearchIcon />
            <CartIcon />
          </div>
          {pathname === "/" && (
            <button className="text-black flex items-center justify-center gap-1.5 text-xl font-medium bg-[image:var(--linear)] py-3.5 px-4 rounded-full">
              Sign Up
              <ArrowUpRight className="text-black" />
            </button>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle Menu">
            {isMenuOpen ? <X className=" text-white" size={28} /> : <Menu className="text-white" size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="md:hidden bg-black text-white px-6 py-4 space-y-4 shadow-lg"
        >
          {NavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className={`block py-2 border-b border-gray-700 ${
                pathname === link.href ? "text-yellow-400 font-semibold" : "hover:text-gray-200"
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Bottom Actions */}
          <div className="pt-4 border-t border-gray-700 flex flex-col gap-4">
            <div className="flex gap-6">
              <SearchIcon />
              <CartIcon />
            </div>
            {pathname === "/" && (
              <button className="text-black text-center w-full text-lg font-medium bg-[image:var(--linear)] py-3 px-4 rounded-full">
                Sign Up
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
