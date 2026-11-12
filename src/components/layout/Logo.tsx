import Image from "next/image";
import Link from "next/link";
import { sloganFont } from "@/fonts/slogan";

export default function Logo() {
  return (
    <Link
      href="/"
      className="inline-flex items-center gap-2.5 rounded-2xl bg-white py-2 pl-2 pr-4 shadow-[0_10px_30px_-18px_rgba(0,0,0,0.5)] sm:gap-3"
      aria-label="SMO Foundation home"
    >
      <Image
        src="/images/logo.png"
        alt=""
        width={512}
        height={512}
        sizes="56px"
        className="h-11 w-11 shrink-0 sm:h-12 sm:w-12"
      />
      <span className="flex flex-col">
        <span className="font-display text-[1.05rem] font-semibold leading-tight tracking-tight text-green-900 sm:text-[1.125rem]">
          SMO Foundation
        </span>
        <span className={`${sloganFont.className} mt-0.5 text-[0.6rem] uppercase leading-[1.15] tracking-[0.01em] sm:text-[0.66rem]`}>
          <span className="block text-hope-red">Renewed hope</span>
          <span className="block text-green-900">For petty traders</span>
        </span>
      </span>
    </Link>
  );
}
