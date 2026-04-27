'use client'

import React from "react";
import personLogo from "@/assets/user.png";
import Image from "next/image";
import NavLink from "../../components/shared/NavLink";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
  const {data: session} = authClient.useSession()
  const user = session?.user;

  console.log("session data = ", user);


  return (
    <div className="flex justify-between items-center mb-8 max-w-3/4 mx-auto ">
      {/* Item-1 */}
      <div></div>

      {/* Item-2 */}
      <div className="text-[#706F6F] text-[15px] flex items-center gap-4">
        <NavLink href={'/'}>Home</NavLink>
        <NavLink href={'/about'}>About</NavLink>
        <NavLink href={'/career'}>Career</NavLink>
      </div>

      {/* Item-3 */}
      <div className="flex items-center gap-2">

        {
          user ? 
          (<>
          <div className="flex items-center gap-2">
            <p className="text-[#706F6F] font-medium text-sm">Welcome, {user.name}</p>
            <div className="w-12 h-12">
              <Image className="rounded-full object-cover h-full w-full" src={user.image || personLogo} alt="personImg" width={30} height={30} />
            </div>
          </div>
          <Link href='/category/01'>
            <button onClick={() => authClient.signOut()} className="text-[15px] btn bg-[#403F3F] px-8 text-white font-semibold rounded-xs cursor-pointer">LogOut</button>
          </Link>
          </>)
          :
          (<>
          <Image src={personLogo} alt="personLogo" width={28} height={28} />
          <Link href='/login'>
            <button className="text-[15px] btn bg-[#403F3F] px-8 text-white font-semibold rounded-xs cursor-pointer">Login</button>
          </Link>
          </>)
        }
      </div>
    </div>
  );
};

export default Navbar;
