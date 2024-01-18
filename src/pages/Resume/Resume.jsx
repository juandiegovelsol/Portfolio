import { useSelector } from "react-redux";
import { selectHome } from "../Home/homeSlice";
import { NavBar } from "../../components/NavBar";
import { Background } from "../../components/Background";
import { LanguageSelector } from "../../components/LanguageSelector";
import { Whatsapp } from "../../components/Whatsapp";

import "./resume.scss";

const Resume = () => {
  const { resume } = useSelector(selectHome);
  return (
    <>
      <NavBar />
      <Background />
      <LanguageSelector />
      <Whatsapp />
      <section className="resume">
        <div className="resume__wrapper">
          <aside className="resume__left">
            <h2 className="resume__name">{resume.name}</h2>
            <p className="resume__profesion">{resume.profesion}</p>
            {resume.details.length &&
              resume.details.map(({ title, info }, index) => (
                <span key={`${title},${index}`} className="resume__details">
                  <h3 className="resume__details-title">{title}</h3>
                  {info.length &&
                    info.map(({ subt, info }) => (
                      <div
                        key={`${subt}+${info}`}
                        className="resume__details-info"
                      >
                        {subt ? (
                          <>
                            <h4 className="resume__details-subt">{subt}</h4>
                            <p className="resume__details-text">{info}</p>
                          </>
                        ) : (
                          <>
                            <p className="resume__details-text">{info}</p>
                          </>
                        )}
                      </div>
                    ))}
                </span>
              ))}
          </aside>
          <aside className="resume__rigth">
            <p className="resume__rigth-text">{resume.paragraph1}</p>
            <p className="resume__rigth-text">{resume.paragraph2}</p>
            <p className="resume__rigth-text">{resume.paragraph3}</p>
            {resume.rigthdetails.length &&
              resume.rigthdetails.map(({ title, info }, index) => (
                <span key={`${title}*${index}`}>
                  <h3 className="resume__details-title resume__rigth-title">
                    {title}
                  </h3>
                  {info.length &&
                    info.map(({ dates, position, company, items }) => (
                      <div key={`${dates}`} className="resume__rigth-body">
                        <div className="resume__rigth-date">{dates}</div>
                        <div className="resume__rigth-rigth">
                          <h3 className="resume__rigth-position">{position}</h3>
                          <p className="resume__rigth-company">{company}</p>
                          {items.length ? (
                            <ul className="resume__rigth-items">
                              {items.map((item) => (
                                <li key={item} className="resume__rigth-list">
                                  {item}
                                </li>
                              ))}
                            </ul>
                          ) : (
                            <></>
                          )}
                        </div>
                      </div>
                    ))}
                </span>
              ))}
          </aside>
        </div>
        <div className="resume__blank">
          <></>
        </div>
      </section>
    </>
  );
};

export default Resume;
