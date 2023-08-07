import { useSelector } from "react-redux";
import { selectHome } from "./homeSlice";
import { NavBar } from "../../components/NavBar";
import { Background } from "../../components/Background";
import { LanguageSelector } from "../../components/LanguageSelector";

import "./home.scss";

const Home = () => {
  const { text } = useSelector(selectHome);
  return (
    <>
      <NavBar />
      <Background />
      <LanguageSelector />
      <section className="home">
        <article className="home__wrapper">
          <p className="home__greet">{text.greet}</p>
          <h1 className="home__name">{text.name}</h1>
          <h2 className="home__subtitle">{text.subtitle}</h2>
          <p className="home__description">{text.description}</p>
        </article>
      </section>
    </>
  );
};

export default Home;
