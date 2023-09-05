import {useContext} from 'react'
import { LoginContext } from '../../App'

function Home() {
  const {isLogin , setIsLogin} = useContext(LoginContext)
  const LogoutHandler = () =>{
    setIsLogin(false)
    localStorage.clear()
  }
  return (
    <div>
      <button onClick={LogoutHandler}>Logout</button>
    </div>
  )
}

export default Home