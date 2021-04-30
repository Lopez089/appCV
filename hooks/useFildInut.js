import { useState } from 'react'

const useFildInput = () => {
  const [fields, setFields] = useState({ email: '', password: '' })

  const handleOnchage = (e) => {
    setFields({
      ...fields,
      [e.target.id]: e.target.value
    })
  }

  return { fields, handleOnchage }
}

export default useFildInput
