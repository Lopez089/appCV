import {useState, useEffect} from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
import firebase from "firebase/app";
import 'firebase/auth'

// authorization

const firebaseConfig = {
  apiKey: "AIzaSyCJhzq3tAZm1XxXWuI_JE8ndijWwHnO-C8",
  authDomain: "appcv-591ab.firebaseapp.com",
  projectId: "appcv-591ab",
  storageBucket: "appcv-591ab.appspot.com",
  messagingSenderId: "609534484685",
  appId: "1:609534484685:web:15f3a5cbcd83f6370a8984"
};
firebaseConfig
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const Home = ()=> {
  const router = useRouter()
  const [user, setUser] = useState(false);

 useEffect(() => {
   firebase.auth().onAuthStateChanged((user) => {
     if (user) {
       console.log(user);
       setUser(user)
     } else {
      console.log('no user');
      router.push('/login')
     }
   });
 }, []);


  const handleOutAuth= ()=>{

    firebase.auth().signOut().then(() => {
      router.push('/login')
    }).catch((error) => {
      console.error(error)
    });
}


  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <button onClick={handleOutAuth}>out Auth</button>
        <h1 className={styles.title}>
          {`Hola ${user.email}`}
       </h1>

    </main>
    </div>
  )
}

export default Home

//https://firebase.google.com/docs/auth/web/password-auth