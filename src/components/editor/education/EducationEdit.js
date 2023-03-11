const EducationEdit = (props) => {
  function handleRemove(id) {
    const newEducation = props.education.filter((edu) => edu.id !== id);
    props.setEducation(newEducation);
  }

  function handleEdit(id) {
    const newEducationForm = props.education
      .filter((edu) => edu.id === id)
      .pop();
    props.setEducationForm(newEducationForm);
  }

  return (
    <div className="education-edit">
      <h3>{props.schoolName}</h3>
      <span>
        {props.startDate} - {props.endDate}
      </span>
      <button onClick={() => handleEdit(props.id)}>Edit</button>
      <button onClick={() => handleRemove(props.id)}>Remove</button>
    </div>
  );
};

export default EducationEdit;
