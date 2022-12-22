import React from 'react'
import Link from 'next/link'
import styles from './Authorization.module.scss'
<meta name='viewport' content='width= device-with'/>

export interface IBannerProps {
  setIsAuthModalOpen: Function
  setIsSignUpModalOpen: Function
}

export const Authorization: React.FC<IBannerProps> = ({
  setIsAuthModalOpen,
  setIsSignUpModalOpen
}: IBannerProps) => {
  return (
    <>
      <div className={styles.authorization}>
        <div className={styles.container}>
          <div className={styles.top}>
            <div className={styles.left}>
              <img src="./backTwitter.svg" className={styles.left__img} />
            </div>
            <div className={styles.right}>
              <div className={styles.block}>
                <img src="./twitter-logo-4 2.svg" className={styles.block__logo} />
                <h2 className={styles.block__h2}>Happening now</h2>
                <h3 className={styles.block__h3}>Join Twitter today</h3>
                <button className={styles.block__button} >
                  <img src="./google-icon 1.svg" className={styles.button__img} />
                  <h4 className={styles.button__text}>Sign up with Google</h4>
                </button>
                <button className={styles.block__button}>
                  <img src="./logo-apple 1.svg" className={styles.button__img} />
                  <h4 className={styles.button__text}>Sign up with Apple</h4>
                </button>
                <button className={styles.block__button} onClick={() => { setIsSignUpModalOpen(true) }}>
                  <h4 className={styles.button__text} >Sign up with phone or email</h4>
                </button>
                <p className={styles.block__text1}>By singing up you agree to the <a href="#" className={styles.link}>Terms of Service</a> and <a href="#" className={styles.link}>Privacy Policy</a>, including <a href="#" className={styles.link}>Cookie Use</a>.</p>
                <p className={styles.block__text2}>Already have an account? <div className={styles.link} onClick={() => { setIsAuthModalOpen(true) }}>Log in</div></p>
              </div>
            </div>
          </div>
            <div className={styles.footer}>
              <a href="#" className={styles.footer__link}>About</a>
              <a href="#" className={styles.footer__link}>Help Center</a>
              <a href="#" className={styles.footer__link}>Terms of service</a>
              <a href="#" className={styles.footer__link}>Privacy policy</a>
              <a href="#" className={styles.footer__link}>Cookie policy</a>
              <a href="#" className={styles.footer__link}>Ads info</a>
              <a href="#" className={styles.footer__link}>Blog</a>
              <a href="#" className={styles.footer__link}>Status</a>
              <a href="#" className={styles.footer__link}>Carrres</a>
              <a href="#" className={styles.footer__link}>Brand resources</a>
              <a href="#" className={styles.footer__link}>Advertsing</a>
              <a href="#" className={styles.footer__link}>Marketing</a>
              <a href="#" className={styles.footer__link}>Twitter for business</a>
              <a href="#" className={styles.footer__link}>Developers</a>
              <a href="#" className={styles.footer__link}>Directory</a>
              <a href="#" className={styles.footer__link}>Settings</a>
              <a href="#" className={styles.footer__link}>© 2021 Twitter, Inc.</a>
            </div>
        </div>
      </div>
    </>
  )
}

