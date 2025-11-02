"use client";

import { useRouter } from "next/navigation";

const GoBack = () => {
  const router = useRouter();
  return (
    <p
      className="text-darker/50 hover:text-primary mb-6 cursor-pointer self-start pt-4 text-[15px] transition-all duration-200 md:mb-10 md:pt-8 lg:mb-14 lg:pt-20"
      onClick={() => router.back()}
    >
      Go Back
    </p>
  );
};

export default GoBack;
