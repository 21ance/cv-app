import { useState } from "react";
import ActionButtons from "./ActionButtons";

const Education = (props) => {
  const [present, setPresent] = useState(false);

  function handleCheckbox() {
    if (!present) {
      setPresent(true);
      props.setEducationForm({
        ...props.educationForm,
        endDate: "Present",
      });
    } else {
      setPresent(false);
      props.setEducationForm({
        ...props.educationForm,
        endDate: "mm-dd-yyy",
      });
    }
  }

  function handleSubmit(e) {
    if (props.educationForm.id === "") {
      // save previous state and add new education object
      const newEducation = [
        ...props.education,
        {
          schoolName: props.educationForm.schoolName,
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
        degree: props.educationForm.degree,
        startDate: props.educationForm.startDate,
        endDate: props.educationForm.endDate,
        id: props.educationForm.id,
      };
      props.setEducation(newEducation);
    }

    resetForm();
    e.preventDefault();
    // setPresent(false);
  }

  function resetForm() {
    props.setEducationForm({
      schoolName: "",
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
            degree: e.target.value,
          })
        }
        value={props.educationForm.degree}
        placeholder="Degree"
        required
      />
      <div className="date">
        <input
          type="month"
          onChange={(e) =>
            props.setEducationForm({
              ...props.educationForm,
              startDate: e.target.value,
            })
          }
          value={props.educationForm.startDate}
          required
        />
        <input
          type="month"
          onChange={(e) =>
            props.setEducationForm({
              ...props.educationForm,
              endDate: e.target.value,
            })
          }
          disabled={present}
          value={props.educationForm.endDate}
          required
        />
        <input type="checkbox" onChange={(e) => handleCheckbox()} />
      </div>
      <ActionButtons
        form={props.educationForm}
        setForm={props.setEducationForm}
        title="Add Education"
      />
    </form>
  );
};

export default Education;
