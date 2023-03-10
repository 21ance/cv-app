import GeneralInfo from "./GeneralInfo";

const EditorContainer = (props) => {
  return (
    <div className="editor-container">
      <GeneralInfo
        setName={props.setName}
        setEmail={props.setEmail}
        setPhone={props.setPhone}
        setDesc={props.setDesc}
      />
    </div>
  );
};

export default EditorContainer;
