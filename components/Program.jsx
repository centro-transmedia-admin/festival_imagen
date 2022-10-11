import Link from 'next/link'
import styles from '../styles/Program.module.css'

const Program = ({ event }) => {
    const { id, hour, title, subtitle, place, type, country } = event;
    return (
        <div className={styles.concert}>
            <div>
                <h3>{hour}</h3>
                <h4>{title.toUpperCase()}</h4>
                {subtitle && <h4 className={styles.subtitle}>{subtitle}</h4>}
                {place && <p><span className={styles.bold}>LUGAR:</span> {place}</p>}
                {type && <p><span className={styles.bold}>TIPO:</span> {type}</p>}
                {country && <pre><span className={styles.bold}>PAÍS(ES):</span> {country}</pre>}
            </div>

            <div>
                <Link href={`/programa_mano/${id}`}>
                    <a>CONOCER MÁS</a>
                </Link>
                <hr className={styles.line} />
            </div>
        </div>
    )
}

export default Program