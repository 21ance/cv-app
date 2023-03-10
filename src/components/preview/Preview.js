const Preview = (props) => {
  return (
    <div className="preview-cv">
      {console.log(props)}
      <h2>Name: {props.name}</h2>
      <h2>Email: {props.email}</h2>
      <h2>Phone Number: {props.phone} </h2>
      <h2>Description: {props.desc}</h2>
    </div>
  );
};

export default Preview;
