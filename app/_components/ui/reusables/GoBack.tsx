"use client";

import { useRouter } from "next/navigation";

const GoBack = () => {
  const router = useRouter();
  return (
    <p
      className="text-darker/50 hover:text-primary mt-20 mb-14 cursor-pointer self-start text-[15px] transition-all duration-200"
      onClick={() => router.back()}
    >
      Go Back
    </p>
  );
};

export default GoBack;
