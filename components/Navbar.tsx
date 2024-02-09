import { useState, useEffect, FunctionComponent, useContext } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { GlobalContext } from "../context/GlobalContext";
import { Category, IContextState } from "../types";
import ProjectsNavbar from "../components/ProjectsNavbar";

const NavItem: FunctionComponent<{
  name: string;
  route: string;
}> = ({ name, route }) => {
  const {
    activeNavBarTab,
    setActiveNavBarTab,
    setCurrentCategory,
    setCurrentProject,
  } = useContext(GlobalContext) as IContextState;
  return activeNavBarTab !== name ? (
    <Link href={route}>
      <span
        className="mx-2 cursor-pointer border-b-4 text-gray-700 border-transparent hover:border-gray-200 hover:text-gray-400"
        onClick={() => {
          setCurrentCategory("All");
          setCurrentProject(null);
          setActiveNavBarTab(name);
        }}
      >
        {name}
      </span>
    </Link>
  ) : null;
};

const Navbar = () => {
  const { pathname } = useRouter();
  const { activeNavBarTab, setActiveNavBarTab, setCurrentCategory } =
    useContext(GlobalContext) as IContextState;

  useEffect(() => {
    if (pathname === "/") setActiveNavBarTab("Home");
    else if (pathname === "/projects") {
      setActiveNavBarTab("Projects");
    } else if (pathname === "/aPropos") setActiveNavBarTab("Arcadie?");
    else if (pathname === "/contact") setActiveNavBarTab("Contact");
    console.log("activeNavBarTab has been changed to ", activeNavBarTab);
  }, []);

  return (
    <div className="flex justify-between items-center px-5 my-3">
      <div>
        <span className="text-xl font-bold border-b-4 md:text-2xl">
          {activeNavBarTab}
        </span>
      </div>
      {/* Conditionally render ProjectsNavbar */}
      {activeNavBarTab === "Projets" && <ProjectsNavbar />}

      <div className="text-base md:text-xl items-center ml-auto ">
        <NavItem name="Home" route="/" />
        <NavItem name="Projets" route="/projects" />
        <NavItem name="Arcadie?" route="/aPropos" />
        <NavItem name="Contact" route="/contact" />
      </div>
    </div>
  );
};

export default Navbar;
