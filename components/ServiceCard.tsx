import { FunctionComponent, useContext } from "react";
import { IContextState, Service } from "../types";
import Image from "next/image";
import Link from "next/link";
import { GlobalContext } from "../context/GlobalContext";

const ServiceCard: FunctionComponent<{ service: Service }> = ({
  service: { icon, title, about },
}) => {
  // XSS attack :( on our portfolio btw, as an alternate use npm i dom purify
  function createMarkup() {
    return {
      __html: about,
    };
  }

  const { setCurrentCategory, setActiveNavBarTab } = useContext(
    GlobalContext
  ) as IContextState;

  return (
    <Link
      href={"/projects/"}
      className="flex items-center p-2 space-x-4"
      onClick={() => {
        setCurrentCategory(title);
        setActiveNavBarTab("Projets");
      }}
    >
      <Image
        src={icon}
        alt={"test"}
        className="cursor-pointer"
        height="25"
        width="25"
      />
      <div className="">
        <h6 className="font-bold">{title}</h6>
        <p dangerouslySetInnerHTML={createMarkup()} />
      </div>
    </Link>
  );
};

export default ServiceCard;
