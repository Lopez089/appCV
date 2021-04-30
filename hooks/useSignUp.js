import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import { useRouter } from 'next/router'
import { useState } from 'react'

const useSignUp = ({ firstName, lastName, email, password }) => {
  const router = useRouter()
  const [error, seterror] = useState(null)

  const signUp = (e) => {
    e.preventDefault()

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(() => {
        firebase.firestore().collection('users').doc(firebase.auth().currentUser.uid)
          .set({
            firstName: firstName,
            lastName: lastName,
            email: email
          })

        router.push('/')
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        console.log(errorCode, errorMessage)
        seterror(errorMessage)
        setTimeout(() => {
          seterror(null)
        }, 5000)
      })
  }

  return { error, signUp }
}

export default useSignUp
