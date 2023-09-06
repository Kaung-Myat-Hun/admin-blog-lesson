import { useState, createContext , useEffect } from 'react'
import './App.css'
import Login from './pages/login/index'
import Dashboard from './layout/dashboard/index'

export const LoginContext = createContext();
function App() {
  const [isLogin, setIsLogin] = useState(false)
  useEffect(() => {
    const loginResult = localStorage.getItem("isLogin")
    setIsLogin(loginResult)
  }, [])
  
  return (
    <>
    <LoginContext.Provider value={{isLogin, setIsLogin}}>
      {isLogin === "true" ? (
        <Dashboard/>
      ) : (<Login />)}
    </LoginContext.Provider>
    </>
  )
}

export default App
