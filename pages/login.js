import {useState, useEffect} from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import firebase from "firebase/app";
import 'firebase/auth'
import { useRouter } from 'next/router'
import Link from 'next/link'

const Login = ()=>{
    const router = useRouter()
    const [email, setemail] = useState('');
    const [password, setpasword] = useState('');
    const [error, seterror] = useState(null);

    useEffect(() => {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          console.log(user);
          router.push('/')
        }
      })
    }, []);

  const handleSubmit = (e, email, password, seterror)=>{
    e.preventDefault();
    
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        router.push('/')
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        seterror(errorMessage);
      });

  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Login
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
          <div>
            <p>¿No tienes una cuenta? <Link href='/signin'>Regístrate</Link></p>
          </div>
        </div>
      </main>

    
    </div>
  )
}

export default Login

