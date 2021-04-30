import { useEffect, useState } from 'react'
import firebase from 'firebase/app'
import 'firebase/auth'
import { useRouter } from 'next/router'

const useStateAuth = () => {
  const [user, setUser] = useState(null)
  const router = useRouter()
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user)
        router.push('/')
      }
    })
  }, [])

  return { user }
}

export default useStateAuth
