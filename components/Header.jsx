import styles from '../styles/Header.module.css'

const Header = ({ title }) => {
    return (
        <header className={styles.sign}>
            <img src="/rotulo.png" width="300px" />
            <h3 className={styles.title}>{title}</h3>
        </header>
    )
}

export default Header
