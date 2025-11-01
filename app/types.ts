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

export type { PageDataType, DeviceDetails };
