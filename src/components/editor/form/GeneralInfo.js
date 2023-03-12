const GeneralInfo = (props) => {
  return (
    <div className="info">
      <input
        type="text"
        onChange={(e) => props.setName(e.target.value)}
        placeholder="Name"
      />
      <input
        type="email"
        onChange={(e) => props.setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="text"
        placeholder="Phone Number"
        onChange={(e) => props.setPhone(e.target.value)}
      />
      <textarea
        placeholder="Description"
        onChange={(e) => props.setDesc(e.target.value)}
      />
    </div>
  );
};

export default GeneralInfo;
