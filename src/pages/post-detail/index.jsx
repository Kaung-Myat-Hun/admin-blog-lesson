import { useEffect, useState } from "react";
import { GetSinglePostAPI } from "../../utils/apis";
import axios from "axios";
import { useParams } from "react-router-dom";
import styles from "./style.module.css";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import { LogoutFunction, UpdateFunction } from "../../utils/service";
import { toast } from "react-toastify";

function PostDetail() {

  const params = useParams();
  const [postData, setPostData] = useState({});
  const id = params.id;
  useEffect(() => {
    axios
      .get(GetSinglePostAPI(id))
      .then((res) => {
        console.log(res.data);
        setPostData(res.data.data);
      })
      .catch((err) => console.error(err));
  }, []);
  const changeHandler = (e) => {
    console.log(e.target.value);
    setPostData(
      {
        ...postData,
        [e.target.name] : e.target.value
      }
    )
  };
  const updateHandler = () => {
    UpdateFunction(GetSinglePostAPI(id), postData).then((res)=>{
      console.log(res.data)
      // alert(res.data.message)
      toast(res.data.message)
    }).catch((err) => {
      console.error(err)
      if(err.response.status === 401) {
        LogoutFunction();
      }
    })
  }
  return (
    <div className={styles.postDetailContainer}>
      <img src={postData.image || ""} alt="" style={{ width: "300px" }} />
      <div>
        <Input
          className={styles.input}
          onChange={changeHandler}
          name="title"
          value={postData.title}
        />
        <Input
          className={styles.input}
          onChange={changeHandler}
          name="author"
          value={postData.author}
        />
        <textarea
          name="body"
          className={styles.textarea}
          onChange={changeHandler}
          value={postData.body}
        />
        <Button onClick={updateHandler} className={styles.btn}>Update</Button>
      </div>
    </div>
  );
}

export default PostDetail;
