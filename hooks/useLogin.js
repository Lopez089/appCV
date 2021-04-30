import { useState } from 'react'
import firebase from 'firebase/app'
import 'firebase/auth'
import { useRouter } from 'next/router'

const useLogin = (email, password) => {
  const router = useRouter()

  const [error, seterror] = useState(null)

  const signIn = (e) => {
    e.preventDefault()

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => {
        router.push('/')
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message

        console.error(errorCode, errorMessage)

        seterror(errorMessage)

        setTimeout(() => {
          seterror(null)
        }, 5000)
      })
  }

  return {
    error,
    signIn
  }
}

export default useLogin
