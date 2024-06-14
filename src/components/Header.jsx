'use client';

import Image from "next/image";
import Link from "next/link";
import React from 'react';
import { signIn, useSession, signOut } from 'next-auth/react';

export default function Header() {
  const { data: session } = useSession();
  console.log('session : ', session);

  return (
    <div className="shadow-sm border-b sticky top-0">
      <div className="flex justify-between items-center max-w-6xl mx-auto bg-white z-30 p-3">
        {/* logo */}
        <Link href="/" className="hidden lg:inline-flex" >
          <Image
            alt="instagram logo"
            src="/instagram-7.webp"
            width={150} height={150}
          />
        </Link>
        <Link href="/" className="lg:hidden" >
          <Image
            alt="instagram logo"
            src="/Instagram_logo_2016.svg.webp"
            width={40} height={40}
          />
        </Link>
        

        {/* search input */}

        <input type="text" placeholder="Search" className="bg-gray-50 border border-gray-200 rounded text-sm w-full py-2 px-4 max-w-[210px]" />

        {/* menu items */}

        {
          session ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={session.user.image}
              alt={session.user.name}
              className="h-10 w-10 rounded-full cursor-pointer"
              onClick={signOut}
            />
          ) : (
              <button
                onClick={() => signIn()}
                className="text-sm font-semibold text-blue-500">
                Log In
              </button>
          )
        }
      </div>
    </div>
  )
}


