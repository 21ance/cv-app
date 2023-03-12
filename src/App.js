import { useState } from "react";
import Header from "./components/Header";
import EditorContainer from "./components/editor/EditorContainer";
import Preview from "./components/preview/Preview";

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [desc, setDesc] = useState("");
  // sample template
  // to remove
  const [educationForm, setEducationForm] = useState({
    schoolName: "",
    degree: "",
    startDate: "",
    endDate: "",
    id: "",
  });

  const [education, setEducation] = useState([
    // {
    //   schoolName: "High School",
    //   degree: "STEM",
    //   startDate: "2016-08-01",
    //   endDate: "2020-05-21",
    //   id: 0,
    // },
    {
      schoolName: "College",
      degree: "Accounting",
      startDate: "2020-08",
      endDate: "2022-05",
      id: 0,
    },
  ]);

  //
  const [experienceForm, setExperienceForm] = useState({
    companyName: "",
    position: "",
    description: "",
    startDate: "",
    endDate: "",
    id: "",
  });

  const [experience, setExperience] = useState([
    {
      companyName: "Company A",
      position: "Web Developer",
      description: "I do stuff...",
      startDate: "2023-01",
      endDate: "Present",
      id: 0,
    },
  ]);

  return (
    <div className="app">
      <Header />
      <EditorContainer
        setName={setName}
        setEmail={setEmail}
        setPhone={setPhone}
        setDesc={setDesc}
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
        name={name}
        email={email}
        phone={phone}
        desc={desc}
        education={education}
      />
    </div>
  );
};

export default App;
