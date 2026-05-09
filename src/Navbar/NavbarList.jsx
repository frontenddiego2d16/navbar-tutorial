import styles from './NavbarList.module.css'

const NavbarList = ({ isOpen, setIsOpen }) => {

  return (
    <nav className={`${styles.navbar} ${isOpen ? styles.navbarIconOpen : styles.navbarClose}`}>

      <div className={styles.navbarIconClose}
        onClick={() => setIsOpen(!isOpen)}
      >
        <i className="fa-solid fa-x"></i>
      </div>

      <ul className={styles.navbarList}>
        <li><a href="#">Home</a></li>
        <li><a href="#">Categories</a></li>
        <li><a href="#">Profile</a></li>
        <li><a href="#">About</a></li>
      </ul>

      <button className={styles.btnHighlight}>
        Log in
      </button>
    </nav>
  )
}

export { NavbarList };