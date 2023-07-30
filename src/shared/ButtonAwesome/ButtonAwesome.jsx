import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import styles from "./Button.module.css";
import { useNavigate } from "react-router-dom";

const ButtonAwesome = ({ text, type, link }) => {
  const navigate = useNavigate();
  return (
    <AwesomeButton
      onPress={() => navigate(link)}
      className={styles.myButton}
      ripple={true}
      type={type}
    >
      {text ? text : "READ MORE"}
    </AwesomeButton>
  );
};

export default ButtonAwesome;
