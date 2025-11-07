import ProuctDetailsContainer from "@/app/_components/ui/reusables/ProuctDetailsContainer";
import { api } from "@/convex/_generated/api";
import { fetchQuery } from "convex/nextjs";
import { notFound } from "next/navigation";

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const { device } = await fetchQuery(
    api.queries.getDeviceByName.getDeviceByName,
    { name: decodeURIComponent(id) },
  );

  if (!device.length) return notFound();

  return (
    <div className="text-lighter bg-lighter">
      <ProuctDetailsContainer data={device[0]} />
    </div>
  );
};

export default page;
