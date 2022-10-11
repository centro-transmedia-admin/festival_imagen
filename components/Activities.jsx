import styles from '../styles/Activity.module.css';
import { getImgUri } from '../utils';
import Activity from './Activity';
import List from './List';
import MemberItem from './MemberItem';
import Members from './Members';
import Modal from './Modal';

const Activities = ({ event, activities, members }) => {

    return (
        <main className={styles.activity}>
            <div className={styles.review}>
                {event.image && <img src={getImgUri(event.image)} className={styles.img} />}
                <div>
                    <h3>{event.title}</h3>
                    <pre>{event.description}</pre>
                    <br />
                    {
                        members.length > 0 &&
                        <>
                            {/* <h4>Artistas:</h4> */}
                            <List elements={members} ItemComponent={MemberItem} />
                            <Modal title="Descripción de integrantes" content={<Members members={members} />} />
                        </>
                    }
                </div>
                <div>
                    <hr className={styles.line} />
                </div>
            </div>
            <div className={styles.review}>
                {
                    activities.length > 0
                    &&
                    <>
                        <h3>PROGRAMA</h3>
                        {activities.map(activity => (<Activity key={activity.id} {...activity} />))}
                        <div>
                            <hr className={styles.line} />
                        </div>
                    </>
                }
            </div>
        </main>
    )
}
export default Activities;
