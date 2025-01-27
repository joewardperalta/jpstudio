export default function SectionHeading({ children, className = "" }) {
  return (
    <h2 className={className + " mb-[4.5rem] text-sectionHeading"}>
      {children}
    </h2>
  );
}
