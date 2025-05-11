import Services from "@/components/pages/Services";

const page = async ({ params }) => {
  const { serviceId } = await params;
  return <Services serviceId={serviceId} />;
};

export default page;
