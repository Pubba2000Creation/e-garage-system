// src/app/user/service/[id]/page.tsx
import { Metadata } from 'next';
import ShowServicePage from '@/components/user/showServicePage';
import { ServicePageParams, ServicePageProps } from '@/app/types/global';

// Define the component
export default async function ServicePage({
  params,
}: ServicePageProps) {
  const { id } = params;
  
  async function getServiceData(serviceId: string) {
    const servicePageData = {
      id: serviceId,
      shopName: `Example Shop ${serviceId}`,
      starCount: 4.5,
      reviewCount: 123,
      description: "A detailed description of the service",
      address: "123 Example Street",
      phoneNumber: "+1 234 567 8900",
      whatsappNumber: "+1 234 567 8900",
      mapLink: "https://www.google.com/maps/embed?...",
      allReviewsCount: 123,
      servicesTagNames: ["Service 1", "Service 2"],
      SpecialServices: ["Special 1", "Special 2"],
      filterOptions: ["new", "old", "this week", "this month", "this year"],
    };
    
    return servicePageData;
  }

  const serviceData = await getServiceData(id);

  return <ShowServicePage {...serviceData} />;
}

// Generate metadata
export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  return {
    title: `Service ${params.id}`,
    description: `Details for service ${params.id}`,
  };
}

// Generate static params
export async function generateStaticParams(): Promise<ServicePageParams[]> {
  const services = ["1", "2", "3"]; // Example service IDs
  
  return services.map((id) => ({
    id,
  }));
}
