import React from "react";
import { NavbarList } from "./NavbarList";
import { useState } from "react";


function Navbar() {

  const Links = [
    { id: 1, name: 'Home' },
    { id: 2, name: 'Categories' },
    { id: 3, name: 'Profile' },
    { id: 4, name: 'About' },
  ]

  return (
    <>
      <header className="bg-gray-800 flex justify-between p-5 shadow-lg shadow-secondary relative">
        <h2 className="drop-shadow-lg drop-shadow-secondary text-2xl">
          Navbar
        </h2>

        <div className="drop-shadow-lg drop-shadow-alert text-2xl">
          <i className="fa-solid fa-bars"></i>
        </div>

        <nav className="p-5 absolute top-0 right-0 w-1/2 h-screen bg-black/80 shadow-lg shadow-accent  flex-col gap-10 hidden"
        >
          <div className="flex justify-end drop-shadow-xl drop-shadow-alert text-2xl">
            <i className="fa-solid fa-x"></i>
          </div>

          <ul className="flex flex-col items-center gap-5 text-lg">
            {
              Links.map(link =>
                <li key={link.name} className="text-primary text-shadow-2xs text-shadow-secondary">
                  <NavbarList name={link.name} />
                </li>
              )
            }
          </ul>

          <button>
            Log in
          </button>
        </nav>

      </header>
    </>
  )
};

export { Navbar };