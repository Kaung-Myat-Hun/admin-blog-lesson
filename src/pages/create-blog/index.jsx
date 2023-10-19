import { useState } from "react";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import styles from "./style.module.css";
import axios from "axios";
import { GetAllPostsAPI } from "../../utils/apis";
import { token } from "../../utils/apis";
import { LogoutFunction } from "../../utils/service";
import { toast } from "react-toastify";

function CreateBlog() {
  const initialFormData = {
    title: "",
    body: "",
    author:""
  }
  const [imageLink, setImageLink] = useState("")
  const [formData, setFormData] = useState(initialFormData);
  const resetFunction = () =>{
    setFormData(initialFormData)
    setImageLink("")
  }
  const changeHandler = (e) => {
    setFormData({
      ...formData , 
      [e.target.name] : e.target.value
    })
  };
  const fileChangeHandler = (e) => {
    setFormData({
      ...formData, 
      image: e.target.files[0]
    })
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0])
    reader.addEventListener("load" , () => {
      setImageLink(reader.result)
    })
  };
  const createPostHandler = (e) => {
    e.preventDefault();
    console.log(formData)
    axios.post(GetAllPostsAPI, formData ,{
      headers: {
        "Content-type": "multipart/form-data",
        token : token
      }
    }).then((res) => {
      // alert(res.data.message)
      toast.success(res.data.message)
      resetFunction();
    }).catch((err) => {
      console.error(err)
      if(err.response.status === 401 ){
        LogoutFunction();
      }
    })
  }
  return (
    <form onSubmit={createPostHandler} className={styles.formContainer}> 
    <h3>Create Post</h3>
      <div className={styles.inputContainer}>
        <label htmlFor="title">Title</label> <br />
        <Input
          id="title"
          type="text"
          name="title"
          placeholder="Enter Title"
          value={formData.title}
          className={styles.input}
          onChange={changeHandler}
        />
      </div>
      <div className={styles.inputContainer}>
      <label htmlFor="author">Author</label><br />
        <Input
          id="author"
          type="text"
          name="author"
          placeholder="Enter author"
          value={formData.author}
          className={styles.input}
          onChange={changeHandler}
        />
      </div>
      <div className={`${styles.inputContainer} ${styles.fileContainer}`}>
        <label className={styles.ImageBtn} htmlFor="image">Select Image</label><br />
        <Input
          id="image"
          type="file"
          name="image"
          value=""
          hidden={true}
          onChange={fileChangeHandler}
        />
        <img src={imageLink} alt="" style={{width: "100px"}} />
      </div>
      <div className={styles.inputContainer}>
      <label htmlFor="body">Body</label><br />
        <textarea name="body" id="body" value={formData.body}
        placeholder="Enter Post Body Text" onChange={changeHandler} 
        className={styles.textInput}></textarea>
      </div>
      <Button className={styles.submitBtn}>Submit</Button>
    </form>
  );
}

export default CreateBlog;
