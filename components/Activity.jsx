import styles from '../styles/Activity.module.css';

const Activity = (activity) => {
    return (
        <div>
            <h4>{activity.workAuthor && <span className={styles.work_author}>{activity.workAuthor} - </span>}{activity.title}</h4>
            <p>{activity.description}</p>
            <pre>{activity.moments}</pre>
            {/* <List elements={activiy.moments} getText={item => `${item}`} /> */}
            <br />
        </div>
    )
}

export default Activity