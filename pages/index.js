import { useState, useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import 'firebase/auth'
import 'firebase/firestore'
import firebase from 'firebase/app'
import Layout from '../components/layout/layout'
import { Button, Col, Row, Container, Form } from 'react-bootstrap'
import useFildInput from '../hooks/useFildInut'
import AlertMessage from '../components/alert/alert'

const FormEducation = ({ sectionEducation, handleOnchage }) => {
  // console.log({ sectionEducation })
  return (
    sectionEducation.map((education) => {
      return (

        <section key={education}>
          <Form id='titulation'>
            <Form.Group controlId='Titulacion'>
              <Form.Label>Titulacion</Form.Label>
              <Form.Control onChange={(e) => handleOnchage(e)} placeholder='titulacion' type='text' />
            </Form.Group>
            <Form.Group controlId='Universidad'>
              <Form.Label>Universidad</Form.Label>
              <Form.Control onChange={(e) => handleOnchage(e)} placeholder='Universidad' type='text' />
            </Form.Group>
            <Row className='d-flex'>
              <Col>
                <Form.Group controlId='AñoInicial'>
                  <Form.Label>Año de inicio</Form.Label>
                  <Form.Control onChange={(e) => handleOnchage(e)} placeholder='año de inicio' type='number' />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId='AñoFinal'>
                  <Form.Label>Año Finalizacion</Form.Label>
                  <Form.Control onChange={(e) => handleOnchage(e)} placeholder='Año finalizacion' type='number' />
                </Form.Group>
              </Col>

            </Row>
            <hr className='w-75 my-5' />
          </Form>

        </section>

      )
    }))
}

const CardDashboard = ({ children, text, plus, handleplus, state }) => {
  let newState
  if (state) {
    newState = state.concat([state.length + 1])
  }

  return (
    <div className='bg-white shadow rounded w-100 h-100 p-4 my-4'>
      <div className='d-flex justify-content-between align-items-center'>
        <h4 className='py-4'>{text}</h4>
        {
          plus
            ? (
              <svg onClick={() => handleplus(newState)} xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='currentColor' class='bi bi-plus-square' viewBox='0 0 16 16'>
                <path d='M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z' />
                <path d='M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z' />
              </svg>)
            : null
        }

      </div>
      {children}
    </div>
  )
}

const Home = () => {
  const router = useRouter()
  const { fields, handleOnchage } = useFildInput()
  const [user, setUser] = useState(false)
  const [sectionEducation, setsectionEducation] = useState(['1'])
  const [message, setMessage] = useState({ show: false, message: '', type: '' })
  // console.log({ fields })

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
    console.log(uid)
    setMessage({ show: true, message: 'todo salio bien gracias', type: 'success' })
    firebase.firestore().collection('users').doc(firebase.auth().currentUser.uid)
      .set({
        data: fields
      }, { merge: true })
      .then(data => {
        setMessage({ show: true, message: 'todo salio bien gracias', type: 'success' })
      })
      .catch((err) => {
        console.log(err.code)
        setMessage({ show: true, message: err.message, type: 'error' })
      })
  }

  return (
    <Layout>
      <div>
        <Head>
          <title>Home</title>
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <main>
          {
            message.show ? <AlertMessage setMessage={setMessage} message={message.message} type={message.type} /> : null
          }

          <Row className='bg-light'>
            <Col lg='2' className='vh-100' />
            <Col lg='10'>
              <Container>

                <h3 className='my-5'><spank className='text-muted'>Welcome</spank> Juan!</h3>

                <CardDashboard text='Data User'>
                  <Form id='DataUser'>
                    <Form.Group controlId='name'>
                      <Form.Label>Name</Form.Label>
                      <Form.Control onChange={(e) => handleOnchage(e)} placeholder='Name' type='text' />
                    </Form.Group>
                    <Form.Group controlId='rol'>
                      <Form.Label>Rol</Form.Label>
                      <Form.Control onChange={(e) => handleOnchage(e)} placeholder='Rol' type='text' />
                    </Form.Group>
                    <Form.Group controlId='descrptionUser'>
                      <Form.Label>About me</Form.Label>
                      <Form.Control onChange={(e) => handleOnchage(e)} placeholder='About me' as='textarea' rows={8} />
                    </Form.Group>
                  </Form>
                </CardDashboard>

                <CardDashboard text='Contacto'>
                  <Form id='contacto'>
                    <Form.Group controlId='NumberPhone'>
                      <Form.Label for='phone'>Number Phone</Form.Label>
                      <Form.Control onChange={(e) => handleOnchage(e)} placeholder='Number Phone' type='tel' />
                    </Form.Group>
                    <Form.Group controlId='Web'>
                      <Form.Label>Site Web</Form.Label>
                      <Form.Control onChange={(e) => handleOnchage(e)} placeholder='Site Web' type='url' />
                    </Form.Group>
                    <Form.Group controlId='Addres Email'>
                      <Form.Label>Addres Email</Form.Label>
                      <Form.Control onChange={(e) => handleOnchage(e)} placeholder='Addres Email' type='emil' />
                    </Form.Group>
                    <Form.Group controlId='Linkedin'>
                      <Form.Label>Linkedin</Form.Label>
                      <Form.Control onChange={(e) => handleOnchage(e)} placeholder='Linkedin' type='url' />
                    </Form.Group>
                    <Form.Group controlId='Github'>
                      <Form.Label>Github</Form.Label>
                      <Form.Control onChange={(e) => handleOnchage(e)} placeholder='Github' type='url' />
                    </Form.Group>
                  </Form>
                </CardDashboard>

                <CardDashboard text='Education' plus handleplus={setsectionEducation} state={sectionEducation}>
                  <FormEducation sectionEducation={sectionEducation} handleOnchage={handleOnchage} />
                </CardDashboard>
                <CardDashboard text='Habilidades' plus handleplus={setsectionEducation} state={sectionEducation}>
                  <Row className='d-flex'>
                    <Form id='habilidades'>

                      <Form.Group controlId='NameHabilidad'>
                        <Form.Label>Name habilidad</Form.Label>
                        <Form.Control onChange={(e) => handleOnchage(e)} placeholder='name habilidad' type='text' />
                      </Form.Group>

                      <Form.Group className='w-100' controlId='Rangehabilidad'>
                        <Form.Label>% De la habilidad</Form.Label>
                        <Form.Control onChange={(e) => handleOnchage(e)} type='range' />
                      </Form.Group>

                    </Form>
                  </Row>

                </CardDashboard>

                <CardDashboard text='Experience'>
                  <Form id='experience'>

                    <Form.Group controlId='cargo'>
                      <Form.Label>Cargo</Form.Label>
                      <Form.Control onChange={(e) => handleOnchage(e)} placeholder='cargo' type='text' />
                    </Form.Group>
                    <Form.Group controlId='mpresa'>
                      <Form.Label>Empresa</Form.Label>
                      <Form.Control onChange={(e) => handleOnchage(e)} placeholder='Empresa' type='text' />
                    </Form.Group>

                    <Row className='d-flex'>
                      <Col>
                        <Form.Group controlId='AñoInicial'>
                          <Form.Label>Año de inicio</Form.Label>
                          <Form.Control onChange={(e) => handleOnchage(e)} placeholder='año de inicio' type='number' />
                        </Form.Group>
                      </Col>
                      <Col>
                        <Form.Group controlId='AñoFinal'>
                          <Form.Label>Año Finalizacion</Form.Label>
                          <Form.Control onChange={(e) => handleOnchage(e)} placeholder='Año finalizacion' type='number' />
                        </Form.Group>
                      </Col>

                    </Row>
                    <Form.Group controlId='descrption'>
                      <Form.Label>About work</Form.Label>
                      <Form.Control onChange={(e) => handleOnchage(e)} placeholder='About work' as='textarea' rows={4} />
                    </Form.Group>
                  </Form>
                </CardDashboard>
                <CardDashboard>
                  <p>Guarda tus datos. (Tus datos se guardan automaticamente cada 30 segundos)</p>
                  <Button block onClick={(e) => handleSubmit(e)}>Save</Button>

                </CardDashboard>
              </Container>
            </Col>
          </Row>
        </main>
      </div>
    </Layout>

  )
}

export default Home
