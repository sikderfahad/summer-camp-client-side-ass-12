import usePopularItem from "../../../hooks/usePopularItem";
import TeacherCard from "../../../shared/TeacherCard/TeacherCard";
import Title from "../../../shared/Title/Title";

const PopularTeacher = () => {
  const popularTeachers = usePopularItem("popular-teachers");
  // console.log("teacher data ", popularTeachers);
  return (
    <div>
      <div>
        <Title title={"our team"} subtitle={"Meet Our Teachers"}></Title>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-8 lg:grid-cols-4 gap-8">
        {popularTeachers.map((item) => (
          <TeacherCard key={item._id} item={item}></TeacherCard>
        ))}
      </div>
    </div>
  );
};

export default PopularTeacher;
