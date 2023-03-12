const ExperienceEdit = (props) => {
  function handleRemove(id) {
    const newExperience = props.experience.filter((edu) => edu.id !== id);
    props.setExperience(newExperience);
  }

  function handleEdit(id) {
    const newExperienceForm = props.experience
      .filter((edu) => edu.id === id)
      .pop();
    props.setExperienceForm(newExperienceForm);
  }
  // console.log(props);
  return (
    <div className="experience-edit">
      <h3>{props.companyName}</h3>
      <span>
        {props.startDate} - {props.endDate}
      </span>
      <button onClick={() => handleEdit(props.id)}>Edit</button>
      <button onClick={() => handleRemove(props.id)}>Remove</button>
    </div>
  );
};

export default ExperienceEdit;
