export default function Button({ children, className = "" }) {
  return (
    <button className={`text-medium w-fit font-medium ${className}`}>
      {children}
    </button>
  );
}
