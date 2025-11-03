import OrderDetails from "@/app/_components/OrderDetails";
import { getOrderInfo } from "@/app/actions";

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  // const order = await fetchQuery(
  //   api.queries.getOrderWithItems.getOrderWithItems,
  //   {
  //     orderId: id as Id<"order">,
  //   },
  // );
  const { data, error } = await getOrderInfo(id);
  console.log("order details", data);
  // const order = true;

  // if (!data) return notFound();
  if (!data)
    return (
      <div className="bg-lighter flex h-dvh w-dvw flex-col items-center justify-center gap-y-4">
        <p className="text-darker text-xl">An error occured</p>
        <span className="text-red-600">{error}</span>
      </div>
    );

  // return <div className="bg-light text-darker">Order id : {id}</div>;

  return (
    <div className="bg-lighter h-dvh w-full px-6 md:px-10">
      <OrderDetails order={data} />;
    </div>
  );
};

export default page;
