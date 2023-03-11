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
      startDate: "2020-08-05",
      endDate: "2020-05-21",
      id: 1,
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
