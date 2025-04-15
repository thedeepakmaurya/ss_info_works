import Service from "@/components/section/Service";

const page = async ({ params }) => {
  const { slug } = await params;
  return <Service slug={slug} />;
};

export default page;
