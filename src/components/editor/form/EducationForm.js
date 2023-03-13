import ActionButtons from "./ActionButtons";

const Education = (props) => {
  function handleSubmit(e) {
    if (props.educationForm.id === "") {
      // save previous state and add new education object
      const newEducation = [
        ...props.education,
        {
          schoolName: props.educationForm.schoolName,
          schoolLocation: props.educationForm.schoolLocation,
          degree: props.educationForm.degree,
          startDate: props.educationForm.startDate,
          endDate: props.educationForm.endDate,
          id: props.education.length,
        },
      ];
      props.setEducation(newEducation);
    } else {
      // modify index object value using its ID
      const newEducation = [...props.education];
      newEducation[props.educationForm.id] = {
        schoolName: props.educationForm.schoolName,
        schoolLocation: props.educationForm.schoolLocation,
        degree: props.educationForm.degree,
        startDate: props.educationForm.startDate,
        endDate: props.educationForm.endDate,
        id: props.educationForm.id,
      };
      props.setEducation(newEducation);
    }

    resetForm();
    e.preventDefault();
  }

  function resetForm() {
    props.setEducationForm({
      schoolName: "",
      schoolLocation: "",
      degree: "",
      startDate: "",
      endDate: "",
      id: "",
    });
  }

  return (
    <form className="info" onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        onChange={(e) =>
          props.setEducationForm({
            ...props.educationForm,
            schoolName: e.target.value,
          })
        }
        placeholder="School name"
        value={props.educationForm.schoolName}
        required
      />
      <input
        type="text"
        onChange={(e) =>
          props.setEducationForm({
            ...props.educationForm,
            schoolLocation: e.target.value,
          })
        }
        placeholder="School location"
        value={props.educationForm.schoolLocation}
      />
      <input
        type="text"
        onChange={(e) =>
          props.setEducationForm({
            ...props.educationForm,
            degree: e.target.value,
          })
        }
        value={props.educationForm.degree}
        placeholder="Degree"
        required
      />
      <div className="date-buttons">
        <input
          type="text"
          onChange={(e) =>
            props.setEducationForm({
              ...props.educationForm,
              startDate: e.target.value,
            })
          }
          value={props.educationForm.startDate}
          placeholder="Start date"
          required
        />
        <span>to</span>
        <input
          type="text"
          onChange={(e) =>
            props.setEducationForm({
              ...props.educationForm,
              endDate: e.target.value,
            })
          }
          value={props.educationForm.endDate}
          placeholder="End date"
          required
        />
        <ActionButtons
          form={props.educationForm}
          setForm={props.setEducationForm}
          title="Add Experience"
        />
      </div>
    </form>
  );
};

export default Education;
