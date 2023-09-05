import Button from "../button/Button";
import styles from "./style.module.css";
import { useNavigate } from "react-router-dom";
import { GetSinglePostAPI } from "../../utils/apis";
import { DeleteFunction } from "../../utils/service";

function Card(props) {
  const navigate = useNavigate();
  const editHandler = (id) => {
    navigate(`/post/${id}`);
  };
  const deleteHandler = (id) => {
    const confirmResult = confirm(`Are you sure to delete ${id}`);
    if (confirmResult) {
      console.log("deleted", id);
      DeleteFunction(GetSinglePostAPI(id))
        .then((res) => {
          console.log(res.data);
          window.location.reload();
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };
  return (
    <div key={props.key} className={styles.cardContainer}>
      <img src={props.image} alt="card image" className={styles.cardImage} />
      <div className={styles.titleContainer}>
        <h3 className={styles.cardTitle}>{props.title}</h3>
        <p className={styles.cardAuthor}>{props.author}</p>
      </div>
      <div className={styles.cardBody}>
        <p>
          {props.body.length >= 30
            ? props.body.slice(0, 30) + "..."
            : props.body}
        </p>
        <Button
          onClick={() => {
            editHandler(props.id);
          }}
          className={styles.btnEdit}
        >
          Edit
        </Button>
        <Button
          onClick={() => deleteHandler(props.id)}
          className={styles.btnDelete}
        >
          Delete
        </Button>
      </div>
    </div>
  );
}

export default Card;
