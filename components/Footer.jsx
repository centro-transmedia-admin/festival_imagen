import styles from '../styles/Footer.module.css'

const Footer = ({ dark }) => {
    return (
        <footer className={styles.credits}>
            <h4>Un evento de la Facultad de Artes y Humanidades de La Universidad de Caldas</h4>
            <img src={`${dark ? "/logos_oscuro.png" : "/logos_claro.png"}`} className={styles.logos} />
            <h4>En alianza con</h4>
            <img src={`${dark ? "/logos_alianza_oscuro.png" : "/logos_alianza_claro.png"}`} className={styles.logos} />
        </footer>
    )
}

export default Footer;
