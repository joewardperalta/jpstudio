export const metadata = {
  title: "Our Portfolio | JPStudio Web Design",
  description:
    "Explore our portfolio showcasing stunning websites and creative designs we've built for various clients in different industries.",
  alternates: {
    canonical: "https://www.jpstudio.ca/work",
  },
  robots: "index, follow",
};

export default function WorkLayout({ children }) {
  return <div>{children}</div>;
}
