import img from "../../assets/img/class/teacher5.png";
const TeacherCard = () => {
  return (
    <div>
      <div className="card max-w-sm border shadow">
        <div className=" avatar w-[250px] mx-auto h-[250px] text-center rounded-full">
          <img
            src={img}
            className=" border hover:border-8 hover:p-[5px] duration-200 rounded-full border-yellow-400  p-3"
            alt=""
          />
        </div>
        <div className="card-body text-center">
          <h1 className="text-[#0c4b65] text-2xl font-extrabold">
            Courtney lee
          </h1>
          <p className="text-[#c25934] font-bold">Violin teacher</p>
        </div>
      </div>
    </div>
  );
};

export default TeacherCard;
