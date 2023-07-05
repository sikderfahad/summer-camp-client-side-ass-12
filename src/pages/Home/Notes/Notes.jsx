import ButtonAwesome from "../../../shared/ButtonAwesome/ButtonAwesome";

const Notes = () => {
  return (
    <div
      className="p-[100px] max-w-screen-xl mx-auto rounded-lg bg-center bg-no-repeat bg-[#efcf4f]"
      style={{ backgroundImage: `url('https://i.ibb.co/mRb70NJ/notes.png')` }}
    >
      <div className="text-center font-extrabold flex flex-col gap-5 w-9/12 mx-auto">
        <h3 className="text-[#c25934] text-2xl  capitalize">opening offer</h3>
        <h1
          className="text-white text-7xl  uppercase"
          style={{ textShadow: "6px 8px 0px rgba(0,0,0,.05)" }}
        >
          get a free lesson
        </h1>
        <p style={{ lineHeight: "1.5" }} className="text-2xl  text-[#0c4b65]">
          Bring your children to a trial lesson to find out how much they enjoy
          doing music or singing
        </p>
        <div className="flex items-center justify-center font-extrabold gap-8 mt-8">
          {/* <button className="bg-[#0c4b65] rounded-lg  py-5 px-12 text-lg uppercase text-white hover:text-[#0c4b65] duration-200 hover:bg-white">
            get started
          </button> */}
          {/* <button className="bg-[#c25934] rounded-lg  py-5 px-12 text-lg uppercase text-white hover:text-[#0c4b65] duration-200 hover:bg-white">
            choose class
          </button> */}
          <ButtonAwesome text={"GET STARTED"}></ButtonAwesome>
          <ButtonAwesome text={"CHOOSE CLASS"} type={"danger"}></ButtonAwesome>
        </div>
      </div>
    </div>
  );
};

export default Notes;
