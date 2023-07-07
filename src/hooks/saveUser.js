import axios from "axios";

const saveUser = ({ saveUser }) => {
  axios.post("http://localhost:3000/users", saveUser);
};

export default saveUser;
