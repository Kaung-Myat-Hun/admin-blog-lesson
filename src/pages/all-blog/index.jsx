import React from "react";
import Card from "../../components/card/Card";
import styles from "./style.module.css";
import { postData } from "./data";
import { GetDataHook } from "../../utils/service";
import { GetAllPostsAPI } from "../../utils/apis";

function AllBlog() {
  const {data, loading} = GetDataHook(GetAllPostsAPI)
  console.log(data, loading)
  return (
    <div className={styles.postsContainer}>
      {data.map((post) => (
        <Card
          id={post.id}
          key={post.id}
          title={post.title}
          body={post.body}
          author={post.author || "anonymous"}
          image={post.image}
        ></Card>
      ))}
    </div>
  );
}

export default AllBlog;
