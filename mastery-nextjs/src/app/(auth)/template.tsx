"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import "./style.scss"

const navLinks = [
  { href: "/login", label: "Login" },
  { href: "/register", label: "Register" },
  { href: "/forgot-password", label: "Forgot Password" },
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [input, setInput] = useState("");
  return (
    <div>
      <input value={input} onChange={(e) => setInput(e.target.value)}/>
      <nav>
        {navLinks.map((link) => {
          const isActive = pathname.startsWith(link.href);
          return(
            <Link className={isActive ? "bgRed" : "text-blue-500 mr-4"} key={link.href} href={link.href}>
              <h2>{link.label}</h2>
            </Link>
          )
        })}
      </nav>
      {children}
    </div>
  )
}