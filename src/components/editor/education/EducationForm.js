import { useState } from "react";

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
    const newEducation = [
      {
        schoolName: props.educationForm.schoolName,
        degree: props.educationForm.degree,
        startDate: props.educationForm.startDate,
        endDate: props.educationForm.endDate,
        id: props.education.length + 1,
      },
      ...props.education,
    ];
    props.setEducation(newEducation);

    e.preventDefault();
    e.target.reset();
    setPresent(false);
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
          type="date"
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
          type="date"
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
      <button>Save</button>
    </form>
  );
};

export default Education;
