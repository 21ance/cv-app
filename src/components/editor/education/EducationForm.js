import { useState } from "react";

const Education = (props) => {
  const [schoolName, setSchoolName] = useState("");
  const [degree, setDegree] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [present, setPresent] = useState(false);

  function handleCheckbox() {
    if (!present) {
      setPresent(true);
      setEndDate("Present");
    } else {
      setPresent(false);
      setEndDate("");
    }
  }

  function handleSubmit(e) {
    const newEducation = [
      {
        schoolName,
        degree,
        startDate,
        endDate,
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
        onChange={(e) => setSchoolName(e.target.value)}
        placeholder="School name"
        required
      />
      <input
        type="text"
        onChange={(e) => setDegree(e.target.value)}
        placeholder="Degree"
        required
      />
      <div className="date">
        <input
          type="date"
          onChange={(e) => setStartDate(e.target.value)}
          required
        />
        <input
          type="date"
          onChange={(e) => setEndDate(e.target.value)}
          disabled={present}
          required
        />
        <input type="checkbox" onChange={(e) => handleCheckbox()} />
      </div>
      <button>Save</button>
    </form>
  );
};

export default Education;
