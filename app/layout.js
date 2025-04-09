import { Raleway } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";

// Vercel analytics tool
import { Analytics } from "@vercel/analytics/react";

const raleway = Raleway({
  subsets: ["latin"],
});

export const metadata = {
  title: "Web Design & Development Agency | JPStudio",
  description:
    "​JPStudio is a web design agency that specializes in creating modern, user-focused websites to drive business growth, enhance customer engagement, and boost conversions. Our services include custom web design and development, hosting and domain setup, SEO optimization, analytics integration, e-commerce functionality, and maintenance support. They have experience working with various clients, such as Insideout Window Coverings and the Apostolic Sanctuary of Canada.",
  keywords:
    "web design, website development, custom website design, responsive web design, UX design (user experience design), UI design (user interface design), front-end development, e-commerce website design, landing page design, business website",
  openGraph: {
    title: "Web Design & Development Agency | JPStudio",
    description:
      "​JPStudio is a web design agency that specializes in creating modern, user-focused websites to drive business growth, enhance customer engagement, and boost conversions. Our services include custom web design and development, hosting and domain setup, SEO optimization, analytics integration, e-commerce functionality, and maintenance support. They have experience working with various clients, such as Insideout Window Coverings and the Apostolic Sanctuary of Canada.",
    url: "https://www.jpstudio.ca/",
    siteName: "Web Design & Development Agency | JPStudio",
    type: "website",
  },
  alternates: {
    canonical: "https://www.jpstudio.ca",
  },
  robots: "index, follow",
  authors: [{ name: "JPStudio" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        {/* Top nav */}
        <Nav />

        {/* Main page content */}
        {children}

        {/* Footer section */}
        <footer>
          <div className="mx-auto max-w-[90rem] px-6 py-17 laptop:px-17 laptop:py-30">
            {/* Logo */}
            <Image
              className="mb-[3.25rem]"
              src="/images/jpstudio logo.png"
              alt="jpstudio agency logo"
              width={149}
              height={36}
            />

            {/* Footer links */}
            <div className="flex flex-col justify-between gap-[3rem] text-sm leading-[1.5] laptop:flex-row desktop:gap-[7.1875rem]">
              {/* Navigation links */}
              <div>
                <h6 className="mb-6 text-sm font-medium leading-[1.5]">
                  Navigation
                </h6>
                <ul className="space-y-[1.25rem]">
                  <li>
                    <Link href="/work">Work</Link>
                  </li>
                  <li>
                    <Link href="/about">About Us</Link>
                  </li>
                </ul>
              </div>

              {/* Services links */}
              <div>
                <h6 className="mb-6 text-sm font-medium leading-[1.5]">
                  Services
                </h6>
                <ul className="space-y-[1.25rem]">
                  <li>
                    <Link href="/web-design-and-development">
                      Web Design & Development
                    </Link>
                  </li>
                  <li>
                    <Link href="/hostin-and-domain-setup">
                      Hosting & Domain Setup
                    </Link>
                  </li>
                  <li>
                    <Link href="/seo-optimization">SEO Optimization</Link>
                  </li>
                  <li>
                    <Link href="/analytics-integration">
                      Analytics Integration
                    </Link>
                  </li>
                  <li>
                    <Link href="/ecommerce-functionality">
                      E-commerce Functionality
                    </Link>
                  </li>
                  <li>
                    <Link href="/maintenance-support">Maintenance Support</Link>
                  </li>
                </ul>
              </div>

              {/* Social links */}
              <div>
                <h6 className="mb-6 text-sm font-medium leading-[1.5]">
                  Follow us
                </h6>

                {/* TODO: Add the links for each social media */}
                <ul className="space-y-[1.25rem]">
                  <li>
                    <Link
                      href="https://www.facebook.com/profile.php?id=61572287565837"
                      target="_blank"
                    >
                      Facebook
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.instagram.com/jpstudio_web_design_agency/"
                      target="_blank"
                    >
                      Instagram
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.linkedin.com/company/jpstudiowebdesignagency/"
                      target="_blank"
                    >
                      LinkedIn
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Contact info */}
              <div>
                <h6 className="mb-6 text-sm font-medium leading-[1.5]">
                  Contact Info
                </h6>
                <ul className="space-y-[1.25rem]">
                  <li>
                    <Link href="mailto:contact@jpstudio.ca">
                      contact@jpstudio.ca
                    </Link>
                  </li>
                  <li>
                    <Link href="tel:+16479013040">+1 647 901 3040</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Copywrite and legal documents */}
          <div className="mb-4 w-full border-t py-5">
            <div className="mx-auto flex w-full max-w-[90rem] justify-between gap-10 px-6 laptop:px-17">
              <p className="text-xs leading-[1.5] tablet:text-sm">
                © 2024 JPStudio Web Design Agency
              </p>

              {/* Legal document links */}
              {/* TODO: Add the link for each of the legal documents */}
              <ul className="flex gap-4 text-xs leading-[1.5] tablet:gap-10 tablet:text-sm">
                <li>
                  <Link href="">Terms of Service</Link>
                </li>
                <li>
                  <Link href="">Privacy Policy</Link>
                </li>
              </ul>
            </div>
          </div>
        </footer>

        {/* Vercel analytics component */}
        <Analytics />

        <Script src="https://kit.fontawesome.com/d924478ec2.js" />
      </body>
    </html>
  );
}
