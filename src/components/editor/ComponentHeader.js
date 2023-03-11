const ComponentHeader = (props) => {
  const handleButton = () => {
    // props.setValue((prevState) => {
    //   return {
    //     ...prevState,
    //     list: [props.value.list.length],
    //   };
    // });
    // console.log(props);
  };

  return (
    <div className="component-header">
      <h2>{props.title}</h2>
      {props.setValue && <button onClick={handleButton}>+</button>}
    </div>
  );
};

export default ComponentHeader;
