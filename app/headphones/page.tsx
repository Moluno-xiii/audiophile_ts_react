import { api } from "@/convex/_generated/api";
import { fetchQuery } from "convex/nextjs";
import { Metadata } from "next";
import DevicePageComponent from "../_components/DevicePageComponent";
import PageTitle from "../_components/ui/PageTitle";

export const metadata: Metadata = {
  title: "Headphones | Audiophile",
  description: "Headphones page for Audiophile.",
};

const Page: React.FC = async () => {
  const { devices } = await fetchQuery(
    api.queries.getDevicesByCategory.getDevicesByCategory,
    { category: "headphones" },
  );

  return (
    <div className="bg-lighter pb-[120px]">
      <PageTitle title="headphones" />
      <section className="mx-auto max-w-[1110px] px-3">
        <DevicePageComponent devicesData={devices} />
      </section>
    </div>
  );
};

export default Page;
