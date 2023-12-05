import "./Header.css";
import Furkan from "./furkan-logo.png";

const Header = () => {
  return (
    <header>
      <img src={Furkan} alt="Furkan" />

      <h1>Lesson Reminder</h1>
    </header>
  );
};

export default Header;
