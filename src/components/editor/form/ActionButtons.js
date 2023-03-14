const ActionButtons = (props) => {
  function handleCancel() {
    if (props.form.hasOwnProperty("schoolName")) {
      props.setForm({
        schoolName: "",
        schoolLocation: "",
        degree: "",
        startDate: "",
        endDate: "",
        id: "",
      });
    }

    if (props.form.hasOwnProperty("companyName")) {
      props.setForm({
        companyName: "",
        position: "",
        description: "",
        startDate: "",
        endDate: "",
        id: "",
      });
    }
  }

  return (
    <div className="action-buttons">
      <button className="button-submit" type="submit">
        {props.form.id === "" ? props.title : "Save Edit"}
      </button>
      <button
        className="button-cancel"
        type="button"
        onClick={() => handleCancel()}
      >
        {props.form.id === "" ? "Clear" : "Cancel"}
      </button>
    </div>
  );
};

export default ActionButtons;
