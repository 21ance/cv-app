const EducationEdit = (props) => {
  const handleRemove = (id) => {
    const newEducation = props.education.filter((edu) => edu.id !== id);
    props.setEducation(newEducation);
  };

  return (
    <div className="education-edit">
      <h3>{props.schoolName}</h3>
      <span>
        {props.startDate} - {props.endDate}
      </span>
      <button>Edit</button>
      <button onClick={() => handleRemove(props.id)}>Remove</button>
    </div>
  );
};

export default EducationEdit;
