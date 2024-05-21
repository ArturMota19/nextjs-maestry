"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
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

  return (
    <div>
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