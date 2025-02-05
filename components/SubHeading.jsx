export default function SubHeading({ children, className }) {
  return <h3 className={"sub-heading " + className}>{children}</h3>;
}
