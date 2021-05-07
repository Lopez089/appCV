import { useState } from 'react'

const useFildInput = () => {
  const [fields, setFields] = useState({ email: '', password: '' })

  const handleOnchage = (e) => {
    const parent = e.target.parentElement.parentElement.id
    const parentParent = e.target.parentElement.parentElement.parentElement.parentElement.id
    const idForm = parent === '' ? parentParent : parent

    const newState = {
      ...fields,
      [idForm]: {
        ...fields[idForm],
        [e.target.id]: e.target.value
      }
    }

    setFields(newState)
  }
  // console.log(fields)
  return { fields, handleOnchage }
}

export default useFildInput
