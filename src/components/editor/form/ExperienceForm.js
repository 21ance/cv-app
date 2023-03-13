import ActionButtons from "./ActionButtons";

const ExperienceForm = (props) => {
  function handleSubmit(e) {
    if (props.experienceForm.id === "") {
      const newExperience = [
        ...props.experience,
        {
          companyName: props.experienceForm.companyName,
          position: props.experienceForm.position,
          description: props.experienceForm.description,
          startDate: props.experienceForm.startDate,
          endDate: props.experienceForm.endDate,
          id: props.experience.length,
        },
      ];
      props.setExperience(newExperience);
    } else {
      const newExperience = [...props.experience];
      newExperience[props.experienceForm.id] = {
        companyName: props.experienceForm.companyName,
        position: props.experienceForm.position,
        description: props.experienceForm.description,
        startDate: props.experienceForm.startDate,
        endDate: props.experienceForm.endDate,
        id: props.experienceForm.id,
      };
      props.setExperience(newExperience);
    }

    props.setExperienceForm({
      companyName: "",
      position: "",
      description: "",
      startDate: "",
      endDate: "",
      id: "",
    });
    e.preventDefault();
  }
  return (
    <form className="info" onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        onChange={(e) =>
          props.setExperienceForm({
            ...props.experienceForm,
            companyName: e.target.value,
          })
        }
        placeholder="Company name"
        value={props.experienceForm.companyName}
        required
      />
      <input
        type="text"
        onChange={(e) =>
          props.setExperienceForm({
            ...props.experienceForm,
            position: e.target.value,
          })
        }
        placeholder="Position"
        value={props.experienceForm.position}
        required
      />
      <textarea
        type="text"
        onChange={(e) =>
          props.setExperienceForm({
            ...props.experienceForm,
            description: e.target.value,
          })
        }
        placeholder="Description"
        value={props.experienceForm.description}
        required
        rows="4"
      />
      <div className="date-buttons">
        <input
          type="text"
          onChange={(e) =>
            props.setExperienceForm({
              ...props.experienceForm,
              startDate: e.target.value,
            })
          }
          value={props.experienceForm.startDate}
          placeholder="Start date"
          required
        />
        <span>to</span>
        <input
          type="text"
          onChange={(e) =>
            props.setExperienceForm({
              ...props.experienceForm,
              endDate: e.target.value,
            })
          }
          value={props.experienceForm.endDate}
          placeholder="End date"
          required
        />
        <ActionButtons
          form={props.experienceForm}
          setForm={props.setExperienceForm}
          title="Add Experience"
        />
      </div>
    </form>
  );
};

export default ExperienceForm;
