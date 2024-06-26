import { CgMenuMotion } from "@react-icons/all-files/cg/CgMenuMotion";
import { CgClose } from "@react-icons/all-files/cg/CgClose";

import { useEffect, useRef, useState } from "react";

import logoImg from "@assets/images/logo.png";

import config from "@data/config.json";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

interface Props {
  isHome: boolean;
}

const Header = ({ isHome }: Props) => {
  const [showNav, setShowNav] = useState(false);

  const mobileNavTimelineRef = useRef(gsap.timeline({ paused: true }));

  const mobileNavRef = useRef(null);
  const logoRef = useRef(null);

  useGSAP(() => {
    mobileNavTimelineRef.current
      .to(
        mobileNavRef.current,
        {
          position: "fixed",
          display: "flex",
          height: "100%",
          duration: 0.3,
        },
        0,
      )
      .to(".mobileNavItems", {
        opacity: 1,
        stagger: 0.1,
      });
  });

  useEffect(() => {
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
    <nav
      className={`absolute left-0 top-0 z-50 h-20 w-full ${isHome ? "opacity-0" : "opacity-100"}`}
    >
      <div
        ref={mobileNavRef}
        className="left-0 top-0 hidden h-0 w-full flex-col items-center justify-center gap-16 overflow-hidden bg-gradient-to-br from-secondary to-base-300"
      >
        {config.pages.map((page) => (
          <a
            key={page.name}
            href={page.url}
            className="mobileNavItems text-center text-6xl font-extralight opacity-0 transition-colors hover:text-primary"
          >
            {page.name}
          </a>
        ))}
      </div>
      <div className="flex h-full items-center justify-evenly">
        {/* <div className="invisible flex-1 max-md:hidden">hi</div> */}
        {/* <div className="ml-8 flex flex-grow items-center justify-start max-md:ml-4 max-md:justify-start">
          <a
            ref={logoRef}
            href="/"
            className="z-50 text-center text-2xl font-bold text-gray-300 transition hover:opacity-90"
          >
            <img src={logoImg.src} alt="Logo" className="h-16" />
          </a>
        </div> */}

        <div className="flex flex-1 justify-end text-gray-300">
          {
            config.pages.map(page => (
              <a
                key={page.name}
                href={page.url}
                className="pr-4 text-sm text-primary transition hover:text-primary/80"
              >
                {page.name}
              </a>

            ))
          }
        </div>

        {/* <div className="flex flex-1 justify-end text-gray-300">
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
        </div> */}
      </div>
    </nav>
  );
};

export default Header;
