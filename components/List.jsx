import styles from '../styles/Activity.module.css';

const List = ({ elements, ItemComponent }) => {
    return (
        <ul className={styles.lists}>
            {elements && elements.map(item => (<ItemComponent key={item.name} {...item} />))}
        </ul>
    )
}

export default List