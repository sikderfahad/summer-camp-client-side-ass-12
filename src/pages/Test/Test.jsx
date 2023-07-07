import useUserType from "../../hooks/useUserType";

const Test = () => {
  const [userType] = useUserType();
  console.log(userType);
  return <div></div>;
};

export default Test;
