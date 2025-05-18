import { Link } from 'react-router-dom'

import Container from '.Container'
import styles from './Navbar.module.css'
import logo from '../assets/sitelease_logo.png'

function Navbar(){
  return(
    <nav className={styles.navbar}>
      <Container>
        <Link to="/">
          <img src={logo} alt="/assets/sitelease_logo.png"/>
        </Link>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.item}>
            <Link to="/servicos">Services</Link>
          </li>
          <li className={styles.item}>
            <Link to="/company">Empresa</Link>
          </li>
          <li className={styles.item}>
            <Link to="/portfolio">Portfólio</Link>
          </li>
          <li className={styles.item}>
            <Link to="/contact">Contact</Link>
          </li>
          <li className={styles.item}>
            Solicitar Orçamento
          </li>
        </ul>
      </Container>
    </nav>
  )
}

export default Navbar