import { useSelector } from "react-redux";
import { selectHome } from "../Home/homeSlice";
import { NavBar } from "../../components/NavBar";
import { Background } from "../../components/Background";
import { LanguageSelector } from "../../components/LanguageSelector";

import "./curriculum.scss";

const Curriculum = () => {
  const { content } = useSelector(selectHome);

  return (
    <>
      <NavBar />
      <Background />
      <LanguageSelector />
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
