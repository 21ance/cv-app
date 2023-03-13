const PreviewAction = (props) => {
  function handleRemove(id) {
    const newObject = props.items.filter((obj) => obj.id !== id);
    props.setItems(newObject);
  }

  function handleEdit(id) {
    const newForm = props.items.filter((obj) => obj.id === id).pop();
    props.setForm(newForm);
  }

  return (
    <div className="preview-action">
      <h3>{props.name}</h3>
      <span>
        {props.startDate} - {props.endDate}
      </span>
      <button className="edit" onClick={() => handleEdit(props.id)}>
        <ion-icon name="create-outline"></ion-icon>
      </button>
      <button className="remove" onClick={() => handleRemove(props.id)}>
        <ion-icon name="trash-outline"></ion-icon>
      </button>
    </div>
  );
};

export default PreviewAction;
