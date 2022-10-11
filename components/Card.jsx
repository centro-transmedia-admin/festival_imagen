import Link from 'next/link';
import styles from '../styles/Card.module.css'
import { IoChevronForward } from 'react-icons/io5'
import DayInfo from './DayInfo';

const Card = ({ id, date }) => {

    return (
        <Link href={`/programacion/${id}`}>
            <a>
                <div className={styles.card}>
                    <DayInfo date={date} />
                    <div>
                        <IoChevronForward className={styles.icon} />
                    </div>
                </div>
            </a>
        </Link>
    );
};

export default Card;