import Card from "./Card";
import styles from '../styles/Card.module.css'

const Cards = ({ days }) => {
    return (
        <section className={styles.container}>
            {days.map(({ id, date }) => (<Card key={id} id={id} date={new Date(date)} />))}
        </section>
    );
};

export default Cards;