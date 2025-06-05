import Image from "next/image";
import React from "react";
import logo from "@/public/footer-logo.png";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="   bg-[image:var(--footer-bg)]  bg-cover  ">
      <div className=" grid grid-cols-6 container py-28 border-b border-[#777980] px-7">
        <div className="col-span-2">
          <Image src={logo} alt="footer-logo" />
        </div>

        <div className="">
          <h3 className=" text-lg font-semibold text-white">Quick Link</h3>
          <div className="flex flex-col gap-3 mt-5">
            <Link className=" text-base text-[#E9E9EA]" href="#">
              Home{" "}
            </Link>
            <Link className=" text-base text-[#E9E9EA]" href="#">
              Music Albums
            </Link>
            <Link className=" text-base text-[#E9E9EA]" href="#">
              Music Events
            </Link>
            <Link className=" text-base text-[#E9E9EA]" href="#">
              Merchandise
            </Link>
          </div>
        </div>
        <div className="">
          <h3 className=" text-lg font-semibold text-white">
            Importants Links
          </h3>
          <div className="flex flex-col gap-3 mt-5">
            <Link className=" text-base text-[#E9E9EA]" href="#">
              Privacy Policy
            </Link>
            <Link className=" text-base text-[#E9E9EA]" href="#">
              Terms of Service
            </Link>
            <Link className=" text-base text-[#E9E9EA]" href="#">
              Cookies Settings
            </Link>
          </div>
        </div>
        <div className=" col-span-2">
          <p>Sign Up for our newsletter and never miss any offers.</p>
          {/* <div className="bg-white rounded-full shadow-md flex overflow-hidden w-full max-w-md">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="flex-grow px-4 py-3 text-sm outline-none text-black placeholder:text-gray-500"
            />
            <button className="bg-gradient-to-r from-[#A57C2B] via-[#EACB55] to-[#FFEA99] text-black font-semibold text-sm px-6 py-3 rounded-none">
              Start For Free
            </button>
          </div> */}
          {/* <p>Follow Us</p> */}
          <div className=" max-w-[547px]">
            <input type="text" placeholder="Enter Your Email" className=" bg-white w-full py-6 px-3 rounded-xl" />
          </div>
          <div></div>
        </div>
      </div>
      <div className="flex justify-center items-center py-4">
        <p className=" text-white text-base font-medium">Copyright © 2025 Trogent Music | All Rights Reserved </p>
      </div>
    </footer>
  );
}
