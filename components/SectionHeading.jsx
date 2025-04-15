export default function SectionHeading({ children, className }) {
  return (
    <h2 viewport={{ once: true }} className={`section-heading ${className}`}>
      {children}
    </h2>
  );
}
