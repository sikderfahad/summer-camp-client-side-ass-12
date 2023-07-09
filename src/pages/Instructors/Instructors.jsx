import useInstructors from "../../hooks/useInstructors";
import TeacherCard from "../../shared/TeacherCard/TeacherCard";
import Title from "../../shared/Title/Title";

const Instructors = () => {
  const [teachers] = useInstructors();
  console.log(teachers);
  return (
    <div className="max-w-screen-xl mx-auto mt-40">
      <div>
        <Title title={"our team"} subtitle={"Meet Our Teachers"}></Title>
      </div>
      <div className=" grid grid-cols-1 mt-20 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teachers?.map((item) => (
          <TeacherCard key={item._id} teacherPage={item}></TeacherCard>
        ))}
      </div>
    </div>
  );
};

export default Instructors;
