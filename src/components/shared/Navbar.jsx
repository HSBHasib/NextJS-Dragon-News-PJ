import Link from "next/link";
import React from "react";
import personLogo from "@/assets/user.png";
import Image from "next/image";
import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center w-3/4 mx-auto  my-4">
      {/* Item-1 */}
      <div></div>

      {/* Item-2 */}
      <div className="text-[#706F6F] text-[15px] flex items-center gap-4">
        <NavLink href={'/'}>Home</NavLink>
        <NavLink href={'/about-us'}>About</NavLink>
        <NavLink href={'/carear'}>Career</NavLink>
      </div>

      {/* Item-3 */}
      <div className="flex items-center gap-2">
        <Image src={personLogo} alt="personLogo" width={26} height={26} />
        <button className="text-[15px]  bg-[#403F3F] px-8 py-1 text-white font-semibold rounded-xs cursor-pointer active:scale-95">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
