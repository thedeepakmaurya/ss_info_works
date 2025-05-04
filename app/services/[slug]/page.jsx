import Service from "@/components/pages/Service";

const page = async ({ params }) => {
  const { slug } = await params;
  return <Service slug={slug} />;
};

export default page;
