import GeneralInfo from "./GeneralInfo";
import EducationForm from "./education/EducationForm";
import EducationEdit from "./education/EducationEdit";
import ComponentHeader from "./ComponentHeader";

const EditorContainer = (props) => {
  return (
    <div className="editor-container">
      <ComponentHeader title="Personal Information" />
      <GeneralInfo
        setName={props.setName}
        setEmail={props.setEmail}
        setPhone={props.setPhone}
        setDesc={props.setDesc}
      />
      <ComponentHeader title="Education" />
      {props.education.map((edu, key) => {
        return (
          <EducationEdit
            key={edu.id}
            schoolName={edu.schoolName}
            startDate={edu.startDate}
            endDate={edu.endDate}
            id={edu.id}
            education={props.education}
            setEducation={props.setEducation}
            educationForm={props.educationForm}
            setEducationForm={props.setEducationForm}
          />
        );
      })}
      <EducationForm
        education={props.education}
        setEducation={props.setEducation}
        educationForm={props.educationForm}
        setEducationForm={props.setEducationForm}
      />
    </div>
  );
};

export default EditorContainer;
