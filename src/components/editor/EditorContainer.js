import GeneralInfo from "./GeneralInfo";
import EducationForm from "./education/EducationForm";
import ComponentHeader from "./ComponentHeader";
import ExperienceForm from "./experience/ExperienceForm";
import PreviewAction from "./form/PreviewAction";

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
      {props.education
        .map((edu, key) => {
          return (
            <PreviewAction
              key={edu.id}
              name={edu.schoolName}
              startDate={edu.startDate}
              endDate={edu.endDate}
              id={edu.id}
              items={props.education}
              setItems={props.setEducation}
              setForm={props.setEducationForm}
            />
          );
        })
        .reverse()}
      <EducationForm
        education={props.education}
        setEducation={props.setEducation}
        educationForm={props.educationForm}
        setEducationForm={props.setEducationForm}
      />
      <ComponentHeader title="Experience" />
      {props.experience
        .map((edu, key) => {
          return (
            <PreviewAction
              key={edu.id}
              name={edu.companyName}
              startDate={edu.startDate}
              endDate={edu.endDate}
              id={edu.id}
              items={props.experience}
              setItems={props.setExperience}
              setForm={props.setExperienceForm}
            />
          );
        })
        .reverse()}
      <ExperienceForm
        experience={props.experience}
        setExperience={props.setExperience}
        experienceForm={props.experienceForm}
        setExperienceForm={props.setExperienceForm}
      />
    </div>
  );
};

export default EditorContainer;
