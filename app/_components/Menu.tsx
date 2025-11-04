import { useEffect } from "react";
import SpeakerDisplay from "./ui/reusables/SpeakerDisplay";

const Menu = ({ onClose }: { onClose: () => void }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);
  return (
    <div
      className="bg-darker/40 fixed top-[90px] right-0 bottom-0 left-0 z-50 overflow-y-scroll md:top-[94px] lg:hidden"
      onClick={onClose}
    >
      <div className="bg-lighter z-50 min-h-[340px] rounded-b-lg px-10 pt-20 max-md:pb-10">
        <SpeakerDisplay />
      </div>
    </div>
  );
};

export default Menu;
