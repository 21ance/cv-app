const Header = (props) => {
  const { setPersonalInfo, setEducation, setExperience } = props;
  function handleDemo() {
    setPersonalInfo({
      name: "My Name",
      email: "myname@name.com",
      phone: "01-2345-6789",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nemo consequatur soluta enim hic id, eius neque similique, quidem nihil odit tenetur cupiditate explicabo amet voluptas beatae eaque pariatur expedita!" +
        "Aut nostrum ad eum vel placeat minima, est doloremque assumenda. Repellendus non animi libero? Itaque veniam tempore totam quos nam eius, nobis dolorum, architecto, veritatis quidem dignissimos explicabo sit voluptatibus!",
    });
    setEducation([
      {
        schoolName: "Vivamus pretium facilisis",
        schoolLocation: "Lorem",
        degree: "Highschool",
        startDate: "August 2010",
        endDate: "May 2014",
        id: 1,
      },
      {
        schoolName: "Curabitur elementum magna odio",
        schoolLocation: "",
        degree: "College Degree",
        startDate: "August 2014",
        endDate: "June 2018",
        id: 0,
      },
    ]);

    setExperience([
      {
        companyName: "Company A",
        position: "Jr. Developer",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. A delectus repudiandae quasi, necessitatibus libero incidunt dolor aut pariatur ipsa ut quia quibusdam iste corporis voluptates ducimus accusantium voluptatem? Placeat, sapiente.",
        startDate: "October 2018",
        endDate: "October 2019",
        id: 2,
      },
      {
        companyName: "Company B",
        position: "Software Engineer",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. A delectus repudiandae quasi, necessitatibus libero incidunt dolor aut pariatur ipsa ut quia quibusdam iste corporis voluptates ducimus accusantium voluptatem? Placeat, sapiente.",
        startDate: "November 2019",
        endDate: "December 2022",
        id: 1,
      },
      {
        companyName: "Company C",
        position: "Web Developer",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. A delectus repudiandae quasi, necessitatibus libero incidunt dolor aut pariatur ipsa ut quia quibusdam iste corporis voluptates ducimus accusantium voluptatem? Placeat, sapiente.",
        startDate: "January 2023",
        endDate: "Present",
        id: 0,
      },
    ]);
  }

  function handleClear() {
    setPersonalInfo({
      name: "",
      email: "",
      phone: "",
      desc: "",
    });
    setEducation([]);
    setExperience([]);
  }

  return (
    <header>
      <span>Curriculum Vitae</span>
      <div className="demo">
        <button onClick={handleDemo}>Demo</button>
        <button onClick={handleClear}>Clear</button>
      </div>
    </header>
  );
};

export default Header;
