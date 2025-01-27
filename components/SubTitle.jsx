export default function SubTitle({ children, className }) {
  return (
    <p
      className={
        "mx-auto max-w-[62.25rem] text-[2rem] leading-[1.5] " + className
      }
    >
      {children}
    </p>
  );
}
