import { useSelector } from "react-redux";
import { selectHome } from "../Home/homeSlice";
import { NavBar } from "../../components/NavBar";
import { Background } from "../../components/Background";
import { LanguageSelector } from "../../components/LanguageSelector";
import { Whatsapp } from "../../components/Whatsapp";

import "./contact.scss";

const Contact = () => {
  const { contact } = useSelector(selectHome);
  return (
    <>
      <NavBar />
      <Background />
      <LanguageSelector />
      <Whatsapp />
      <section className="contact">
        <div className="contact__wrapper">
          {contact.length &&
            contact.map(({ title, content }, index) => (
              <div className="contact__section" key={`section${index}`}>
                <h2 className="contact__title">{title}</h2>
                <article className="contact__cards">
                  {content.length &&
                    content.map(({ img, title, description, link, href }) => (
                      <span key={img} className="contact__card-wrapper">
                        <aside className="contact__card-top">
                          {/* <div className="contact__image"> */}
                          <img
                            src={img}
                            className="contact__card-img"
                            alt="profile"
                          />
                          {/* </div> */}
                        </aside>
                        <aside className="contact__card-bottom">
                          <h3 className="contact__card-title">{title}</h3>
                          <p className="contact__card-text">{description}</p>
                          <a
                            href={href}
                            className="contact__card-link"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {link}
                          </a>
                        </aside>
                      </span>
                    ))}
                </article>
              </div>
            ))}
        </div>
      </section>
    </>
  );
};

export default Contact;
