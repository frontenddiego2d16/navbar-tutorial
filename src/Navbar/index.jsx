import { useState } from "react";
import styles from './Navbar.module.css'
import { NavbarList } from "./NavbarList";

function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  return (

    <header className={styles.containerNavbar}>
      <h1 className={styles.title}>Navbar</h1>


      <div className={styles.navbarIconOpen}
        onClick={() => setIsOpen(!isOpen)}
      >
        <i className="fa-solid fa-bars"></i>
      </div>

      <NavbarList isOpen={isOpen} setIsOpen={setIsOpen} />

    </header>
  )
}

export { Navbar };