import ContainerFormAuth from '../components/ContainerFormAuth/containerFormAuth'
import { Form, Button } from 'react-bootstrap'
import Head from 'next/head'
import LayoutAuth from '../components/layout/layoutAuth'
import Layout from '../components/layout/layout'
import Link from 'next/link'
import useFildInput from '../hooks/useFildInut'
import useSignUp from '../hooks/useSignUp'

const Singin = () => {
  const { fields, handleOnchage } = useFildInput()
  const { firstName, lastName, email, password } = fields
  const { error, signUp } = useSignUp({ firstName, lastName, email, password })

  return (
    <Layout>
      <LayoutAuth>
        <div>

          <Head>
            <title>Sign up</title>
            <link rel='icon' href='/favicon.ico' />
          </Head>

          <main className='w-100 d-flex flex-column align-items-center justify-content-center'>

            <ContainerFormAuth error={error} text='Sign up'>
              <Form>
                <Form.Group controlId='firstName'>
                  <Form.Label>First name</Form.Label>
                  <Form.Control type='text' placeholder='first name' onChange={(e) => handleOnchage(e)} />
                </Form.Group>
                <Form.Group controlId='lastName'>
                  <Form.Label>Last name</Form.Label>
                  <Form.Control type='text' placeholder='last name' onChange={(e) => handleOnchage(e)} />
                </Form.Group>
                <Form.Group controlId='email'>
                  <Form.Label>Email</Form.Label>
                  <Form.Control type='email' placeholder='email' onChange={(e) => handleOnchage(e)} />
                </Form.Group>
                <Form.Group controlId='password'>
                  <Form.Label>Password</Form.Label>
                  <Form.Control type='password' placeholder='pasword' onChange={(e) => handleOnchage(e)} />
                </Form.Group>
                <Button type='submit' block onClick={(e) => signUp(e)}>Sign up</Button>
              </Form>
              <div className='mt-3'>
                <p className='text-muted text-center'>¿Ya tienes una cuenta? <Link href='/login'>Login</Link></p>
              </div>
            </ContainerFormAuth>

          </main>
        </div>
      </LayoutAuth>
    </Layout>
  )
}

export default Singin

// https://firebase.google.com/docs/auth/web/password-auth
