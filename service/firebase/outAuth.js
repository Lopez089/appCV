import 'firebase/auth'
import firebase from 'firebase/app'

const handleOutAuth = () => {
  firebase.auth().signOut()
}

export default handleOutAuth
