import ServicePage from "@/components/ServicePage";

// JSON data
import services from "@/data/services.json";
import testimonials from "@/data/testimonials.json";

export default function page() {
  const service = services[1];

  return (
    <ServicePage
      title={service.title}
      subTitle={service.subTitle}
      features={service.features}
      testimonials={testimonials}
      cta="Your website, powered by reliable hosting."
    />
  );
}
