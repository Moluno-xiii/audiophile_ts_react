"use client";
import { useRouter } from "next/navigation";
import Button from "./_components/ui/reusables/Button";

const NotFound: React.FC = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-y-3">
      Page not found, go back home
      <Button text="Not found" onClick={() => router.push("/")} />
    </div>
  );
};

export default NotFound;
