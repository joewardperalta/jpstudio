export default function PrimaryButton({ children, className = "" }) {
  return (
    <button
      className={`primary-button ${className}`}
    >
      {children}
    </button>
  );
}
