import GeneralInfo from "./form/GeneralInfo";
import FormSectionHeader from "./form/FormSectionHeader";
import EducationForm from "./form/EducationForm";
import ExperienceForm from "./form/ExperienceForm";
import PreviewAction from "./form/PreviewAction";

const EditorContainer = (props) => {
  return (
    <div className="editor-container">
      <FormSectionHeader title="Personal Information" />
      <GeneralInfo
        personalInfo={props.personalInfo}
        setPersonalInfo={props.setPersonalInfo}
      />
      <FormSectionHeader title="Experience" />
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
      <FormSectionHeader title="Education" />
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
    </div>
  );
};

export default EditorContainer;
