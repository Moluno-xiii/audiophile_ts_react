import { Metadata } from "next";
import DevicePageComponent from "../_components/DevicePageComponent";
import PageTitle from "../_components/ui/PageTitle";
import { earphonesPageData } from "../data";

export const metadata: Metadata = {
  title: "Earphones | Audiophile",
  description: "Earphones page for Audiophile",
};

const Page: React.FC = () => {
  return (
    <div className="bg-lighter pb-[120px]">
      <PageTitle title="speakers" />
      <section className="mx-auto max-w-[1110px] px-3">
        <DevicePageComponent devicesData={earphonesPageData} />
      </section>
    </div>
  );
};

export default Page;
