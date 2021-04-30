import { Alert } from 'react-bootstrap'

const ContainerFormAuth = ({ children, error, text }) => {
  return (
    <div className='bg-light p-5 shadow rounded '>
      <h1 className='text-center'>
        {text}
      </h1>
      {
        error
          ? (<Alert variant='danger'>{error}</Alert>)
          : null
      }
      {children}
    </div>
  )
}

export default ContainerFormAuth
