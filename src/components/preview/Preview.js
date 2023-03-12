const Preview = (props) => {
  const { personalInfo, education, experience } = props;
  console.log(personalInfo);
  console.log(education);
  console.log(experience);

  return (
    <div className="preview-cv">
      <div className="preview-header">
        <span className="preview-name">{personalInfo.name}</span>
        <span>{personalInfo.email}</span>
        <span>{personalInfo.phone}</span>
      </div>
      <div className="preview-section">
        <span className="preview-title">Profile</span>
        <p>{personalInfo.desc}</p>
      </div>
      <div className="preview-section">
        <span className="preview-title">Experience</span>
        {experience.map((exp, key) => {
          return (
            <div className="preview-experience">
              <span className="preview-exp-company">{exp.companyName}</span>
              <div className="preview-exp-leftside">
                <span>
                  {exp.startDate} - {exp.endDate}
                </span>
                <span>{exp.position}</span>
              </div>
              <p>{exp.description}</p>
            </div>
          );
        })}
      </div>
      <div className="preview-section">
        <span className="preview-title">Education</span>
        {education.map((edu, key) => {
          return (
            <div>
              {edu.schoolName}
              {edu.degree}
              {edu.startDate}
              {edu.endDate}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Preview;
