import React from "react";
import { NavbarList } from "./NavbarList";
import { useState } from "react";


function Navbar() {

  const [isOpen, setIsOpen] = useState(false);
  const [isSelect, setIsSelect] = useState('Home')

  const Links = [
    { id: 1, name: 'Home' },
    { id: 2, name: 'Categories' },
    { id: 3, name: 'Profile' },
    { id: 4, name: 'About' },
  ]

  const handleIsOpen = () => {
    setIsOpen(!isOpen)
  }

  const handleSelect = (text) => {
    setIsSelect(text)
  }

  return (
    <>
      <header className="w-full bg-gray-800 flex justify-between p-5 shadow-lg shadow-secondary relative md:items-center">
        <h2 className="drop-shadow-lg drop-shadow-secondary text-2xl">
          Navbar
        </h2>

        <div className="drop-shadow-lg drop-shadow-alert text-2xl md:hidden"
          onClick={handleIsOpen}
        >
          <i className="fa-solid fa-bars"></i>
        </div>

        <nav className={
          `p-5 absolute top-0 right-0 w-1/2 h-screen bg-black/80 shadow-lg shadow-accent flex flex-col gap-10 transition-all ease-in-out duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-96'} md:relative md:translate-x-0 md:bg-transparent md:w-auto md:shadow-none md:flex-row md:h-auto`}
        >

          <div className="flex justify-end drop-shadow-xl drop-shadow-alert text-2xl md:hidden"
            onClick={handleIsOpen}
          >
            <i className="fa-solid fa-x"></i>
          </div>

          <ul className="flex flex-col items-center gap-10 text-lg md:flex-row">
            {
              Links.map(link =>
                <li key={link.name}
                  className=
                  {`shadow-xl font-semibold
                  ${isSelect === link.name ?
                      'text-secondary shadow-secondary'
                      :
                      'text-primary shadow-alert'}
                      hover:text-secondary hover:shadow-secondary transition-all ease-in-out duration-500
                  `}
                  onClick={() => handleSelect(link.name)}
                >
                  <NavbarList name={link.name} />
                </li>
              )
            }
          </ul>

          <button className="mt-3 text-accent rounded-xl border-2 border-secondary py-1 px-2 font-semibold shadow-lg shadow-secondary md:mt-0
          hover:text-base-text hover:bg-primary transition-all hover:shadow-primary ease-in-out duration-500
          ">
            <a href="#">
              Log in
            </a>
          </button>
        </nav>

      </header>
    </>
  )
};

export { Navbar };