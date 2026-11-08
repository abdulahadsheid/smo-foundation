import Link from "next/link";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";
import { siteConfig } from "@/data/site";

export default function TopBar() {
  return (
    <div
      className="hidden sm:block w-full text-white text-xs"
      style={{ backgroundColor: "#123C32" }}
      role="complementary"
      aria-label="Contact and social information"
    >
      <div className="container-site">
        <div className="flex items-center justify-between py-2 gap-4">
          {/* Left: Contact details */}
          <div className="flex items-center gap-4 flex-wrap">
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="flex items-center gap-1.5 hover:text-amber-300 transition-colors duration-200"
              aria-label="Email SMO Foundation"
            >
              <Mail size={12} aria-hidden="true" />
              <span>{siteConfig.contact.email}</span>
            </a>
            <a
              href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-1.5 hover:text-amber-300 transition-colors duration-200"
              aria-label="Call SMO Foundation"
            >
              <Phone size={12} aria-hidden="true" />
              <span>{siteConfig.contact.phone}</span>
            </a>
            <span className="hidden md:flex items-center gap-1.5 text-white/70">
              <MapPin size={12} aria-hidden="true" />
              <span>{siteConfig.contact.address}</span>
            </span>
          </div>

          {/* Right: Social links */}
          <nav aria-label="Social media links" className="flex items-center gap-3">
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-300 transition-colors duration-200"
              aria-label="SMO Foundation on Facebook"
            >
              <Facebook size={13} aria-hidden="true" />
            </a>
            <a
              href={siteConfig.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-300 transition-colors duration-200"
              aria-label="SMO Foundation on Twitter"
            >
              <Twitter size={13} aria-hidden="true" />
            </a>
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-300 transition-colors duration-200"
              aria-label="SMO Foundation on Instagram"
            >
              <Instagram size={13} aria-hidden="true" />
            </a>
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-300 transition-colors duration-200"
              aria-label="SMO Foundation on LinkedIn"
            >
              <Linkedin size={13} aria-hidden="true" />
            </a>
            <a
              href={siteConfig.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-300 transition-colors duration-200"
              aria-label="SMO Foundation on YouTube"
            >
              <Youtube size={13} aria-hidden="true" />
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}
