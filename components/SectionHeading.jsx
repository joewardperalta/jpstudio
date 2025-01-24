export default function SectionHeading({ children, className = "" }) {
  return (
    <h2 className={`mb-[4.5rem] text-sectionHeading ${className}`}>
      {children}
    </h2>
  );
}
