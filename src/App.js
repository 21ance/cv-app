import { useState } from "react";
import Header from "./components/Header";
import EditorContainer from "./components/editor/EditorContainer";
import Preview from "./components/preview/Preview";

const App = () => {
  const [personalInfo, setPersonalInfo] = useState({
    name: "Hello Doge",
    email: "helloworld@doge.com",
    phone: "022-0222-241412",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut repudiandae cumque, facilis nihil, blanditiis numquam fuga fugiat veniam saepe mollitia aut voluptates magni eum autem consequuntur iste nobis officia enim?",
  });

  const [educationForm, setEducationForm] = useState({
    schoolName: "",
    degree: "",
    startDate: "",
    endDate: "",
    id: "",
  });

  const [education, setEducation] = useState([
    {
      schoolName: "High School",
      degree: "STEM",
      startDate: "2016-08-01",
      endDate: "2020-05-21",
      id: 0,
    },
    {
      schoolName: "College",
      degree: "Accounting",
      startDate: "2020-08",
      endDate: "2022-05",
      id: 1,
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
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. A delectus repudiandae quasi, necessitatibus libero incidunt dolor aut pariatur ipsa ut quia quibusdam iste corporis voluptates ducimus accusantium voluptatem? Placeat, sapiente.",
      startDate: "2023-01",
      endDate: "Present",
      id: 0,
    },
    {
      companyName: "Company A",
      position: "Web Developer",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. A delectus repudiandae quasi, necessitatibus libero incidunt dolor aut pariatur ipsa ut quia quibusdam iste corporis voluptates ducimus accusantium voluptatem? Placeat, sapiente.",
      startDate: "2023-01",
      endDate: "Present",
      id: 1,
    },
  ]);

  return (
    <div className="app">
      <Header />
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
    </div>
  );
};

export default App;
