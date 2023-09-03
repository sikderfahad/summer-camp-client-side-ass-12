import { Outlet } from "react-router-dom";
import Header from "../../shared/Header/Header";
import ToastBox from "../../components/Toast/ToastBox";
import Footer from "../../shared/Footer/Footer";
import { useEffect, useState } from "react";
import { PageLoading } from "../../components/Spinner/Spinner";

const Root = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);
  return (
    <div className="overflow-x-hidden">
      {isLoading ? (
        <PageLoading />
      ) : (
        <div>
          <Header></Header>
          <Outlet></Outlet>
          <ToastBox></ToastBox>
          <Footer></Footer>
        </div>
      )}
    </div>
  );
};

export default Root;
