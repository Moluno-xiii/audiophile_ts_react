import { DeviceDetails, PageDataType } from "./types";

const headPhonesPageData: PageDataType[] = [
  {
    imageSrc: "/xx99-headphone.png",
    isNewProduct: true,
    title: "xx99 mark ii headphones",
    paragraph:
      "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
    id: "1",
    route: "/headphones/1",
  },
  {
    imageSrc: "/xx99-2headphone.png",
    isNewProduct: false,
    title: "xx99 mark i headphones",
    paragraph:
      "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
    id: "2",
    route: "/headphones/2",
  },
  {
    imageSrc: "/xx59-headphone.png",
    isNewProduct: false,
    title: "xx59 headphones",
    paragraph:
      "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
    id: "3",
    route: "/headphones/3",
  },
];

const speakerPageData: PageDataType[] = [
  {
    imageSrc: "/zx9-speaker.png",
    isNewProduct: true,
    title: "zx9 speaker",
    paragraph:
      "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
    id: "1",
    route: "/speakers/1",
  },
  {
    imageSrc: "/zx7-speaker.png",
    isNewProduct: false,
    title: "zx7 speaker",
    paragraph:
      "Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
    id: "2",
    route: "/speakers/2",
  },
];
const earphonesPageData: PageDataType[] = [
  {
    imageSrc: "/yx1-earphones.png",
    isNewProduct: true,
    title: "yx1 wireless earphones",
    paragraph:
      "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
    id: "1",
    route: "/earphones/1",
  },
];

const headPhoneDetailsPageData: DeviceDetails[] = [
  {
    id: "1",
    isNewproduct: true,
    title: "xx99 mark ii headphones",
    description:
      "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
    price: 2999,
    mainImage: "/xx99-headphone.png",
    features: [
      {
        id: 1,
        text: "Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.",
      },
      {
        id: 2,
        text: "The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.",
      },
    ],
    inTheBox: [
      {
        no: 1,
        title: "Headphone Unit",
      },
      {
        no: 2,
        title: "Replacement Earcups",
      },
      {
        no: 1,
        title: "User Manual",
      },
      {
        no: 1,
        title: "3.5mm Audio Cable",
      },
      {
        no: 1,
        title: "Travel Bag",
      },
    ],
    images: [
      {
        id: 1,
        src: "/listener.png",
      },
      { id: 2, src: "/hp-image-detail-2.png" },
      { id: 3, src: "/hp-image-detail-3.png" },
    ],
    recommendedDevices: [
      {
        id: 1,
        name: "xx99 mark i",
        imageSrc: "/xx99-2headphone.png",
        deviceUrl: "/headphones/2",
      },
      {
        id: 2,
        name: "xx59",
        imageSrc: "/xx59-headphone.png",
        deviceUrl: "/headphones/3",
      },
      {
        id: 3,
        name: "zx9 speaker",
        imageSrc: "/zx9-speaker.png",
        deviceUrl: "/speakers/1",
      },
    ],
  },
  {
    id: "2",
    isNewproduct: false,
    title: "xx99 mark i headphones",
    description:
      "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go. ",
    price: 1750,
    mainImage: "/xx99-2headphone.png",
    features: [
      {
        id: 1,
        text: "As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz.",
      },
      {
        id: 2,
        text: "From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is included with a balanced gold connector.",
      },
    ],
    inTheBox: [
      { no: 1, title: "Headphone Unit" },
      { no: 2, title: "Replacement Earcups" },
      { no: 1, title: "User Manual" },
      { no: 1, title: "3.55mm Audio Cable" },
    ],
    images: [
      {
        id: 1,
        src: "/mark1-id-1.png",
      },
      {
        id: 2,
        src: "/mark1-id-2.png",
      },
      {
        id: 3,
        src: "/mark1-id-3.png",
      },
    ],
    recommendedDevices: [
      {
        id: 1,
        name: "xx99 mark ii",
        imageSrc: "/xx99-headphone.png",
        deviceUrl: "/headphones/1",
      },
      {
        id: 2,
        name: "xx59",
        imageSrc: "/xx59-headphone.png",
        deviceUrl: "/headphones/3",
      },
      {
        id: 3,
        name: "zx9 speaker",
        imageSrc: "/zx9-speaker.png",
        deviceUrl: "/speakers/1",
      },
    ],
  },
  {
    id: "3",
    isNewproduct: false,
    title: "xx59 headphones",
    description:
      "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
    price: 899,
    mainImage: "/xx59-headphone.png",
    features: [
      {
        id: 1,
        text: "These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos.",
      },
      {
        id: 2,
        text: "More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.",
      },
    ],
    inTheBox: [
      { no: 1, title: "Headphone Unit" },
      { no: 2, title: "Replacement Earcups" },
      { no: 1, title: "User Manual" },
      { no: 1, title: "3.55mm Audio Cable" },
    ],
    images: [
      {
        id: 1,
        src: "/xx59-id-1.png",
      },
      {
        id: 2,
        src: "/xx59-id-2.png",
      },
      {
        id: 1,
        src: "/xx59-id-3.png",
      },
    ],
    recommendedDevices: [
      {
        id: 1,
        name: "xx99 mark ii",
        imageSrc: "/xx99-headphone.png",
        deviceUrl: "/headphones/1",
      },
      {
        id: 2,
        name: "xx99 mark i",
        imageSrc: "/xx99-2headphone.png",

        deviceUrl: "/headphones/2",
      },
      {
        id: 3,
        name: "zx9 speaker",
        imageSrc: "/zx9-speaker.png",
        deviceUrl: "/speakers/1",
      },
    ],
  },
];

