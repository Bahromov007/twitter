import React from 'react'
import styles from './Navbar.module.scss'
import Router from 'next/router'
<meta name='viewport' content='width= device-with'/>

import Link from 'next/link'
import { profile } from 'console'
export default function Navbar() {
    return (
        <>
            <div className={styles.navbar}>
                <div className={styles.container}>
                    <img src="twitter-logo-4 2.svg" className={styles.twitterLogo} />
                    <div className={styles.buttons}>
                        <div className={styles.block}>
                            <button onClick={() => Router.push('/home')} className={styles.button}>
                                <img src="./home outline.svg" className={styles.button__img} />
                                <p className={styles.button__title}>Home</p>
                            </button>
                        </div>
                        <div className={styles.block}>
                            <button onClick={() => Router.push('/explore')} className={styles.button}>
                                <img src="explore.svg" className={styles.button__img} />
                                <p className={styles.button__title}>Explore</p>
                            </button>
                        </div>
                        <div className={styles.block}>
                            <button onClick={() => Router.push('')} className={styles.button}>
                                <img src="./notification.svg" className={styles.button__img} />
                                <p className={styles.button__title}>Notifications</p>
                            </button>
                        </div>
                        <div className={styles.block}>
                            <button onClick={() => Router.push('url:')} className={styles.button}>
                                <img src="./messages.svg" className={styles.button__img} />
                                <p className={styles.button__title}>Messages</p>
                            </button>
                        </div>
                        <div className={styles.block}>
                            <button onClick={() => Router.push('url:')} className={styles.button}>
                                <img src="./bookmarks.svg" className={styles.button__img} />
                                <p className={styles.button__title}>Bookmarks</p>
                            </button>
                        </div>
                        <div className={styles.block}>
                            <button onClick={() => Router.push('url:')} className={styles.button}>
                                <img src="./lists.svg" className={styles.button__img} />
                                <p className={styles.button__title}>Lists</p>
                            </button>
                        </div>
                        <div className={styles.block}>
                            <button onClick={() => Router.push('url:')} className={styles.button}>
                                <img src="./profile outline.svg" className={styles.button__img} />
                                <p className={styles.button__title}>Profile</p>
                            </button>
                        </div>
                        <div className={styles.block}>
                            <button onClick={() => Router.push('url:')} className={styles.button}>
                                <img src="./more.svg" className={styles.button__img} />
                                <p className={styles.button__title}>More</p>
                            </button>
                        </div>
                        <button onClick={() => Router.push('url:')} className={styles.tweetbtn}>Tweet</button>
                    </div>
                    <button className={styles.profilebtn}>
                        <div className={styles.profilebtn__img}></div>
                        <div className={styles.middle}>
                            <p className={styles.middle__p1}>James Bond</p>
                            <p className={styles.middle__p2}>@007</p>
                        </div>
                    </button>
                    
                </div>
            </div>
        </>
    )
}



