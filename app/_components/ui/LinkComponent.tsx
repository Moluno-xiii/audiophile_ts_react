"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const headerLinks = [
  {
    name: "home",
    route: "/",
  },
  {
    name: "headphones",
    route: "/headphones",
  },
  {
    name: "speakers",
    route: "/speakers",
  },
  {
    name: "earphones",
    route: "/earphones",
  },
];

const LinkComponent = () => {
  return (
    <ul
      className={`text-lighter flex flex-col items-center gap-x-[34px] uppercase max-md:gap-y-4 md:flex-row`}
    >
      {headerLinks.map((link) => (
        <NavLink link={link} key={link.route} />
      ))}
    </ul>
  );
};

export default LinkComponent;

const NavLink = ({ link }: { link: { route: string; name: string } }) => {
  const pathName = usePathname();
  const isActive =
    pathName.includes(link.name) || (link.name === "home" && pathName === "/");
  return (
    <li key={link.route}>
      <Link
        href={link.route}
        key={link.name}
        prefetch={true}
        className={`hover:text-primary transition-all duration-300 hover:scale-x-110 ${isActive && "text-primary"}`}
      >
        {link.name}
      </Link>
    </li>
  );
};
