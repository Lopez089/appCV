
import { Alert } from 'react-bootstrap'

const AlertMessage = ({ type, setMessage, message }) => {
  return (
    <Alert
      variant={type === 'error' ? 'danger' : 'success'}
      onClose={() => setMessage(false)}
      dismissible
      className=' m-4 w-25'
      style={{ position: 'fixed', bottom: '0px', right: '0px', 'z-index': '999' }}
    >
      <Alert.Heading>{type === 'error' ? 'Error!!!' : 'Success!!!'}</Alert.Heading>
      <p>
        {message}
      </p>
    </Alert>
  )
}

export default AlertMessage

// position: fixed;
//     bottom: 0px;
//     z-index: 9;
