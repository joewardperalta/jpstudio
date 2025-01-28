import ServicePage from "@/components/ServicePage";

// JSON data
import services from "@/data/services.json";
import testimonials from "@/data/testimonials.json";

export default function page() {
  const service = services[3];

  return (
    <ServicePage
      title={service.title}
      subTitle={service.subTitle}
      features={service.features}
      testimonials={testimonials}
      cta="Don’t just build a website—build your brand."
    />
  );
}
