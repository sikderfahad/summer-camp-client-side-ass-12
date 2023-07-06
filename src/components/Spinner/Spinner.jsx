import { BallTriangle } from "react-loader-spinner";

const Spinner = ({ hFull, wFull }) => {
  return (
    <div
      className={` flex spinner items-center mx-auto my-6 ${
        hFull && "h-screen transform translate-x-[45%]"
      } ${wFull && "w-full"}`}
    >
      <BallTriangle
        height={150}
        width={150}
        radius={5}
        color="#2ebff0"
        ariaLabel="ball-triangle-loading"
        wrapperClass={{}}
        wrapperStyle=""
        visible={true}
      />
    </div>
  );
};

export default Spinner;
