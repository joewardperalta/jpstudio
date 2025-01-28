export default function Wrapper({ children, className }) {
  return (
    <div className={`wrapper ${className}`}>
      {children}
    </div>
  );
}
