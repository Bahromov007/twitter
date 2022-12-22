import Link from 'next/link'
import Navbar from '../components/Navbar/Navbar'
import Error from '../components/Error/error'
import Head from 'next/head'
import { SignUpModal } from '../components/SignUp/SingUpModal'
import React, { useState } from 'react'
import { AuthModal } from '../components'
import { Authorization } from '../components'
import LogoutModal from '../components/LogoutModal/LogoutModal'

export default function Index() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false)

  return (
    <>
    <Head>
      <title>twitter.com</title>
    </Head>
    <Authorization setIsAuthModalOpen={setIsAuthModalOpen}
                    setIsSignUpModalOpen={setIsSignUpModalOpen}
                    />
    <AuthModal
					isAuthModalOpen={isAuthModalOpen}
					setIsAuthModalOpen={setIsAuthModalOpen}
				/>
    <SignUpModal
        isSignUpModalOpen={isSignUpModalOpen}
        setIsSignUpModalOpen={setIsSignUpModalOpen} setIsAuthModalOpen={setIsAuthModalOpen}          />
    {/* <Navbar/> */}
    {/* <LogoutModal/> */}
    {/* <Error/> */}
    </>
  )
}

