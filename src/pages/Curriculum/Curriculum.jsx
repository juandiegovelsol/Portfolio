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
            <aside className="cv__rigth"></aside>
          </article>
        </div>
      </section>
    </>
  );
};

export default Curriculum;

{
  /* <span key={title} className="cv__details">
                      <h3>{title}</h3>
                      <ul>
                        {list.length && list.map((item,index)=>(
                          <li></li>
                        )}
                      </ul>
                    </span> */
}
