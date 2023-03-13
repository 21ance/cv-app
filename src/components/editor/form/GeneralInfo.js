const GeneralInfo = (props) => {
  const { personalInfo, setPersonalInfo } = props;
  return (
    <div className="info">
      <input
        type="text"
        onChange={(e) =>
          setPersonalInfo({ ...personalInfo, name: e.target.value })
        }
        value={personalInfo.name}
        placeholder="Name"
      />
      <input
        type="email"
        onChange={(e) =>
          setPersonalInfo({
            ...personalInfo,
            email: e.target.value,
          })
        }
        value={personalInfo.email}
        placeholder="Email"
      />
      <input
        type="text"
        onChange={(e) =>
          setPersonalInfo({
            ...personalInfo,
            phone: e.target.value,
          })
        }
        value={personalInfo.phone}
        placeholder="Phone Number"
      />
      <textarea
        onChange={(e) =>
          setPersonalInfo({ ...personalInfo, desc: e.target.value })
        }
        value={personalInfo.desc}
        placeholder="Description"
        rows="4"
      />
    </div>
  );
};

export default GeneralInfo;
