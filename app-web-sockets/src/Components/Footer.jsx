import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer>
        <div className={styles.container_footer}>
            <div className={styles.abajo}>
                <div className={styles.copyright}>
                    © 2023 Todos los Derechos Reservados | <a href="">MEJORADORES</a>
                </div>
                <div className={styles.information}>
                    <a href="">Informacion Compañia</a> | <a href="">Privacion y Politica</a> | <a href="">Terminos y Condiciones</a>
                </div>
            </div>
           </div>
    </footer>
  )
}

export default Footer