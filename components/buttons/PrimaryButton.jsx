export default function PrimaryButton({ children, className = "", type }) {
  return (
    <button className={`primary-button ${className}`} type={type}>
      {children}
    </button>
  );
}
