import {useState} from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
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

const newUser = {
  email: 'juan@juansdfs.com',
  password:'12345633323'
}



  const handleSubmit = (e, email, password, seterror)=>{
    e.preventDefault();

    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      //console.log(user);
      //window.localStorage.setItem('user', JSON.stringify(user))
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      seterror(errorMessage);
    });

  }
    

const Singin = ()=> {
  const [email, setemail] = useState('');
  const [password, setpasword] = useState('');
  const [error, seterror] = useState(null);

  return (
    <div className={styles.container}>
      <Head>
        <title>Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Registration
        </h1>
        {
          error ?
           ( <p>{error}</p>) :null
        }
        <div className={styles.grid}>
          <form>
            <div>
              <input type="text" placeholder="email" onChange={(e)=> setemail(e.target.value)}/>
            </div>
            <div>
              <input type="text" placeholder="pasword" onChange={(e)=> setpasword(e.target.value)} />
            </div>
            <button onClick={(e)=> handleSubmit(e,email, password, seterror)}>Login</button>
          </form>
        </div>
      </main>

    
    </div>
  )
}

export default Singin

//https://firebase.google.com/docs/auth/web/password-auth