import useAllClasses from "../../hooks/useAllClasses";

const Classes = () => {
  const [allClass] = useAllClasses();
  console.log(allClass);
  return (
    <div className="flex items-center justify-center mt-32">
      <h1 className="text-green-500 text-2xl text-center">
        Classes page is comming soon
      </h1>
    </div>
  );
};

export default Classes;
