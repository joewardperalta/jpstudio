import ServicePage from "@/components/ServicePage";
import services from "@/data/services.json";

export default function page() {
  const service = services[0];
  return (
    <ServicePage
      title={service.title}
      subTitle={service.subTitle}
      features={service.features}
    />
  );
}
