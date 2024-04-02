import { CgMenuMotion } from "@react-icons/all-files/cg/CgMenuMotion";
import { CgClose } from "@react-icons/all-files/cg/CgClose";

import { useEffect, useRef, useState } from "react";

import config from "@data/config.json";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const Header = () => {
  const [showNav, setShowNav] = useState(false);

  const mobileNavTimelineRef = useRef(gsap.timeline({ paused: true }));

  const mobileNavRef = useRef(null);
  const logoRef = useRef(null);

  useGSAP(() => {
    mobileNavTimelineRef.current
      .to(mobileNavRef.current, {
        position: "fixed",
        display: "flex",
        height: "100%",
        duration: 0.3,
      })
      .to(".mobileNavItems", {
        opacity: 1,
        stagger: 0.1,
      });
  });

  useEffect(() => {
    console.log("showNav", showNav);

    if (showNav) {
      mobileNavTimelineRef.current.play();
    } else {
      mobileNavTimelineRef.current.reverse();
    }
  }, [showNav]);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <nav className="bg-secondary relative left-0 top-0 z-50 w-full opacity-0">
      <div
        ref={mobileNavRef}
        className="from-secondary to-base-300 left-0 top-0 hidden h-0 w-full flex-col items-center justify-center gap-16 overflow-hidden bg-gradient-to-br"
      >
        {config.pages.map((page) => (
          <a
            key={page.name}
            href={page.url}
            className="mobileNavItems text-center font-serif text-6xl font-extralight opacity-0 hover:italic"
          >
            {page.name}
          </a>
        ))}
      </div>
      <div className="flex items-center justify-evenly p-4 py-2">
        <div className="invisible flex-1">hi</div>
        <div className="flex flex-grow justify-center">
          <a
            ref={logoRef}
            href="/"
            className="z-50 text-center text-2xl font-bold"
          >
            {config.businessName}
          </a>
        </div>

        <div className="flex flex-1 justify-end">
          {!showNav ? (
            <CgMenuMotion
              className="relative z-50 cursor-pointer self-end text-4xl transition"
              onClick={() => toggleNav()}
            />
          ) : (
            <CgClose
              className="relative z-50 cursor-pointer text-4xl transition"
              onClick={() => toggleNav()}
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
