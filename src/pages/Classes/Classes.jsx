import useAllClasses from "../../hooks/useAllClasses";
import useEnrolledClass from "../../hooks/useEnrolledClass";
import useTitle from "../../hooks/useTitle";
import Card from "../../shared/Card/Card";
import Skeleton from "../../shared/Skeleton/Skeleton";
import Title from "../../shared/Title/Title";

const Classes = () => {
  useTitle("Classes");
  const [allClass, isLoading] = useAllClasses();
  const [enrolledClass] = useEnrolledClass();

  // console.log(allClass);
  return (
    <div className="max-w-screen-xl mx-auto mt-40">
      <div>
        <div className="">
          <Title
            title={"our classes"}
            noDesc={true}
            subtitle={"Choose your favourite"}
          ></Title>
        </div>
        {!isLoading ? (
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allClass?.map((item) => (
              <div key={item._id}>
                {item?.status === "approved" && (
                  <Card
                    item={item}
                    classPage={true}
                    enrolledClass={enrolledClass}
                  ></Card>
                )}
              </div>
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

export default Classes;
