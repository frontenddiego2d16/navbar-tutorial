import styles from './App.module.css'

function App() {

  return (
    <header className={styles.containerNavbar}>
      <h1 className={styles.title}>Navbar</h1>


      <div className={styles.navbarIconOpen}>
        <i className="fa-solid fa-bars"></i>
      </div>

      <nav className={`${styles.navbar} ${styles.navbarClose}`}>

        <div className={styles.navbarIconClose}>
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
    </header>
  )
}

export default App; 