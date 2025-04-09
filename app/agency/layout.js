export const metadata = {
  title: "Web Design & Development Agency | JPStudio",
  description:
    "JPStudio is a creative web design agency specializing in custom websites, development, SEO, and digital branding for businesses looking to grow online.",
  alternates: {
    canonical: "https://www.jpstudio.ca/agency",
  },
  robots: "index, follow",
};

export default function AgencyLayout({ children }) {
  return <div>{children}</div>;
}
