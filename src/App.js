import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import EditorContainer from "./components/editor/EditorContainer";
import Preview from "./components/preview/Preview";

const App = () => {
  const [personalInfo, setPersonalInfo] = useState(() => {
    if (JSON.parse(localStorage.getItem("personalInfo")) !== null) {
      return JSON.parse(localStorage.getItem("personalInfo"));
    } else {
      return {
        name: "",
        email: "",
        phone: "",
        desc: "",
      };
    }
  });

  const [educationForm, setEducationForm] = useState({
    schoolName: "",
    schoolLocation: "",
    degree: "",
    startDate: "",
    endDate: "",
    id: "",
  });

  const [education, setEducation] = useState(() => {
    if (JSON.parse(localStorage.getItem("education")) !== null) {
      return JSON.parse(localStorage.getItem("education"));
    }
    return [];
  });

  const [experienceForm, setExperienceForm] = useState({
    companyName: "",
    position: "",
    description: "",
    startDate: "",
    endDate: "",
    id: "",
  });

  const [experience, setExperience] = useState(() => {
    if (JSON.parse(localStorage.getItem("experience")) !== null) {
      return JSON.parse(localStorage.getItem("experience"));
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem("personalInfo", JSON.stringify(personalInfo));
    localStorage.setItem("experience", JSON.stringify(experience));
    localStorage.setItem("education", JSON.stringify(education));
  }, [personalInfo, education, experience]);

  return (
    <div className="app">
      <Header
        setPersonalInfo={setPersonalInfo}
        setEducation={setEducation}
        setExperience={setExperience}
      />
      <EditorContainer
        personalInfo={personalInfo}
        setPersonalInfo={setPersonalInfo}
        education={education}
        setEducation={setEducation}
        educationForm={educationForm}
        setEducationForm={setEducationForm}
        experience={experience}
        setExperience={setExperience}
        experienceForm={experienceForm}
        setExperienceForm={setExperienceForm}
      />
      <Preview
        personalInfo={personalInfo}
        education={education}
        experience={experience}
      />
      <Footer />
    </div>
  );
};

export default App;
