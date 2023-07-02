import { Outlet } from "react-router-dom";
import Header from "../../shared/Header/Header";
import ToastBox from "../../components/Toast/ToastBox";

const Root = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <ToastBox></ToastBox>
    </div>
  );
};

export default Root;
