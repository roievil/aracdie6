import { useState, useEffect, FunctionComponent, useContext } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { GlobalContext } from "../context/GlobalContext";
import { IContextState } from "../types";

const NavItem: FunctionComponent<{
  name: string;
  route: string;
}> = ({ name, route }) => {
  const { activeNavBarTab, setActiveNavBarTab } = useContext(
    GlobalContext
  ) as IContextState;
  return activeNavBarTab !== name ? (
    <Link href={route}>
      <span
        className="mx-2 cursor-pointer border-b-4 text-gray-700 border-transparent hover:border-gray-200 hover:text-gray-400"
        onClick={() => setActiveNavBarTab(name)}
      >
        {name}
      </span>
    </Link>
  ) : null;
};

const Navbar = () => {
  const { pathname } = useRouter();
  const { activeNavBarTab, setActiveNavBarTab } = useContext(
    GlobalContext
  ) as IContextState;

  //later
  useEffect(() => {
    if (pathname === "/") setActiveNavBarTab("Home");
    else if (pathname === "/projects") setActiveNavBarTab("Projects");
    else if (pathname === "/aPropos") setActiveNavBarTab("Arcadie?");
    else if (pathname === "/contact") setActiveNavBarTab("Contact");
  }, []);

  return (
    <div className="border-b border-gray-400 flex items-center justify-between px-5 pb-3 my-3">
      <span className="text-xl font-bold border-b-4 md:text-2xl">
        {activeNavBarTab}
      </span>

      <div className="text-base md:text-xl">
        <NavItem name="Home" route="/" />
        <NavItem name="Projets" route="/projects" />
        <NavItem name="Arcadie?" route="/aPropos" />
        <NavItem name="Contact" route="/contact" />
      </div>
    </div>
  );
};

export default Navbar;
