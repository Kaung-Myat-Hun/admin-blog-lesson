function Input(props) {
  return (
    <input
    id={props.id}
      type={props.type}
      onChange={props.onChange}
      className={props.className}
      name={props.name}
      value={props.value}
      hidden={props.hidden}
      placeholder={props.placeholder}
    />
  );
}

export default Input;
