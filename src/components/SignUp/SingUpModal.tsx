import React from 'react'
import classNames from 'classnames'
import Link from 'next/link'
import styles from './SignUpModal.module.scss'
import {
    useState,
    useEffect,
    useRef,
    ChangeEvent,
    KeyboardEvent,
    MouseEvent,
} from 'react'
import Router from 'next/router'


export interface ISignUpModalProps {
    isSignUpModalOpen: boolean
    setIsSignUpModalOpen: Function
    setIsAuthModalOpen: Function

}

export const SignUpModal: React.FC<ISignUpModalProps> = ({
    isSignUpModalOpen,
    setIsSignUpModalOpen,
    setIsAuthModalOpen
}: ISignUpModalProps, ) => {
    const modalBgRef = useRef<HTMLDivElement>(null)
    const submitBtnRef = useRef<HTMLInputElement>(null)

    const [tel, setTel] = useState<string>('998')
    const [isTelValid, setIsTelValid] = useState<boolean>(false)
    const [SignUpModalState, setSignUpModalState] = useState<string>('initial')

    const modalCloseHandler = (): void => {
        setIsSignUpModalOpen(false)
        setSignUpModalState('initial')
    }

    useEffect(() => {
        window.addEventListener('wheel', (e): void => {
            if (e.ctrlKey) e.preventDefault()
        })

        if (isSignUpModalOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }

        if (submitBtnRef.current) {
            if (isTelValid) {
                submitBtnRef.current.disabled = false
            } else {
                submitBtnRef.current.disabled = true
            }
        }

        // setIsTelValid(
        //     tel.startsWith('998') &&
        //         CODE_PREFIXES.includes(tel.slice(3, 5)) &&
        //         tel.length === 12
        // )
    })

    useEffect(() => {
        const telInput = document.querySelector(
            '.react-tel-input input[type="tel"]'
        ) as HTMLInputElement

        if (telInput) {
            telInput.tabIndex = isSignUpModalOpen ? 1 : -1
            telInput.focus()
        }
    }, [SignUpModalState, isSignUpModalOpen])

    useEffect(() => {
        if (SignUpModalState === 'confirmation') {
            const firstOTPInput = document.querySelector(
                '#OTPCodeInputsContainer input[type="tel"]'
            ) as HTMLInputElement

            if (firstOTPInput) {
                firstOTPInput.focus()
            }
        }
    }, [SignUpModalState])

    const formatTelNumber = (telephone: string): string => {
        const phone = telephone.split('')
        phone.splice(2 + 1, 0, ' ')
        phone.splice(5 + 1, 0, ' ')
        phone.splice(9 + 1, 0, ' ')
        phone.splice(12 + 1, 0, ' ')
        return `+${phone.join('')}`
    }







    return (
        <>
            <div
                className={classNames(styles.modal, styles.modalSmall, {
                    [styles.modalActive]: isSignUpModalOpen,
                })}
            >
                
                {SignUpModalState === 'initial' ? (
                    <>
                            
                        <div className={styles.container}>
                        <h3 className={styles.container__steps}>Step 1 of 2</h3>
                        <h2 className={styles.container__title}>Create an account</h2>
                        <input type="text" className={styles.container__input} placeholder='Name' />
                        <input type="text" className={styles.container__input} placeholder='Phone' />
                        <p className={styles.container__changeInput} onClick={() => { setIsAuthModalOpen(true) ,setIsSignUpModalOpen(false) }}>Use email</p>
                        <h4 className={styles.container__textTitle}>Date of birth</h4>
                        <p className={styles.container__text}>This information will not be publicly available. Verify your age, even if this account is for a company, pet, etc.</p>
                        <input type="date" />
                        <button className={styles.container__submitbtn} 
                        onClick={() => {
                            setSignUpModalState('confirmation')
                        }}>Next</button>
                        </div>
                    </>

                ):(
                    <>
                    
                        <div className={styles.container}>
                        <h3 className={styles.container__steps}>Step 2 of 2</h3>
                        <input type="text" className={styles.container__input} placeholder='Name' />
                        <input type="text" className={styles.container__input} placeholder='Phone' />
                        <input type="date" />
                        <p>
                        By registering, <a href="#">you accept the Terms of Service, Privacy Policy and Cookie Policy</a>. Twitter may use your contact information, including your email address and phone number, for the purposes described in our Privacy Policy, such as maintaining account security and personalizing services, including advertising. <a href="#">More</a>. Other users will be able to find you using the email address or phone number you provide, unless you specify otherwise <a href="#"> here</a>.</p>
                        <button onClick={() => Router.push('/home')}>register</button>


                        </div>
                    </>
                )}


            </div>
            <div className={styles.modalBg} ref={modalBgRef} onClick={modalCloseHandler} />


        </>
    )
}


