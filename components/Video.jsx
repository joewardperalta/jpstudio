export default function Video(src = "") {
  return (
    <video className="rounded-5xl" autoPlay muted loop>
      <source src="/videos/web-design-figma.mp4" type="video/mp4" />
      Your browser does not support video tag.
    </video>
  );
}
