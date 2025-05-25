import Image from "next/image";
import Link from "next/link";

export function Logo() {
    return (
      <Link href="/" className="text-sm text-white/60 hover:text-white" title="Pagina inicial" >
        <Image src="/Logo.svg" alt="Logo" width={116} height={32} />
      </Link>
    )
}