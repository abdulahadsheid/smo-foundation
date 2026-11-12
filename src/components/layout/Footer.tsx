import Link from "next/link";
import { siteConfig } from "@/data/site";
import { footerLinks, navigationLinks, primaryAction } from "@/data/navigation";
import NewsletterForm from "@/components/shared/NewsletterForm";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon,
} from "@/components/shared/SocialIcons";
import Logo from "./Logo";

const socials = [
  { label: "Facebook", href: siteConfig.social.facebook, Icon: FacebookIcon },
  { label: "X", href: siteConfig.social.twitter, Icon: TwitterIcon },
  { label: "Instagram", href: siteConfig.social.instagram, Icon: InstagramIcon },
  { label: "LinkedIn", href: siteConfig.social.linkedin, Icon: LinkedinIcon },
  { label: "YouTube", href: siteConfig.social.youtube, Icon: YoutubeIcon },
];

/** The year, fixed at build time (Cache Components can't read the clock while prerendering) */
async function CopyrightYear() {
  "use cache";
  return new Date().getFullYear();
}

export default function Footer() {
  return (
    <footer className="border-t border-cream/15 bg-green-950 text-cream">
      <div className="container-site grid gap-12 py-16 md:grid-cols-12 md:py-20">
        <div className="md:col-span-5">
          <Logo />
          <p className="mt-5 max-w-[40ch] text-cream/75">
            Grants, bank accounts and money skills for Nigeria&apos;s market women and petty traders.
          </p>
          <address className="mt-6 space-y-1 text-[0.95rem] not-italic text-cream/75">
            <p>{siteConfig.contact.address}</p>
            <p>
              <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-cream">
                {siteConfig.contact.email}
              </a>
            </p>
            <p>{siteConfig.contact.phone}</p>
          </address>
        </div>

        <nav aria-label="Footer" className="md:col-span-3">
          <ul className="grid grid-cols-2 gap-x-6 gap-y-2.5">
            {[...navigationLinks, primaryAction, ...footerLinks].map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-cream/80 hover:text-cream">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-4">
          <h2 className="text-xl text-cream">Updates from the markets</h2>
          <p className="mt-2 mb-5 text-[0.95rem] text-cream/70">
            New states, trader stories and results, about once a month.
          </p>
          <NewsletterForm />
          <ul className="mt-8 flex gap-2" aria-label="SMO Foundation on social media">
            {socials.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-[10px] border border-cream/15 text-cream/80 transition-colors hover:border-cream/50 hover:text-cream"
                >
                  <Icon size={16} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="container-site flex flex-col gap-2 py-6 text-sm text-cream/55 md:flex-row md:justify-between">
          <p>
            © <CopyrightYear /> {siteConfig.fullName}.
          </p>
          <p>We never charge traders a fee to apply for a grant.</p>
        </div>
      </div>
    </footer>
  );
}
