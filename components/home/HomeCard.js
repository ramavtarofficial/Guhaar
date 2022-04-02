import { de } from 'date-fns/locale';
import react from 'react';
import styles from "../../styles/Home.module.css";
import {ethers, Contract} from 'ethers'


export default function HomeCard({ campaign }) {

    const minimum = ethers.utils.formatEther(campaign[0].toString())
    const approveCount = campaign[1].toString()
    const title = campaign[2]
    const description = campaign[3]
    const imgURL = campaign[4]
    const target = ethers.utils.formatEther(campaign[0].toString())

    return (
        <div className={styles.homeCard}>
            <div className={styles.homeCardImage} >
                <img src={imgURL} alt="" />
            </div>
            <div className={styles.homeCardInfo}>
                <div className={styles.infoContainer}>
                    <h4>{title}</h4>
                    <h3>Donate and help the poor</h3>
                    <p>{description}</p>

                    <div className={styles.addInfo}>
                        <div className="raised">
                            <h3>👍 {approveCount}</h3>
                            <p>Raised of ⧫{target}</p>
                        </div>
                        <div className="daysLeft">
                            <h3>25</h3>
                            <p>days left</p>
                        </div>
                    </div>
                    <div className="campaigner">
                        <p>By Anon</p>
                    </div>
                </div>
            </div>

        </div >
    )
}