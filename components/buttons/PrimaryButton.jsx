export default function PrimaryButton({
  children,
  className = "",
  type,
  onClick,
  ref,
}) {
  return (
    <button
      className={`primary-button ${className}`}
      type={type}
      onClick={onClick}
      ref={ref}
    >
      {children}
    </button>
  );
}
