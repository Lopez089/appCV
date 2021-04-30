import { Row, Col } from 'react-bootstrap'

const LayoutAuth = ({ children }) => {
  return (
    <Row className='vh-100'>
      <Col className='d-flex justify-content-center align-items-center'>
        <img src='/cv1.svg' alt='img-cv' className='w-75' />
      </Col>
      <Col className='d-flex justify-content-center align-items-center'>
        {children}
      </Col>
    </Row>
  )
}

export default LayoutAuth

// loyaut https://www.pinterest.es/pin/710513278692504486/
