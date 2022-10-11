import React from 'react'
import { getImgUri } from '../utils'
import styles from "../styles/Program.module.css";

const Member = ({ name, country, image, description }) => {
    return (
        <>
            <h3>{name.toUpperCase()} - {country}</h3>
            {image && <img src={getImgUri(image)} />}
            {description && <p>{description}</p>}
            <hr className={styles.line} />
        </>
    )
}

export default Member