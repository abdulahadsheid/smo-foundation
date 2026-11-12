import Image from "next/image";
import Link from "next/link";
import { sloganFont } from "@/fonts/slogan";

export default function HeaderLogo() {
  return (
    <Link href="/" className="inline-flex items-center gap-2.5 sm:gap-3" aria-label="SMO Foundation home">
      <Image
        src="/images/logo.png"
        alt=""
        width={512}
        height={512}
        priority
        sizes="56px"
        className="h-11 w-11 shrink-0 sm:h-12 sm:w-12"
      />
      <span className={`${sloganFont.className} text-[0.78rem] uppercase leading-[1.1] sm:text-[0.9rem]`}>
        <span className="block text-hope-red">Renewed hope</span>
        <span className="block text-green-900">For petty traders</span>
      </span>
    </Link>
  );
}
