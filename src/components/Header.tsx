import Link from "next/link";
import React from "react";

export const Header = () => {
  return (
    <div className="w-full flex justify-center flex flex-row max-w-screen-xl py-10 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
      <div className="flex flex-row items-center justify-between lg:justify-start">
        <Link
          className="text-lg font-bold tracking-tighter text-blue-600 transition duration-500 ease-in-out transform tracking-relaxed lg:pr-8"
          href="/"
        >
          Bun Nextjs
        </Link>
      </div>

      <ul className="flex-grow flex flex-row justify-center">
        <li>
          <Link
            href="/"
            className="px-2 lg:px-6 py-6 text-sm border-b-2 border-transparent hover:border-blue-600 leading-[22px] md:px-3 text-gray-500 hover:text-blue-500"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="px-2 lg:px-6 py-6 text-sm border-b-2 border-transparent leading-[22px] md:px-3 text-gray-500 hover:text-blue-500 hover:border-blue-600"
          >
            About <span className="hidden lg:inline"> us </span>
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="px-2 lg:px-6 py-6 text-sm border-b-2 border-transparent hover:border-blue-600 leading-[22px] md:px-3 text-gray-500 hover:text-blue-500"
          >
            Contact <span className="hidden lg:inline">us</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};
