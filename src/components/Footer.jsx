"use client";
import logo from "@/assets/logo/ngo-logo.png";
import { followUsLinks, servicesLinks } from "@/constants/footer";
import { headerLinks } from "@/constants/header";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const handleSubmit = async () => {
    if (!email) {
      return toast.error("Please add a valid gmail");
    }
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = regex.test(email);
    if (!isValid) {
      return toast.error("Please add a valid gmail");
    }
    try {
      const res = await fetch("/api/subscriber", {
        method: "POST",
        body: JSON.stringify({ email }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.status === 409) {
        setEmail("");
      }
      const data = await res.json();
      setEmail("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <footer className="bg-deepgreen grid text-white py-8 md:py-12 lg:py-13.25 ">
      <div className="mt-10 sm:mt-0 container order-2 flex flex-col gap-4 md:flex-row gap-y-6 justify-between sm:items-center">
        <div className="flex-1 max-w-116.75">
          <div>
            <small className="text-xl font-medium">Newsletter</small>
            <h2 className="text-4xl font-bold my-8">Get Update Every Week</h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-5 sm:items-center w-full ">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              className=" bg-white placeholder:text-gray-400 py-2 w-full rounded-2xl pl-6 focus:outline-none h-11.5"
            />
            <button
              onClick={handleSubmit}
              className=" flex items-center justify-center text-nowrap   h-11.5 px-8 rounded-full bg-gray text-charcoal transistion-transform duration-300"
            >
              Subscribe Now
            </button>
          </div>
        </div>
        <div className="mb-2 sm:mb-0">
          <div>
            <h4 className="text-lg font-semibold flex items-center gap-1.5">
              <Icon icon="tdesign:call" width="20" height="20" /> Give us a call
            </h4>
            <a
              href="tel:+8801700000000"
              className="text-3xl font-bold font-hind-siliguri hover:underline hover:text-red"
            >
              +8801700000000
            </a>
          </div>
        </div>
      </div>
      <div className="container order-1 grid lg:grid-cols-[288px_1.4fr] xl:grid-cols-[288px_1.2fr]  lg:gap-x-14  xl:gap-x-20  sm:mt-16">
        <div>
          <Link href="/" className="flex items-center">
            <Image
              src={logo}
              alt="Logo"
              width={52}
              height={52}
              className="w-12.5 object-cover"
            />
            <span className="ml-2 font-bold text-4xl font-hind-siliguri">
              NGO
            </span>
          </Link>
          <p className="py-3.5 font-hind-siliguri font-medium">
            This is Photoshop’s version of Lorem Ipsum. Proin gravida nibh vel
            velit auctor aliquet
          </p>
          <ul className="mt-4.75 gap-x-8 flex">
              {followUsLinks.map((link) => (
                <li key={link.id}>
                  <a
                    className={`hover:text-red`}
                    href={link.href}
                  >
                    <Icon icon={link.icon} width="24" height="24" />
                  </a>
                </li>
              ))}
            </ul>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr] gap-10 sm:gap-14 md:gap-16 lg:gap-20  mt-12 lg:mt-0 pt-3.25">
          <div>
            <p className="text-lg font-semibold">Contact Us</p>
            <ul className="mt-4.75 space-y-3.5">
              {servicesLinks.map((link) => (
                <li key={link.id} className="flex items-center gap-2">
                  <Icon  icon={link.icon} width="20" height="20"/>
                  <a
                    className=" text-light hover:underline hover:text-red"
                    href={link.href}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
             
            </ul>
          </div>
          <div>
            <p className="text-lg font-semibold">Explore Us</p>
            <ul className="mt-4.75 space-y-3.5">
              {headerLinks.slice(1,headerLinks.length).map((link) => (
                <li key={link.id}>
                  <Link
                    className=" text-light hover:underline hover:text-red"
                    href={link.path}
                  >
                    {link.pathname}
                  </Link>
                </li>
              ))}
              
            </ul>
          </div>
          
          <div className="">
            <p className="text-lg font-semibold">Photo Gallery</p>
            <ul className="mt-4 grid grid-cols-3 gap-2">
              {Array.from({length:6}).map((_,id) => (
                <li key={id} className="w-full  h-16.5 bg-white"/>                 
                
              ))}
              
            </ul>
          </div>
        </div>
      </div>
      <div className="container order-3">
        <hr className=" text-gray-300 mt-2 mb-4" />
        <div className="flex flex-col-reverse lg:flex-row gap-y-6 justify-between md:items-center ">
          <p className="text-light text-sm sm:text-base">
            © 2025 NGO. All rights reserved.
          </p>
          <div className="flex flex-col md:flex-row justify-between gap-4 lg:w-124">
            <Link
              href="/privacy-policy"
              className="text-light underline hover:text-blue-500 relative "
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms-of-service"
              className="text-light underline hover:text-blue-500 relative "
            >
              Terms of Service
            </Link>
            <Link
              href="/privacy-policy"
              className="text-light underline hover:text-blue-500 relative "
            >
              Cookies settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
