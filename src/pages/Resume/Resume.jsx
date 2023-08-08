import { useSelector } from "react-redux";
import { selectHome } from "../Home/homeSlice";
import { NavBar } from "../../components/NavBar";
import { Background } from "../../components/Background";
import { LanguageSelector } from "../../components/LanguageSelector";

import "./resume.scss";

const Resume = () => {
  const { resume } = useSelector(selectHome);
  return (
    <>
      <NavBar />
      <Background />
      <LanguageSelector />
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
            <p>{resume.paragraph1}</p>
            <p>{resume.paragraph2}</p>
            <p>{resume.paragraph3}</p>
          </aside>
        </div>
      </section>
    </>
  );
};

export default Resume;
