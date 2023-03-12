const PreviewAction = (props) => {
  function handleRemove(id) {
    const newObject = props.items.filter((obj) => obj.id !== id);
    props.setItems(newObject);
  }

  function handleEdit(id) {
    const newForm = props.items.filter((obj) => obj.id === id).pop();
    props.setForm(newForm);
    console.log(props.items);
  }

  return (
    <div className="edit">
      <h3>{props.name}</h3>
      <span>
        {props.startDate} - {props.endDate}
      </span>
      <button onClick={() => handleEdit(props.id)}>Edit</button>
      <button onClick={() => handleRemove(props.id)}>Remove</button>
    </div>
  );
};

export default PreviewAction;
