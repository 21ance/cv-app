const GeneralInfo = (props) => {
  return (
    <div className="info">
      <input
        type="text"
        onChange={(e) =>
          props.setPersonalInfo({ ...props.personalInfo, name: e.target.value })
        }
        placeholder="Name"
      />
      <input
        type="email"
        onChange={(e) =>
          props.setPersonalInfo({
            ...props.personalInfo,
            email: e.target.value,
          })
        }
        placeholder="Email"
      />
      <input
        type="text"
        placeholder="Phone Number"
        onChange={(e) =>
          props.setPersonalInfo({
            ...props.personalInfo,
            phone: e.target.value,
          })
        }
      />
      <textarea
        placeholder="Description"
        onChange={(e) =>
          props.setPersonalInfo({ ...props.personalInfo, desc: e.target.value })
        }
      />
    </div>
  );
};

export default GeneralInfo;
