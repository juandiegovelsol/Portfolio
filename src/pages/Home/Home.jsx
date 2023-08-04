import { NavBar } from "../../components/NavBar";
import { Background } from "../../components/Background";

import "./home.scss";

const Home = () => {
  const text = {
    greet: "Hi, my name is",
    name: "Juan Diego Velasco.",
    subtitle: "I build things for the web.",
    description:
      "I am a mechatronic's engineer specialized in building (and occasionally designing) exceptional digital experiences. Currently i am focused in accessible, scalable and human centered products.",
  };
  return (
    <>
      <NavBar />
      <Background />
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
