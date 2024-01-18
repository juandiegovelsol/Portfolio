import { useSelector } from "react-redux";
import { selectHome } from "../../pages/Home/homeSlice";
import whatsapp_logo from "../../assets/whatsapp-icon.svg";
import "./whatsapp.scss";

const Whatsapp = () => {
  const { whastapp_message } = useSelector(selectHome);
  return (
    <a
      className="whatsapp"
      href={`${whastapp_message}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        className="whatsapp__icon"
        src={whatsapp_logo}
        alt="whatsapp"
        loading="lazy"
      />
    </a>
  );
};

export default Whatsapp;
