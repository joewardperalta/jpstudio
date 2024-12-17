export default function Button({ children, className = "" }) {
  return (
    <button className={`text-medium w-fit ${className}`}>{children}</button>
  );
}
