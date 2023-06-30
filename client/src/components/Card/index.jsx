import React from 'react'
import styles from "./card.module.css"
import { Link } from 'react-router-dom';


import {
    CaretRightOutlined,
} from '@ant-design/icons';

const Card = () => {
    return (
        <div className={styles.card_wrapper}>
            <Link to="/id">
                <div className={styles.card}>
                    <div className={styles.card_image}>
                        <img src="https://www.ubuy.com.tr/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNzE1enJBNWNtTEwuX0FDX1NMMTUwMF8uanBn.jpg" alt='' />
                    </div>
                    <div className={styles.card_content}>
                        <div className={styles.film_info}>
                            <h2 className={styles.film_name}><CaretRightOutlined />Computer</h2>
                            <button className={styles.film_details}>
                                <Link className={styles.detail_btn} to={`/`}>Details</Link>
                                <svg strokeWidth="4" stroke="currentColor" viewBox="0 0 24 24" fill="none" className={`${styles.h_6} ${styles.w_6}`} xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinejoin="round" strokeLinecap="round"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </Link>
            <Link to="/id">
                <div className={styles.card}>
                    <div className={styles.card_image}>
                        <img src="https://productimages.hepsiburada.net/s/343/375/110000350628521.jpg" alt='' />
                    </div>
                    <div className={styles.card_content}>
                        <div className={styles.film_info}>
                            <h2 className={styles.film_name}><CaretRightOutlined />Computer</h2>
                            <button className={styles.film_details}>
                                <Link className={styles.detail_btn} to={`/`}>Details</Link>
                                <svg strokeWidth="4" stroke="currentColor" viewBox="0 0 24 24" fill="none" className={`${styles.h_6} ${styles.w_6}`} xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinejoin="round" strokeLinecap="round"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </Link>
            <Link to="/id">
                <div className={styles.card}>
                    <div className={styles.card_image}>
                        <img src="https://plecom.imgix.net/iil-331410-658083.jpg?auto=format&w=600&h=600" alt='' />
                    </div>
                    <div className={styles.card_content}>
                        <div className={styles.film_info}>
                            <h2 className={styles.film_name}><CaretRightOutlined />Computer</h2>
                            <button className={styles.film_details}>
                                <Link className={styles.detail_btn} to={`/`}>Details</Link>
                                <svg strokeWidth="4" stroke="currentColor" viewBox="0 0 24 24" fill="none" className={`${styles.h_6} ${styles.w_6}`} xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinejoin="round" strokeLinecap="round"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </Link>
            <Link to="/id">
                <div className={styles.card}>
                    <div className={styles.card_image}>
                        <img src="https://www.ubuy.com.tr/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNzE1enJBNWNtTEwuX0FDX1NMMTUwMF8uanBn.jpg" alt='' />
                    </div>
                    <div className={styles.card_content}>
                        <div className={styles.film_info}>
                            <h2 className={styles.film_name}><CaretRightOutlined />Computer</h2>
                            <button className={styles.film_details}>
                                <Link className={styles.detail_btn} to={`/`}>Details</Link>
                                <svg strokeWidth="4" stroke="currentColor" viewBox="0 0 24 24" fill="none" className={`${styles.h_6} ${styles.w_6}`} xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinejoin="round" strokeLinecap="round"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </Link>
            <Link to="/id">
                <div className={styles.card}>
                    <div className={styles.card_image}>
                        <img src="https://productimages.hepsiburada.net/s/343/375/110000350628521.jpg" alt='' />
                    </div>
                    <div className={styles.card_content}>
                        <div className={styles.film_info}>
                            <h2 className={styles.film_name}><CaretRightOutlined />Computer</h2>
                            <button className={styles.film_details}>
                                <Link className={styles.detail_btn} to={`/`}>Details</Link>
                                <svg strokeWidth="4" stroke="currentColor" viewBox="0 0 24 24" fill="none" className={`${styles.h_6} ${styles.w_6}`} xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinejoin="round" strokeLinecap="round"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </Link>
            <Link to="/id">
                <div className={styles.card}>
                    <div className={styles.card_image}>
                        <img src="https://plecom.imgix.net/iil-331410-658083.jpg?auto=format&w=600&h=600" alt='' />
                    </div>
                    <div className={styles.card_content}>
                        <div className={styles.film_info}>
                            <h2 className={styles.film_name}><CaretRightOutlined />Computer</h2>
                            <button className={styles.film_details}>
                                <Link className={styles.detail_btn} to={`/`}>Details</Link>
                                <svg strokeWidth="4" stroke="currentColor" viewBox="0 0 24 24" fill="none" className={`${styles.h_6} ${styles.w_6}`} xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinejoin="round" strokeLinecap="round"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </Link>
            <Link to="/id">
                <div className={styles.card}>
                    <div className={styles.card_image}>
                        <img src="https://www.ubuy.com.tr/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNzE1enJBNWNtTEwuX0FDX1NMMTUwMF8uanBn.jpg" alt='' />
                    </div>
                    <div className={styles.card_content}>
                        <div className={styles.film_info}>
                            <h2 className={styles.film_name}><CaretRightOutlined />Computer</h2>
                            <button className={styles.film_details}>
                                <Link className={styles.detail_btn} to={`/`}>Details</Link>
                                <svg strokeWidth="4" stroke="currentColor" viewBox="0 0 24 24" fill="none" className={`${styles.h_6} ${styles.w_6}`} xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinejoin="round" strokeLinecap="round"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </Link>
            <Link to="/id">
                <div className={styles.card}>
                    <div className={styles.card_image}>
                        <img src="https://productimages.hepsiburada.net/s/343/375/110000350628521.jpg" alt='' />
                    </div>
                    <div className={styles.card_content}>
                        <div className={styles.film_info}>
                            <h2 className={styles.film_name}><CaretRightOutlined />Computer</h2>
                            <button className={styles.film_details}>
                                <Link className={styles.detail_btn} to={`/`}>Details</Link>
                                <svg strokeWidth="4" stroke="currentColor" viewBox="0 0 24 24" fill="none" className={`${styles.h_6} ${styles.w_6}`} xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinejoin="round" strokeLinecap="round"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </Link>
            <Link to="/id">
                <div className={styles.card}>
                    <div className={styles.card_image}>
                        <img src="https://plecom.imgix.net/iil-331410-658083.jpg?auto=format&w=600&h=600" alt='' />
                    </div>
                    <div className={styles.card_content}>
                        <div className={styles.film_info}>
                            <h2 className={styles.film_name}><CaretRightOutlined />Computer</h2>
                            <button className={styles.film_details}>
                                <Link className={styles.detail_btn} to={`/`}>Details</Link>
                                <svg strokeWidth="4" stroke="currentColor" viewBox="0 0 24 24" fill="none" className={`${styles.h_6} ${styles.w_6}`} xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinejoin="round" strokeLinecap="round"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Card;