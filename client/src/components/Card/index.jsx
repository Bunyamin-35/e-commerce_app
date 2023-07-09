import React from 'react'
import styles from "./card.module.css"
import { Link } from 'react-router-dom';


import {
    CaretRightOutlined,
} from '@ant-design/icons';

const Card = ({item}) => {
    return (
        <Link to={`/${item._id}`}>
                <div className={styles.card}>
                    <div className={styles.card_image}>
                        <img src={item.img} alt='' />
                    </div>
                    <div className={styles.card_content}>
                        <div className={styles.item_info}>
                            <h2 className={styles.item_name}><CaretRightOutlined />{item.title}</h2>
                            <button className={styles.item_details}>
                                <Link className={styles.detail_btn} to={`/`}>Details</Link>
                                <svg strokeWidth="4" stroke="currentColor" viewBox="0 0 24 24" fill="none" className={`${styles.h_6} ${styles.w_6}`} xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinejoin="round" strokeLinecap="round"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </Link>
        
    )
}

export default Card;