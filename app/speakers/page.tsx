import DevicePageComponent from "../_components/DevicePageComponent";
import PageTitle from "../_components/ui/PageTitle";
import { speakerPageData } from "../data";

const Page: React.FC = () => {
  return (
    <div className="bg-lighter pb-[120px]">
      <PageTitle title="speakers" />
      <section className="mx-auto max-w-[1110px] px-3">
        <DevicePageComponent devicesData={speakerPageData} />
      </section>
    </div>
  );
};

export default Page;
