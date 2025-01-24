export default function Wrapper({ children, className }) {
  return (
    <div className={"mx-auto max-w-[1920px] px-17 py-30 " + className}>
      {children}
    </div>
  );
}