const speakerDetailsPageData: DeviceDetails[] = [
  {
    id: "1",
    isNewproduct: true,
    title: "zx9 speaker",
    description:
      "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
    price: 4500,
    mainImage: "/zx9-speaker.png",
    features: [
      {
        id: 1,
        text: "Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m).",
      },
      {
        id: 2,
        text: "Discover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms.",
      },
    ],
    inTheBox: [
      {
        no: 2,
        title: "Speaker Unit",
      },
      {
        no: 2,
        title: "Speaker Cloth Panel",
      },
      {
        no: 1,
        title: "User Manual",
      },
      {
        no: 1,
        title: "3.5mm 10mm Audio Cable",
      },
      {
        no: 1,
        title: "10m Optical Cable",
      },
    ],
    images: [
      {
        id: 1,
        src: "/zx9-id-1.png",
      },
      { id: 2, src: "/zx9-id-2.png" },
      { id: 3, src: "/zx9-id-3.png" },
    ],
    recommendedDevices: [
      {
        id: 1,
        name: "zx7 speaker",
        imageSrc: "/zx7-speaker.png",
        deviceUrl: "/speakers/2",
      },
      {
        id: 2,
        name: "xx99 mark i",
        imageSrc: "/xx99-2headphone.png",
        deviceUrl: "/headphones/2",
      },
      {
        id: 3,
        name: "xx59",
        imageSrc: "/xx59-headphone.png",
        deviceUrl: "/headphones/3",
      },
    ],
  },
  {
    id: "2",
    isNewproduct: false,
    title: "zx7 speaker",
    description:
      "Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
    price: 3500,
    mainImage: "/zx7-speaker.png",
    features: [
      {
        id: 1,
        text: "Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage.",
      },
      {
        id: 2,
        text: "The ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience.",
      },
    ],
    inTheBox: [
      {
        no: 2,
        title: "Speaker Unit",
      },
      {
        no: 2,
        title: "Speaker Cloth Panel",
      },
      {
        no: 1,
        title: "User Manual",
      },
      {
        no: 1,
        title: "3.5mm 7.5mm Audio Cable",
      },
      {
        no: 1,
        title: "7.5m Optical Cable",
      },
    ],
    images: [
      {
        id: 1,
        src: "/zx7-id-1.png",
      },
      { id: 2, src: "/zx7-id-2.png" },
      { id: 3, src: "/zx7-id-3.png" },
    ],
    recommendedDevices: [
      {
        id: 1,
        name: "zx9 speaker",
        imageSrc: "/zx9-speaker.png",
        deviceUrl: "/speakers/1",
      },
      {
        id: 2,
        name: "xx99 mark i",
        imageSrc: "/xx99-2headphone.png",
        deviceUrl: "/headphones/2",
      },
      {
        id: 3,
        name: "xx59",
        imageSrc: "/xx59-headphone.png",
        deviceUrl: "/headphones/3",
      },
    ],
  },
];

const earphoneDetailsPageData: DeviceDetails[] = [
  {
    id: "1",
    isNewproduct: true,
    title: "yx1 wireless earphones",
    description:
      "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
    price: 599,
    mainImage: "/yx1-earphones.png",
    features: [
      {
        id: 1,
        text: "Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound.",
      },
      {
        id: 2,
        text: "The YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black.",
      },
    ],
    inTheBox: [
      {
        no: 2,
        title: "Earphone Unit",
      },
      {
        no: 6,
        title: "Multi-size Earplugs",
      },
      {
        no: 1,
        title: "User Manual",
      },
      {
        no: 1,
        title: "USB-C Charging Cable",
      },
      {
        no: 1,
        title: "Travel Pouch",
      },
    ],
    images: [
      {
        id: 1,
        src: "/yx1-id-1.png",
      },
      { id: 2, src: "/yx1-id-2.png" },
      { id: 3, src: "/yx1-id-3.png" },
    ],
    recommendedDevices: [
      {
        id: 1,
        name: "xx99 mark i",
        imageSrc: "/xx99-2headphone.png",
        deviceUrl: "/headphones/2",
      },
      {
        id: 2,
        name: "xx59",
        imageSrc: "/xx59-headphone.png",
        deviceUrl: "/headphones/3",
      },
      {
        id: 3,
        name: "zx9 speaker",
        imageSrc: "/zx9-speaker.png",
        deviceUrl: "/speakers/1",
      },
    ],
  },
];

const cart = [
  {
    name: "xx99 mk ii",
    amount: 1,
    price: 2999,
    imageSrc: "/xx99-headphone.png",
  },
  {
    name: "xx59",
    amount: 2,
    price: 899,
    imageSrc: "/xx59-headphone.png",
  },
  {
    name: "yx1",
    amount: 1,
    price: 599,
    imageSrc: "/yxi-earphone.png",
  },
];

export type { PageDataType };
export {
  headPhonesPageData,
  speakerPageData,
  earphonesPageData,
  headPhoneDetailsPageData,
  speakerDetailsPageData,
  earphoneDetailsPageData,
  cart,
};
