"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [animate, setAnimate] = useState("");

  const navLinks = [
    { title: "About Us", href: "#" },
    { title: "Services", href: "#" },
    { title: "Use Cases", href: "#" },
    { title: "Pricing", href: "#" },
    { title: "Blog", href: "#" },
    { title: "Request a quote", href: "#", isButton: true },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isOpen) {
        setIsOpen(false);
        setAnimate("");
        document.body.style.overflow = "auto";
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  const handleOpenHeader = () => {
    setAnimate("animate-slideIn");
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };

  const handleCloseHeader = () => {
    setAnimate("animate-slideOut");
    const handler = () => {
      setIsOpen(false);
      document.body.style.overflow = "auto";
    };
    document.addEventListener("animationend", handler, { once: true });
  };

  return (
    <div className="relative h-[76px] lg:h-[110px]">
      <header className="fixed py-5 bg-white shadow w-full z-20">
        <div className="container">
          <div className="flex justify-between items-center">
            <div className="logo">
              <img src="/p-logo.svg" alt="logo" width="218" height="36" />
            </div>

            <div className="block lg:hidden">
              <button onClick={handleOpenHeader}>
                <img src="/hamburger.svg" alt="hamburger" height={24} width={24} />
              </button>
            </div>

            <div
              className={`${
                isOpen
                  ? `block absolute top-0 right-0 bg-white h-[100dvh] p-6 overflow-y-auto w-full max-w-[350px] ${animate}`
                  : "hidden"
              } links lg:block`}
            >
              <div className="flex justify-end lg:hidden pb-4">
                <button onClick={handleCloseHeader}>
                  <img src="/closebutton.svg" alt="close-button" height={24} width={24} />
                </button>
              </div>

              <nav>
                <ul className="flex flex-col lg:flex-row gap-y-4 lg:gap-x-5 xl:gap-x-10 items-start lg:items-center">
                  {navLinks.map((link, idx) => (
                    <li key={idx}>
                      {link.isButton ? (
                        <Link
                          className="btn btn-secondary p-5"
                          href={link.href}
                        >
                          {link.title}
                        </Link>
                      ) : (
                        <Link
                          className="text-lg lg:text-xl text-black transition-all ease-in-out duration-300 hover:text-primary"
                          href={link.href}
                        >
                          {link.title}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};
export default Header;
