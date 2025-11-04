import OrderDetails from "@/app/_components/OrderDetails";
import { getOrderInfo } from "@/app/actions/actions";

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const { data, error } = await getOrderInfo(id);

  if (!data)
    return (
      <div className="bg-lighter flex flex-1 flex-col items-center justify-center gap-y-4">
        <p className="text-darker text-xl">An error occured</p>
        <span className="text-red-600">{error}</span>
      </div>
    );

  return (
    <div className="bg-lighter h-dvh w-full px-6 md:px-10">
      <OrderDetails order={data} />;
    </div>
  );
};

export default page;
