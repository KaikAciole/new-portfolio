import { Link } from "react-router-dom";

import styles from './Navbar.module.css'
import logo from '../../assets/developer.png'


export default function Navbar() {
    return(
      <nav className={styles.navbar}>
        <Link to="/">
          <img src={logo} alt="Logo" className={styles.navbarLogo} />
        </Link>
        <ul className={styles.list}>        
          <li className={styles.item}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.item}>
            <Link to="/sobre">Sobre</Link>
          </li>
          <li className={styles.item}>
            <Link to="/projetos">Projetos</Link>
          </li>
          <li className={styles.item}>
            <Link to="/contato">Contato</Link>
          </li>
        </ul>        
      </nav>
    )
    
}