import { useState, createContext } from 'react'
import './App.css'
import Login from './pages/login/index'
import Dashboard from './layout/dashboard/index'

export const LoginContext = createContext();
function App() {
  const [isLogin, setIsLogin] = useState(true)

  return (
    <>
    <LoginContext.Provider value={{isLogin, setIsLogin}}>
      {isLogin ? (
        <Dashboard/>
      ) : (<Login />)}
    </LoginContext.Provider>
    </>
  )
}

export default App
