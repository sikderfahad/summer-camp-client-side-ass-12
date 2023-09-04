import useInstructors from "../../hooks/useInstructors";
import useTitle from "../../hooks/useTitle";
import Skeleton from "../../shared/Skeleton/Skeleton";
import TeacherCard from "../../shared/TeacherCard/TeacherCard";
import Title from "../../shared/Title/Title";

const Instructors = () => {
  useTitle("Instructors");
  const [teachers, isLoading] = useInstructors();
  // console.log(teachers);
  return (
    <div className="mt-40">
      <div>
        <Title
          title={"our team"}
          noDesc={true}
          subtitle={"Meet Our Teachers"}
        ></Title>
      </div>
      {!isLoading ? (
        <div className="w-11/12 max-w-screen-xl mx-auto grid grid-cols-1 mt-20 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teachers?.map((item) => (
            <TeacherCard key={item._id} teacherPage={item}></TeacherCard>
          ))}
        </div>
      ) : (
        <div className=" grid grid-cols-1 mt-20 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((idx) => (
            <Skeleton key={idx} halfCard={true}></Skeleton>
          ))}
        </div>
      )}
    </div>
  );
};

export default Instructors;
