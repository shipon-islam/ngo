"use client";
import fa_logo from "@/assets/logo/ngo-logo.png";
import { headerLinks } from "@/constants/header";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Button from "./Button";
export default function Header() {
  const [isShowNav, setIsShowNav] = useState(false);
  const path = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <header className="fixed w-full top-0 z-99 ">
        <div className="relative">
          <div className="bg-darkgreen h-10.5">
            <div className="container flex justify-between items-center  text-white">
              <div className="flex">
                <a
                  href="tel:+8801700000000"
                  className="flex items-center text-sm  text-white py-1 px-3"
                >
                  <Icon
                    icon="mdi:call"
                    className="text-red mr-1.5"
                    width="19"
                    height="19"
                  />
                  +880 1700-000000
                </a>
                <a
                  href="mailto:info@ashafoundation.org.bd"
                  className=" items-center text-sm  text-white py-1 px-3 hidden sm:flex"
                >
                  <Icon
                    icon="material-symbols:mail-outline-sharp"
                    className=" mr-1.5"
                    width="19"
                    height="19"
                  />
                  info@ashafoundation.org.bd
                </a>
              </div>
              <div className="flex items-center gap-x-4">
                <div className="sm:flex items-center gap-x-2 hidden ">
                  <a
                    href="https://www.facebook.com/ngobd"
                    className=" border rounded-full size-6 grid place-content-center  text-white py-1 px-3 hover:bg-white hover:text-darkgreen transition-colors duration-300"
                  >
                    <Icon
                      icon="flowbite:facebook-solid"
                      width={16}
                      height={16}
                    />
                  </a>

                  <a
                    href="https://www.linkedin.com/company/ngobd"
                    className=" border rounded-full size-6 grid place-content-center  text-white py-1 px-3 hover:bg-white hover:text-darkgreen transition-colors duration-300"
                  >
                    <Icon
                      icon="flowbite:linkedin-solid"
                      width={16}
                      height={16}
                    />
                  </a>
                  <a
                    href="https://www.twitter.com/ngobd"
                    className="border rounded-full size-6 grid place-content-center  text-white py-1 px-3 hover:bg-white hover:text-darkgreen transition-colors duration-300"
                  >
                    <Icon icon="codicon:twitter" width={14} height={14} />
                  </a>
                  <a
                    href="https://www.twitter.com/ngobd"
                    className="border rounded-full size-6 grid place-content-center  text-white py-1 px-3 hover:bg-white hover:text-darkgreen transition-colors duration-300"
                  >
                    <Icon icon="line-md:youtube" width={16} height={16} />
                  </a>
                </div>
                <button className="px-6 py-2 flex items-center gap-2">
                  <Icon
                    icon="pajamas:earth"
                    width="18"
                    height="18"
                    className="text-blue-500"
                  />{" "}
                  <span>EN / বাংলা</span>
                </button>
              </div>
            </div>
          </div>
          <div
            className={`${
              scrolled ? "bg-black/40" : "bg-black/40 lg:bg-transparent"
            }`}
          >
            <nav className="container py-2 ">
              <div className="flex justify-between items-center   text-white">
                <div className="text-2xl font-bold">
                  <Link href="/" className="flex items-center">
                    <Image
                      src={fa_logo}
                      alt="Logo"
                      width={70}
                      height={70}
                      className="w-10 sm:w-17.5 object-cover"
                    />
                    <span className="ml-2 font-bold text-3xl sm:text-5xl font-hind-siliguri">
                      NGO
                    </span>
                  </Link>
                </div>
                <div className="flex items-center gap-x-8">
                  <ul className="hidden lg:flex gap-x-8">
                    {headerLinks.map((link) => (
                      <li key={link.id}>
                        <Link
                          href={link.path}
                          className={`hover:text-red font-medium hoverEffect ${
                            path == link.path && "text-red"
                          }`}
                        >
                          {link.pathname}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-x-4">
                    <Link href="/donation">
                    <Button className="hidden sm:block">Donate</Button>
                    <Button size="small" className=" sm:hidden">
                      Donate
                    </Button>
                    </Link>
                    <button
                      onClick={() => setIsShowNav((prev) => !prev)}
                      className="cursor-pointer bg-white/20 px-1.5 py-1 rounded-lg lg:hidden"
                    >
                      <Icon
                        icon="material-symbols:menu-rounded"
                        className="text-3xl"
                      />
                    </button>
                  </div>
                </div>
                {/* for mobile */}
                <div
                  className={`lg:hidden absolute z-99  right-0 w-full h-screen top-0 transition-all duration-300  bg-black/40  origin-right ${
                    isShowNav
                      ? "scale-x-100 opacity-100"
                      : "scale-x-0 opacity-0"
                  }`}
                >
                  <div className="bg-white h-full w-3/4 ml-auto">
                    <div className="bg-darkgreen px-6 py-5">
                      <div className="flex items-center justify-between">
                        <Link
                          onClick={() => setIsShowNav((prev) => !prev)}
                          href="/"
                          className="flex items-center"
                        >
                          <Image
                            src={fa_logo}
                            alt="Logo"
                            width={26}
                            height={26}
                            className="w-6.5 object-cover"
                          />
                          <span className="ml-2 font-bold text-xl font-hind-siliguri">
                            NGO
                          </span>
                        </Link>
                        <button
                          onClick={() => setIsShowNav((prev) => !prev)}
                          className="bg-white/50 rounded-full p-0.5"
                        >
                          <Icon icon="iconamoon:close" width="24" height="24" />
                        </button>
                      </div>
                      <h5 className="font-medium mt-2">
                        Building hope across Bangladesh since 2005
                      </h5>
                    </div>
                    <ul className="flex flex-col gap-y-9 md:gap-y-10 pt-8 px-6 text-black">
                      {headerLinks.map((link) => (
                        <li key={link.id} className="flex items-center gap-4">
                          <Icon
                            icon={link.icon}
                            width="18"
                            height="18"
                            className={`${link.color}`}
                          />
                          <Link
                            href={link.path}
                            onClick={() => setIsShowNav((prev) => !prev)}
                            className={`hover:text-red  hoverEffect ${
                              path == link.path && "text-red"
                            }`}
                          >
                            {link.pathname}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
