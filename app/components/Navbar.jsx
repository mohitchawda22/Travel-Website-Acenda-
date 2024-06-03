import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { UserButton } from "@clerk/nextjs";

const Navbar = () => {
  const { userId } = auth();

  return (
    <div>
      <header className="text-black py-4 p-3">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-xl font-bold">
            <Link href="/">
              <p className="text-blue-700">ACENDA</p>
            </Link>
          </div>
          <nav className="flex justify-between items-center">
            <ul className="flex space-x-4">
              <li>
                <Link href="/">
                  <p className="hover:underline">Home</p>
                </Link>
              </li>
              <li>
                <Link href="/destinations">
                  <p className="hover:underline">Destinations</p>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <p className="hover:underline">Blog</p>
                </Link>
              </li>
              <li>
                <Link href="/news">
                  <p className="hover:underline">News</p>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <p className="hover:underline">Contact</p>
                </Link>
              </li>
            </ul>
          </nav>
          <div className="text-white flex items-center">
            {!userId && (
              <>
                <Link
                  href={"/sign-in"}
                  className="text-white bg-blue-500 p-2 hover:text-blue-500 hover:bg-white mr-4 rounded-lg"
                >
                  Sign In
                </Link>
                <Link
                  href={"/sign-up"}
                  className="text-blue-500 hover:text-white hover:bg-blue-500 p-2 mr-4 rounded-lg"
                >
                  Sign Up
                </Link>
              </>
            )}
            {userId && (
              <Link
                href={"profile"}
                className="text-black hover:text-gray-700 mr-4 font-bold"
              >
                Profile
              </Link>
            )}
            <div className="ml-auto">
              <UserButton afterSignOutUrl="/" />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
