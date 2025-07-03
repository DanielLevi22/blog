"use client";
import Link, { type LinkProps } from "next/link";
import { usePathname } from 'next/navigation';
import { cn } from "@/lib/utils";


type ActiveLinkProps = {
  label: string
} & LinkProps;

export function ActiveLink({ href, label, ...props }: ActiveLinkProps) {
  const linkPath = typeof href === 'string' ? href : href.pathname;
  const pathname = usePathname();
  const isActive =
    pathname === linkPath || pathname?.startsWith(`${linkPath}/`);

  return <Link href={href} className={cn("text-action-sm transition-colors hover:text-blue-200", isActive ? "text-blue-500" : "text-gray-100")} {...props}>{label}</Link>;
}
