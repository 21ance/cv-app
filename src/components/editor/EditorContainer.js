import GeneralInfo from "./GeneralInfo";
import EducationForm from "./education/EducationForm";
import EducationEdit from "./education/EducationEdit";
import ComponentHeader from "./ComponentHeader";
import ExperienceForm from "./experience/ExperienceForm";
import ExperienceEdit from "./experience/ExperienceEdit";

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
            <ExperienceEdit
              key={edu.id}
              companyName={edu.companyName}
              position={edu.position}
              description={edu.description}
              startDate={edu.startDate}
              endDate={edu.endDate}
              id={edu.id}
              experience={props.experience}
              setExperience={props.setExperience}
              experienceForm={props.experienceForm}
              setExperienceForm={props.setExperienceForm}
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
