import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import styles from "./Button.module.css";

const ButtonAwesome = ({ text, type }) => {
  return (
    <AwesomeButton className={styles.myButton} ripple={true} type={type}>
      {text ? text : "READ MORE"}
    </AwesomeButton>
  );
};

export default ButtonAwesome;
