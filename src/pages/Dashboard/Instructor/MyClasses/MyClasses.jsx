import useAddClasses from "../../../../hooks/useAddClasses";
import useTitle from "../../../../hooks/useTitle";
import Card from "../../../../shared/Card/Card";
import Skeleton from "../../../../shared/Skeleton/Skeleton";
import Title from "../../../../shared/Title/Title";

const MyClasses = () => {
  useTitle("Instructor Class");
  const [myClasses, isLoading] = useAddClasses();
  console.log(myClasses);
  return (
    <div>
      <div className="">
        <Title
          title={"my classes"}
          subtitle={"My added Classes"}
          noDesc={true}
        ></Title>
      </div>
      {!isLoading ? (
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {myClasses?.map((item) => (
            <Card key={item._id} item={item} teacher={true}></Card>
          ))}
        </div>
      ) : (
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((item, idx) => (
            <Skeleton key={idx}></Skeleton>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyClasses;
