type PageDataType = {
  imageSrc: string;
  isNewProduct: boolean;
  title: string;
  paragraph: string;
  id: string;
  route: string;
};

type DeviceDetails = {
  id: string;
  title: string;
  description: string;
  price: number;
  mainImage: string;
  features: { id: number; text: string }[];
  inTheBox: { no: number; title: string }[];
  images: { id: number; src: string }[];
  recommendedDevices: {
    id: number;
    name: string;
    imageSrc: string;
    deviceUrl: string;
  }[];
  isNewproduct: boolean;
};

type OrderItem = {
  customerId: string;
  imageUrl: string;
  name: string;
  orderId: string;
  price: number;
  quantity: number;
  totalAmount: number;
  _creationTime: number;
  _id: string;
};

type UserDetails = {
  address: string;
  country: string;
  city: string;
  email: string;
  name: string;
  phone: string;
  zipCode: string;
  _creationTime: number;
  _id: string;
};

type OrderDetails = {
  customerId: string;
  items: OrderItem[];
  status: string;
  taxes: number;
  timeStamp: string;
  total: number;
  user: UserDetails;
  creationTime: number;
  _id: string;
};

export type { PageDataType, DeviceDetails, OrderDetails };
