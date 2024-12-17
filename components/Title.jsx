export default function Title({ children, className = "" }) {
  return <h1 className={`text-title mb-14 ${className}`}>{children}</h1>;
}
