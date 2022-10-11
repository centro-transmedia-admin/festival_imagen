import Link from 'next/link';
import styles from '../styles/Cronograma.module.css';

const Back = ({ route }) => {
    return (
        <div className={styles.back}>
            <Link href={route}>
                <a>VOLVER</a>
            </Link>
        </div>
    )
}

export default Back