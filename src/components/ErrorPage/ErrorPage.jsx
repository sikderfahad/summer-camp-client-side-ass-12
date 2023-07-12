import { useNavigate } from "react-router-dom";
import ButtonAwesome from "../../shared/ButtonAwesome/ButtonAwesome";
import useTitle from "../../hooks/useTitle";
const ErrorPage = () => {
  useTitle("4O4");
  const navigate = useNavigate();

  return (
    <div className="w-full max-h-full relative">
      <img
        src="https://i.ibb.co/0YgTh3m/404-illustration.webp"
        className="w-full"
        alt=""
      />
      <span
        onClick={() => navigate("/")}
        className="absolute top-10 left-[45%]"
      >
        <ButtonAwesome
          jump={navigate("/")}
          text={"BACK TO HOME"}
        ></ButtonAwesome>
      </span>
    </div>
  );
};

export default ErrorPage;
