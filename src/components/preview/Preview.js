const Preview = (props) => {
  return (
    <div className="preview-cv">
      <h2>Name: {props.name}</h2>
      <h2>Email: {props.email}</h2>
      <h2>Phone Number: {props.phone} </h2>
      <h2>Description: {props.desc}</h2>
      <h2>School Name: {props.schoolName}</h2>
      <h2>Degree: {props.degree}</h2>
      <h2>
        {props.startDate} - {props.endDate}
      </h2>
    </div>
  );
};

export default Preview;
