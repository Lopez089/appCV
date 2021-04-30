import ContainerFormAuth from '../components/ContainerFormAuth/containerFormAuth'
import 'firebase/auth'
import Head from 'next/head'
import { Form, Button } from 'react-bootstrap'
import LayoutAuth from '../components/layout/layoutAuth'
import Layout from '../components/layout/layout'
import Link from 'next/link'
import useFildInput from '../hooks/useFildInut'
import useLogin from '../hooks/useLogin'
import useStateAuth from '../hooks/useStateAuth'

const Login = () => {
  useStateAuth()
  const { fields, handleOnchage } = useFildInput()
  const { email, password } = fields
  const { error, signIn } = useLogin(email, password)

  return (
    <Layout>
      <LayoutAuth>
        <div>
          <Head>
            <title>Login</title>
            <link rel='icon' href='/favicon.ico' />
          </Head>

          <main className='w-100 d-flex flex-column align-items-center justify-content-center'>
            <ContainerFormAuth error={error} text='Login'>
              <Form>
                <Form.Group controlId='email'>
                  <Form.Label>Email</Form.Label>
                  <Form.Control onChange={(e) => handleOnchage(e)} placeholder='email' type='email' />
                </Form.Group>
                <Form.Group controlId='password'>
                  <Form.Label>Password</Form.Label>
                  <Form.Control onChange={(e) => handleOnchage(e)} placeholder='pasword' type='password' />
                </Form.Group>
                <Button type='submit' block onClick={(e) => signIn(e)}>Login</Button>
              </Form>
              <div className='mt-3'>
                <p className='text-muted text-center'>¿No tienes una cuenta? <Link href='/signin'>Regístrate</Link></p>
              </div>
            </ContainerFormAuth>
          </main>
        </div>
      </LayoutAuth>
    </Layout>
  )
}

export default Login
