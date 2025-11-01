"use client";
import { useRouter } from "next/navigation";
import Button from "./_components/ui/reusables/Button";

const NotFound: React.FC = () => {
  const router = useRouter();
  return (
    <div className="bg-light flex min-h-dvh min-w-dvw flex-col items-center justify-center gap-y-3">
      <p className="text-darker">Page not found</p>
      <Button text="Go back home" onClick={() => router.push("/")} />
    </div>
  );
};

export default NotFound;
