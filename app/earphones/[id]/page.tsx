import ProuctDetailsContainer from "@/app/_components/ui/reusables/ProuctDetailsContainer";
import { earphoneDetailsPageData } from "@/app/data";
import { notFound } from "next/navigation";

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const earphone = earphoneDetailsPageData.find((h) => h.id === id);

  if (!earphone) return notFound();

  return (
    <div className="text-lighter bg-lighter">
      <ProuctDetailsContainer data={earphoneDetailsPageData} id={id} />
    </div>
  );
};

export default page;
