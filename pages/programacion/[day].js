import Programs from '../../components/Programs';
import { IoChevronDown } from 'react-icons/io5'
import styles from '../../styles/Cronograma.module.css';
import DayInfo from '../../components/DayInfo';
import Footer from '../../components/Footer';
import Back from '../../components/Back';
import { HOST } from '../../utils';
import Head from 'next/head';

export default function ({ dayInfo, programs }) {
    const date = dayInfo && new Date(dayInfo.date);
    return (
        <div className={styles.container}>
            <Head>
                <title>Eventos FII 2022</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.content}>
                <header className={styles.rotulo}>
                    <Back route="/" />
                    <div className={styles.card}>
                        {date && <DayInfo date={date} />}
                        <div>
                            <IoChevronDown className={styles.icon} />
                        </div>
                    </div>
                </header>
                {programs && <Programs programs={programs} />}
                <Footer dark />
            </div>
        </div>
    );
}

export async function getServerSideProps(context) {
    const day = context.query.day;
    const dayReq = await fetch(`${HOST}/api/days/${day}`);
    let dayInfo = null;
    let programs = null;
    if (dayReq.ok) {
        dayInfo = await dayReq.json();
        const programsReq = await fetch(`${HOST}/api/events/${day}`);
        if (programsReq.ok)
            programs = await programsReq.json();
    }
    return { props: { dayInfo, programs } };
}