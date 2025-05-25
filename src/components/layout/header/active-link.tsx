import Link, { type LinkProps } from "next/link";
import { useRouter } from "next/router";
import { cn } from "@/lib/utils";


type ActiveLinkProps = {
  label: string
} & LinkProps;

export function ActiveLink({ href, label, ...props }: ActiveLinkProps) {
  const router = useRouter();
  const isActive = router.pathname === href;

  return <Link href={href} className={cn("text-action-sm transition-colors hover:text-blue-200", isActive ? "text-blue-500" : "text-gray-100")} {...props}>{label}</Link>;
}
