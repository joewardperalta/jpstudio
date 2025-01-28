export default function SubTitle({ children, className }) {
  return (
    <p
      className={`sub-title ${className}`}
    >
      {children}
    </p>
  );
}
