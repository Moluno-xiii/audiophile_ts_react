import ProuctDetailsContainer from "@/app/_components/ui/reusables/ProuctDetailsContainer";
import { headPhoneDetailsPageData, headPhonesPageData } from "@/app/data";
import { notFound } from "next/navigation";

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const headPhone = headPhonesPageData.find((h) => h.id === id);

  if (!headPhone) return notFound();

  return (
    <div className="text-lighter bg-lighter">
      <ProuctDetailsContainer data={headPhoneDetailsPageData} id={id} />
    </div>
  );
};

export default page;
