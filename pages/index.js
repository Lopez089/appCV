import { useState, useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import 'firebase/auth'
import 'firebase/firestore'
import firebase from 'firebase/app'
import Layout from '../components/layout/layout'

const Home = () => {
  const [user, setUser] = useState(false)
  const [input, setInput] = useState('')
  const router = useRouter()

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user)
      } else {
        router.push('/login')
      }
    })
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()

    const uid = firebase.auth().currentUser.uid

    console.log(user)
    firebase.firestore().collection('users').doc(firebase.auth().currentUser.uid)
      .set({
        input: input
      }, { merge: true })
  }

  return (
    <Layout>
      <div>
        <Head>
          <title>Home</title>
          <link rel='icon' href='/favicon.ico' />
        </Head>

        <main>

          <h1>
            {`Hola ${user.email}`}
          </h1>
          <form>
            <input onChange={(e) => setInput(e.target.value)} type='text' />
            <button onClick={(e) => handleSubmit(e)}>enviar</button>
          </form>
        </main>
      </div>
    </Layout>

  )
}

export default Home
