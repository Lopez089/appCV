import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import { useEffect, useState } from 'react'

const useUserData = (user) => {
  const [userData, setUserData] = useState(null)

  const getData = () => {
    const docRef = firebase.firestore().collection('users').doc(firebase.auth().currentUser.uid)

    docRef.get().then((doc) => {
      if (doc.exists) {
        setUserData(doc.data())
      } else {
        console.log('No such document!')
      }
    }).catch((error) => {
      console.log('Error getting document:', error)
    })
  }

  useEffect(() => {
    if (user) { getData() }
  }, [])

  return { userData }
}

export default useUserData
