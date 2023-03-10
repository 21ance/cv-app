import { useState } from "react";
import Header from "./components/Header";
import EditorContainer from "./components/editor/EditorContainer";
import Preview from "./components/preview/Preview";

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [desc, setDesc] = useState("");

  return (
    <div className="app">
      <Header />
      <EditorContainer
        setName={setName}
        setEmail={setEmail}
        setPhone={setPhone}
        setDesc={setDesc}
      />
      <Preview name={name} email={email} phone={phone} desc={desc} />
    </div>
  );
};

export default App;
