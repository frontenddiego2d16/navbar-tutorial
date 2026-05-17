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
      <header>
        <h2>Navbar</h2>

        <div>
          <i className="fa-solid fa-bars"></i>
        </div>

        <nav>
          <div>
            <i className="fa-solid fa-x"></i>
          </div>
          <ul>
            {
              Links.map(link =>
                <li key={link.name} >
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