import styles from '../styles/Program.module.css'
import Program from './Program'

const Programs = ({ programs }) => {
    return (
        <main className={styles.content}>
            {programs.map(program => (<Program key={program.id} event={program} />))}
        </main>
    )
}

export default Programs