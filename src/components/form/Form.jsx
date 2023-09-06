import { useState,useContext } from "react";
import Input from "../input/Input";
import Button from "../button/Button";
import styles from './style.module.css'
import { LoginContext } from "../../App";
import { PostFunction } from "../../utils/service";
import { LoginAPI } from "../../utils/apis";

function Form() {
  const {isLogin, setIsLogin} = useContext(LoginContext);
  const [showPassword, setShowPassword] = useState(false)
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const changeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const submitHandler = (e) =>{
    e.preventDefault();
      e.preventDefault()
      PostFunction(LoginAPI, form).then((res)=> {
        console.log(res.data)
        if(res.data.status === "success") {
          localStorage.setItem("token", res.data.data.token.accessToken)
          localStorage.setItem("isLogin", true)
          window.location.reload();
        }
      }).catch((err)=> {
        console.log(err)
        localStorage.setItem("isLogin" , false)
      })
    
  }
  const showPasshandler = () => {
    setShowPassword(!showPassword)
  }
  return (
    <form className={styles.formContainer}
    onSubmit={submitHandler}>
      <h3 className={styles.formTitle}>Login</h3>
      <Input
      className={styles.formInput}
        type="text"
        onChange={changeHandler}
        name="email"
        value={form.email}
        placeholder="Enter Email"
      />
      <Input
      className={styles.formInput}
        type={showPassword ? "text" : "password"}
        onChange={changeHandler}
        name="password"
        value={form.password}
        placeholder="Enter Password"
      />
      <div>
        <Input type="checkbox" 
        onChange={showPasshandler}
        id="showPass"
        />
        <label htmlFor="showPass">Show Password</label>
      </div>
      <Button type="submit" onClick={submitHandler} 
      className={styles.formBtn}>
        Login
      </Button>
    </form>
  );
}

export default Form;
