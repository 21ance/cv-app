import GeneralInfo from "./GeneralInfo";
import Education from "./Education";

const EditorContainer = (props) => {
  return (
    <div className="editor-container">
      <GeneralInfo
        setName={props.setName}
        setEmail={props.setEmail}
        setPhone={props.setPhone}
        setDesc={props.setDesc}
      />
      <Education
        setSchoolName={props.setSchoolName}
        setDegree={props.setDegree}
        setStartDate={props.setStartDate}
        setEndDate={props.setEndDate}
        setPresent={props.setPresent}
        present={props.present}
      />
    </div>
  );
};

export default EditorContainer;
