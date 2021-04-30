import { Navbar } from 'react-bootstrap'
import NavNotificationUser from '../NavNotificationUser/NavNotificationUser'
import useStateAuth from '../../hooks/useStateAuth'
import useUserData from '../../hooks/useUserData'

// TODO:
// recopilar los datos del user y ponerlo en lo del navBar
// test
// errores consola

const Layout = ({ children }) => {
  const { user } = useStateAuth()
  const { userData } = useUserData(user)

  console.log(userData)

  return (
    <div>
      <Navbar className='px-5 shadow justify-content-between'>
        <Navbar.Brand>
          <img height='18rem' src='vercel.svg' alt='logo' />
        </Navbar.Brand>
        {
          user
            ? <NavNotificationUser />
            : null
        }

      </Navbar>
      {children}
    </div>
  )
}

export default Layout
