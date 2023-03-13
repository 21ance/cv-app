const Preview = (props) => {
  const { personalInfo, education, experience } = props;

  return (
    <div className="preview-cv">
      <div className="preview-header">
        <span className="preview-name">{personalInfo.name}</span>
        <span>{personalInfo.email}</span>
        <span>{personalInfo.phone}</span>
      </div>
      {personalInfo.desc !== "" && (
        <div className="preview-section">
          <span className="preview-title">Profile</span>
          <p>{personalInfo.desc}</p>
        </div>
      )}
      {experience.length !== 0 && (
        <div className="preview-section">
          <span className="preview-title">Experience</span>
          {experience
            .map((exp, key) => {
              return (
                <div className="preview-experience" key={exp.id}>
                  <span className="preview-exp-highlight">{exp.position}</span>
                  <span>{exp.companyName}</span>
                  <span className="preview-date">
                    <span>{exp.startDate} - </span>
                    <span>{exp.endDate}</span>
                  </span>
                  <p>{exp.description}</p>
                </div>
              );
            })
            .reverse()}
        </div>
      )}
      {education.length !== 0 && (
        <div className="preview-section">
          <span className="preview-title">Education</span>
          {education
            .map((edu, key) => {
              return (
                <div className="preview-experience" key={edu.id}>
                  {edu.schoolLocation === "" ? (
                    <span className="preview-exp-highlight">
                      {edu.schoolName}
                    </span>
                  ) : (
                    <span className="preview-exp-highlight">
                      {edu.schoolName}, {edu.schoolLocation}
                    </span>
                  )}
                  <span>{edu.degree}</span>
                  <span className="preview-date">
                    <span>{edu.startDate} - </span>
                    <span>{edu.endDate}</span>
                  </span>
                  <p>{edu.description}</p>
                </div>
              );
            })
            .reverse()}
        </div>
      )}
    </div>
  );
};

export default Preview;
