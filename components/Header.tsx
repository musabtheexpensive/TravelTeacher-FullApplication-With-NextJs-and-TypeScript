"use client";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="bg-[#013B94]">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">TravelTeacher</span>
            <img
              className="h-20 w-auto"
              src="https://i.ibb.co/5BZcqj5/travel.png"
              alt=""
            />
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
