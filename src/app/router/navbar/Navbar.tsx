import { links, Link as ILink } from "./links";
import { useResize } from "commons/custom-hooks";
import { Link as LinkComponent } from "react-router-dom";
import { useState, useLayoutEffect, useRef } from "react";

interface LinkProps extends ILink {
  showText: boolean;
}

const Link = ({ icon, linkTo, text, showText }: LinkProps) => {
  return (
    <>
      <LinkComponent
        to={linkTo}
        className="flex flex-col justify-center items-center p-4"
      >
        <span className="material-icons">{icon}</span>
        {showText && <p className="text-sm">{text}</p>}
      </LinkComponent>
    </>
  );
};

export const Nabvar = () => {
  const [showText, setShowText] = useState(true);
  const navBarRef = useRef<HTMLHeadingElement>(null);

  const setShowTextByWidth = () => {
    if (navBarRef.current) {
      if (navBarRef.current.scrollWidth > navBarRef.current.offsetWidth) {
        setShowText(false);
      } else {
        setShowText(true);
      }
    }
  };

  useResize(setShowTextByWidth);

  useLayoutEffect(() => {
    setShowTextByWidth();
  }, []);
  return (
    <div
      className="bg-white flex justify-around border-t-2 box-border w-full overflow-auto"
      ref={navBarRef}
    >
      {links.map((link) => (
        <Link key={link.linkTo} {...link} showText={showText} />
      ))}
    </div>
  );
};
