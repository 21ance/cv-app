import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import EditorContainer from "./components/editor/EditorContainer";
import Preview from "./components/preview/Preview";

const App = () => {
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    email: "",
    phone: "",
    desc: "",
    // name: "Hello Doge",
    // email: "helloworld@doge.com",
    // phone: "022-0222-241412",
    // desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut repudiandae cumque, facilis nihil, blanditiis numquam fuga fugiat veniam saepe mollitia aut voluptates magni eum autem consequuntur iste nobis officia enim?",
  });

  const [educationForm, setEducationForm] = useState({
    schoolName: "",
    schoolLocation: "",
    degree: "",
    startDate: "",
    endDate: "",
    id: "",
  });

  const [education, setEducation] = useState([
    // {
    //   schoolName: "High School",
    //   schoolLocation: "Some Rando Location",
    //   degree: "STEM",
    //   startDate: "2016-08-01",
    //   endDate: "2020-05-21",
    //   id: 0,
    // },
    // {
    //   schoolName: "College",
    //   schoolLocation: "Some Rando Location",
    //   degree: "Accounting",
    //   startDate: "2020-08",
    //   endDate: "2022-05",
    //   id: 1,
    // },
  ]);

  const [experienceForm, setExperienceForm] = useState({
    companyName: "",
    position: "",
    description: "",
    startDate: "",
    endDate: "",
    id: "",
  });

  const [experience, setExperience] = useState([
    // {
    //   companyName: "Company A",
    //   position: "Web Developer",
    //   description:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. A delectus repudiandae quasi, necessitatibus libero incidunt dolor aut pariatur ipsa ut quia quibusdam iste corporis voluptates ducimus accusantium voluptatem? Placeat, sapiente.",
    //   startDate: "June 2022",
    //   endDate: "Present",
    //   id: 0,
    // },
    // {
    //   companyName: "Company A",
    //   position: "Web Developer",
    //   description:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. A delectus repudiandae quasi, necessitatibus libero incidunt dolor aut pariatur ipsa ut quia quibusdam iste corporis voluptates ducimus accusantium voluptatem? Placeat, sapiente.",
    //   startDate: "August 2017",
    //   endDate: "July 2021",
    //   id: 1,
    // },
    // {
    //   companyName: "Company A",
    //   position: "Web Developer",
    //   description:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. A delectus repudiandae quasi, necessitatibus libero incidunt dolor aut pariatur ipsa ut quia quibusdam iste corporis voluptates ducimus accusantium voluptatem? Placeat, sapiente.",
    //   startDate: "August 2017",
    //   endDate: "July 2021",
    //   id: 2,
    // },
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
      <Footer />
    </div>
  );
};

export default App;
