import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/shared/BackToTop";
import { Toaster } from "sonner";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: {
    default: "SMO Foundation — Sustainable Market Outreach Foundation",
    template: "%s | SMO Foundation",
  },
  description:
    "The Sustainable Market Outreach Foundation (SMO Foundation) empowers communities across Nigeria through inclusive development, education, economic empowerment, healthcare, and agricultural development.",
  keywords: [
    "SMO Foundation",
    "Sustainable Market Outreach Foundation",
    "Nigeria NGO",
    "community development",
    "economic empowerment",
    "social development",
    "Africa",
  ],
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://smofoundation.org",
    siteName: "SMO Foundation",
    title: "SMO Foundation — Sustainable Market Outreach Foundation",
    description:
      "Empowering communities across Nigeria through inclusive development, education, and sustainable economic growth.",
  },
  twitter: {
    card: "summary_large_image",
    title: "SMO Foundation",
    description:
      "Empowering communities across Nigeria through inclusive development.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full flex flex-col antialiased" style={{ backgroundColor: "#F7F6F0", color: "#454B47" }}>
        <TopBar />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <BackToTop />
        <Toaster
          position="bottom-right"
          richColors
          closeButton
          theme="light"
        />
      </body>
    </html>
  );
}
