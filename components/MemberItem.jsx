import styles from '../styles/Activity.module.css';

const MemberItem = ({ name, instrument, country }) => {
    return (
        <>
            <li>
                <span
                    className={styles.member}>{name}
                </span>
                {instrument && ` | ${instrument}`}
                {country && ` | ${country}`}
            </li>
        </>
    )
}

export default MemberItem