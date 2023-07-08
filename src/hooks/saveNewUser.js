import axios from "axios";
import { baseUrl } from "../router/router";

const saveNewUser = (email, name, photo) => {
  const newUser = {
    displayName: name,
    email,
    photoURL: photo,
    role: "student",
  };
  console.log(newUser);
  axios.post(`${baseUrl}/users`, newUser);
};

export default saveNewUser;
