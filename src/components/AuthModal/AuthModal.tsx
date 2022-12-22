/* eslint-disable no-unused-expressions */
/* eslint-disable no-nested-ternary */
import classNames from 'classnames'
import Link from 'next/link'
import Router from 'next/router'

import {
	useState,
	useEffect,
	useRef,
	ChangeEvent,
	KeyboardEvent,
	MouseEvent,
} from 'react'
import { Value } from 'sass'
// @ts-ignore
import styles from './AuthModal.module.scss'

export interface IAuthModalProps {
	isAuthModalOpen: boolean
	setIsAuthModalOpen: Function
}

export const AuthModal: React.FC<IAuthModalProps> = ({
	isAuthModalOpen,
	setIsAuthModalOpen,
}: IAuthModalProps) => {
	const modalBgRef = useRef<HTMLDivElement>(null)
	const submitBtnRef = useRef<HTMLInputElement>(null)
	const [input, setInput] = useState('')
	const [isInputValid, setIsInputValid] = useState<boolean>(false)
	const [authModalState, setAuthModalState] = useState<string>('initial')

	const modalCloseHandler = (): void => {
		setIsAuthModalOpen(false)
		setAuthModalState('initial')
	}

	useEffect(() => {
		window.addEventListener('wheel', (e): void => {
			if (e.ctrlKey) e.preventDefault()
		})

		if (isAuthModalOpen) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = ''
		}

		if (submitBtnRef.current) {
			if (isInputValid) {
				submitBtnRef.current.disabled = false
			} else {
				submitBtnRef.current.disabled = true
			}
		}
		setIsInputValid(
			input.length > 0
		)


	})

	useEffect(() => {

	}, [authModalState, isAuthModalOpen])

	useEffect(() => {
		if (authModalState === 'confirmation') {
			const firstOTPInput = document.querySelector(
				'#OTPCodeInputsContainer input[type="input"]'
			) as HTMLInputElement

			if (firstOTPInput) {
				firstOTPInput.focus()
			}
		}
	}, [authModalState])

	const OTPCodeClickHanlder = (e: MouseEvent<HTMLInputElement>) => {
		// if (e.detail === 1 && e.currentTarget.value.length) {
		// 	e.currentTarget.style.caretColor = 'transparent'
		// } else {
		// 	e.currentTarget.style.caretColor = 'black'
		// }
	}
	return (
		<>
			<div className={classNames(styles.modal, styles.modalSmall, { [styles.modalActive]: isAuthModalOpen, })}>
				<div className={styles.container}>
					<img src="twitter-logo-4 2.svg" className={styles.container__logo} />
					<h2 className={styles.container__title}>Log In to Twitter</h2>
					<input type="text" className={styles.container__input} placeholder='Phone number, email address'  />
					<input type="password" className={styles.container__input} placeholder='Password'  />
					<button className={styles.container__submitbtn} onClick={() => Router.push('/home')}>Enter</button>
					<div className={styles.container__links}>
						<Link href="" className={styles.link}>Forgot password?</Link>
						<Link href="" className={styles.link}>Sign up to Twitter</Link>
					</div>
				</div>



			</div>
			<div className={styles.modalBg} ref={modalBgRef} onClick={modalCloseHandler} />
		</>
	)
}
