import { OrderDetails } from "../types";

interface Props {
  order: OrderDetails;
}

const Order: React.FC<Props> = ({ order }) => {
  return (
    <div className="text-darker bg-lighter mx-auto flex h-full max-w-[1110px] flex-col gap-y-10 py-6 md:py-10">
      <div className="flex flex-col gap-y-3">
        <p>Total amount : {order.total}</p>
        <p>User : {order.user.name}</p>
        <p>Order Id : {order._id}</p>
      </div>
      <ul className="flex flex-col gap-y-3">
        {order.items.map((item) => (
          <li key={item._id} className="flex flex-col gap-y-2">
            <p>Name {item.name}</p>
            <p>Price {item.price}</p>
            <p>Quantity {item.quantity}</p>
            <p>Total amount : {item.totalAmount}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Order;
