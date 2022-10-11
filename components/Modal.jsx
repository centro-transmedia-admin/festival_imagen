import Popup from 'reactjs-popup'
import styles from '../styles/Modal.module.css';
import 'reactjs-popup/dist/index.css';
import { useEffect, useState } from 'react';

const Modal = ({ title, content }) => {

    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);

    useEffect(() => {
        if (open)
            document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "unset";
        }
    }, [open])

    return (
        <div style={{marginTop: "20px"}}>
            <button type="button" className={styles.button} onClick={() => setOpen(o => !o)}>
                SABER MÁS
            </button>
            <Popup
                open={open}
                closeOnDocumentClick
                onClose={closeModal}
                modal
            >
                <div className={styles.modal}>
                    <button className={styles.close} onClick={closeModal}>
                        &times;
                    </button>
                    <div className={styles.header}> {title.toUpperCase()} </div>
                    <div className={styles.content}>
                        <pre>{content}</pre>
                    </div>
                    <div className={styles.actions}>
                        <button
                            className={styles.button}
                            onClick={closeModal}
                        >
                            CERRAR
                        </button>
                    </div>
                </div>
            </Popup>
        </div>
    )
}

export default Modal