const Education = (props) => {
  function handleCheckbox() {
    if (!props.present) {
      props.setPresent(true);
      props.setEndDate("Present");
    } else {
      props.setPresent(false);
      console.log(props.endDate);
      props.setEndDate("");
    }
  }

  return (
    <div className="info">
      <h2>Education</h2>
      <input
        type="text"
        onChange={(e) => props.setSchoolName(e.target.value)}
        placeholder="School name"
      />
      <input
        type="email"
        onChange={(e) => props.setDegree(e.target.value)}
        placeholder="Degree"
      />
      <div className="date">
        <input
          type="date"
          onChange={(e) => props.setStartDate(e.target.value)}
        />
        <input
          type="date"
          onChange={(e) => props.setEndDate(e.target.value)}
          disabled={props.present}
        />
        <input type="checkbox" onChange={(e) => handleCheckbox()} />
      </div>
    </div>
  );
};

export default Education;
