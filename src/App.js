import { useState } from "react";
import Header from "./components/Header";
import EditorContainer from "./components/editor/EditorContainer";
import Preview from "./components/preview/Preview";

const App = () => {
  // general info
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [desc, setDesc] = useState("");

  //school
  const [schoolName, setSchoolName] = useState("");
  const [degree, setDegree] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [present, setPresent] = useState(false);

  return (
    <div className="app">
      <Header />
      <EditorContainer
        setName={setName}
        setEmail={setEmail}
        setPhone={setPhone}
        setDesc={setDesc}
        setSchoolName={setSchoolName}
        setDegree={setDegree}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        setPresent={setPresent}
        present={present}
      />
      <Preview
        name={name}
        email={email}
        phone={phone}
        desc={desc}
        schoolName={schoolName}
        degree={degree}
        startDate={startDate}
        endDate={endDate}
        present={present}
      />
    </div>
  );
};

export default App;
