export default function SectionHeading({ children, className = "" }) {
  return (
    <h2 className={`text-sectionHeading mb-16 ${className}`}>{children}</h2>
  );
}
