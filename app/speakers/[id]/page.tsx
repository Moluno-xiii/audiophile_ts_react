import ProuctDetailsContainer from "@/app/_components/ui/reusables/ProuctDetailsContainer";
import { speakerDetailsPageData } from "@/app/data";
import { notFound } from "next/navigation";

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const speaker = speakerDetailsPageData.find((h) => h.id === id);

  if (!speaker) return notFound();

  return (
    <div className="text-lighter bg-lighter">
      <ProuctDetailsContainer data={speakerDetailsPageData} id={id} />
    </div>
  );
};

export default page;
