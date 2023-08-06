import { NavBar } from "../../components/NavBar";
import { Background } from "../../components/Background";

import "./curriculum.scss";

const Curriculum = () => {
  const content = {
    name: "JUAN DIEGO VELASCO SOLANO",
    position: "FULL STACK DEVELOPER",
    bodyleft: [
      {
        title: "DETAILS",
        islink: false,
        list: ["Cali, Colombia", "+57 3175108881", "juandiegovelsol@gmail.com"],
        links: [],
      },
      {
        title: "LINKS",
        islink: true,
        list: [
          "E-commerce for desktop",
          "Restaurant for mobile",
          "Doctor app (building) responsive",
          "Github",
          "Linked in",
        ],
        links: [
          "https://golden-khapse-972f84.netlify.app",
          "https://sprightly-chebakia-19927e.netlify.app",
          "https://juandiegovelasco.netlify.app",
          "https://github.com/juandiegovelsol",
          "https://www.linkedin.com/in/juan-diego-velasco-solano-713148122/",
        ],
      },
      {
        title: "SKILLS",
        islink: false,
        list: [
          "JavaScript",
          "React.Js",
          "Redux.Js",
          "Node.Js",
          "Express.Js",
          "SASS/SCSS",
          "MySQL",
          "Prisma",
          "MongoDB",
          "Mongoose",
          "Github",
          "Gitflow",
          "SCRUM",
        ],
        links: [],
      },
    ],
    bodyrigth: [
      {
        title: "PROFILE",
        info: [
          {
            subtitle1: "",
            subtitle2: "",
            list: [
              "Mechatronics engineer with a year of experience in full-stack web development, with a keen interest in front-end and back-end technologies for creating interactive and scalable web applications.",
              "Passionate about web development, dedicated to continuous learning, and staying up to date with the latest technologies.",
              "Distinguished by motivation, teamwork, and ability to solve complex problems in collaborative projects.",
              "Committed to leveraging their experience and skills in web development to contribute to the success of the company and achieve high-quality results.",
            ],
          },
        ],
      },
      {
        title: "EMPLOYMENT HISTORY",
        info: [
          {
            subtitle1:
              "Full Stack Developer at Make It Real, Medellin - Remote",
            subtitle2: "September 2022 — Present",
            list: [
              "As a full-stack web developer, I successfully led the development of a high-end vehicle e-commerce platform. I utilized technologies such as React, Redux, Sass, Node.js, Express, Prisma, MySQL, and JSON Web Tokens to implement functionalities including user registration, profile management, vehicle model and color selection, and order management. Additionally, I integrated ePayco's payment gateway to facilitate purchase transactions and automated email notifications for seamless communication throughout the buying process.",
              "My last project was a mobile restaurant website. Utilizing React, Redux, Sass, Node.js, Express, and MongoDB to create an interactive web application. The objective was to implement features such as a dynamic menu, online table reservation, virtual photo gallery, and real-time order management for restaurant staff. Additionally, best quality code practices were applied to ensure an appealing and optimized experience across mobile devices.",
            ],
          },
          {
            subtitle1: "Engineer at Integral S.A, Medellín - Remote",
            subtitle2: "June 2020 — Present",
            list: [
              "I demonstrated a strong work ethic, professionalism, and the ability to work under pressure.",
              "I utilized strong decision-making and problem-solving skills.",
              "I was involved in significant projects for Colombia such as WWTP Canoas, HPS Guatapé, and OSMOC at Cerromatoso S.A.",
              "My communication skills allowed me to establish reliable interpersonal relationships with my colleagues.",
            ],
          },
        ],
      },
      {
        title: "EDUCATION",
        info: [
          {
            subtitle1: "Full Stack Developer, Make It Real, Medellin - Remote",
            subtitle2: "September 2022 — June 2023",
            list: [
              "During my participation in the full-stack developer program at Make It Real, I demonstrated outstanding dedication, perseverance, and a strong motivation to learn. I was recognized for my focus on developing high-quality code, always following industry best practices.",
              "Throughout the program, I gained solid knowledge in key technologies such as HTML, CSS, JavaScript, React, Node.js, Express, and databases. Through practical and challenging projects, I was able to apply this knowledge and develop skills in creating interactive and scalable web applications.",
              "My commitment to excellence was reflected in meticulous attention to detail, a constant pursuit of improvement, and a willingness to take on new challenges. I worked collaboratively in teams, showcasing effective communication skills and the ability to adapt to dynamic environments.",
            ],
          },
          {
            subtitle1:
              "Professional Trader, Pro Trading Skills, New York - Remoto",
            subtitle2: "January 2021 — December 2021",
            list: [],
          },
          {
            subtitle1: "Mechatronics Engineer, Universidad EIA, Medellín",
            subtitle2: "July 2014 — July 2021",
            list: [
              "As a mechatronics engineer, I acquired a strong background in object-oriented programming and the Internet of Things (IoT).",
              "During my studies in IoT, I learned the fundamentals of web development and how to integrate it with electronic devices. This allowed me to understand how to create interactive web applications connected to various devices, which is crucial in the field of IoT.",
            ],
          },
        ],
      },
    ],
  };

  return (
    <>
      <NavBar />
      <Background />
      <section className="cv">
        <div className="cv__wrapper">
          <article className="cv__header">
            <h2 className="cv__title">{content.name}</h2>
            <p className="cv__text">{content.position}</p>
          </article>
          <article className="cv__body">
            <aside className="cv__left">
              {content.bodyleft.length &&
                content.bodyleft.map(({ title, islink, list, links }) => (
                  <span key={title} className="cv__details">
                    <h3 className="cv__details-title">{title}</h3>
                    {!islink &&
                      list.map((item) => (
                        <span key={item} className="cv__text cv__text-list">
                          {item}
                        </span>
                      ))}
                    {islink &&
                      list.map((item, index) => (
                        <span key={item}>
                          <a
                            key={item}
                            href={links[index]}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cv__text cv__text-list"
                          >
                            {item}
                          </a>
                        </span>
                      ))}
                  </span>
                ))}
            </aside>
            <aside className="cv__rigth">
              {content.bodyrigth.length &&
                content.bodyrigth.map(({ title, info }) => (
                  <span key={title} className="cv__work-details">
                    <h3 className="cv__details-title">{title}</h3>
                    {info.length &&
                      info.map(({ subtitle1, subtitle2, list }) => (
                        <span key={subtitle1} className="cv__details-content">
                          <h4 className="cv__details-subtitle">{subtitle1}</h4>
                          <h5 className="cv__details-date">{subtitle2}</h5>
                          {console.log(list.length)}
                          {list.length ? (
                            <ul className="cv__details-list">
                              {list.map((item) => (
                                <li key={item} className="cv__details-item">
                                  {item}
                                </li>
                              ))}
                            </ul>
                          ) : (
                            <></>
                          )}
                        </span>
                      ))}
                  </span>
                ))}
            </aside>
          </article>
        </div>
      </section>
    </>
  );
};

export default Curriculum;
