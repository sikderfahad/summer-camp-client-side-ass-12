import Title from "../../../../shared/Title/Title";
import Card from "../../../../shared/Card/Card";
import Skeleton from "../../../../shared/Skeleton/Skeleton";
import useEnrolledClass from "../../../../hooks/useEnrolledClass";

const EnrolledClass = () => {
  const [enrolledClass, enrolledClassLoading] = useEnrolledClass();

  console.log(enrolledClass);

  return (
    <div>
      <Title
        title={"enrolled class"}
        subtitle={"Your enrolled classes"}
        noDesc={true}
      ></Title>

      <div>
        {!enrolledClassLoading ? (
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {enrolledClass.map((item) => (
              <Card key={item._id} item={item} paidClass={true}></Card>
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
    </div>
  );
};

export default EnrolledClass;
