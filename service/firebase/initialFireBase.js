import firebase from 'firebase/app'

const firebaseConfig = {
  apiKey: 'AIzaSyCJhzq3tAZm1XxXWuI_JE8ndijWwHnO-C8',
  authDomain: 'appcv-591ab.firebaseapp.com',
  projectId: 'appcv-591ab',
  storageBucket: 'appcv-591ab.appspot.com',
  messagingSenderId: '609534484685',
  appId: '1:609534484685:web:15f3a5cbcd83f6370a8984'
}

export const initiallizeFireBase = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
  }
}
