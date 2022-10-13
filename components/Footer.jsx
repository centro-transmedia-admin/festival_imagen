import styles from '../styles/Footer.module.css'

const Footer = ({ dark }) => {
    return (
        <footer className={styles.credits}>
            <h4>En alianza con</h4>
            <img src={`${dark ? "/logos_alianza_oscuro.png" : "/logos_alianza_claro.png"}`} className={styles.logos} />
        </footer>
    )
}

export default Footer;
