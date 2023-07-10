import useAllClasses from "../../../../hooks/useAllClasses";
import FadingLoader from "../../../../shared/Loader/Loader";
import ClassTable from "./ClassTable/ClassTable";

const ManageClass = () => {
  const [allClass, isLoading, refetch] = useAllClasses();
  return (
    <div className="mt-20">
      <h1 className="text-3xl font-bold uppercase">
        Total classes: →{" "}
        <span className="text-green-500">{allClass?.length}</span>
      </h1>
      <div className="mt-8">
        {!isLoading ? (
          <ClassTable allClass={allClass} refetch={refetch}></ClassTable>
        ) : (
          <div>
            <FadingLoader></FadingLoader>
            <FadingLoader></FadingLoader>
            <FadingLoader></FadingLoader>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageClass;

// Class Image, Class name, Instructor name, Instructor email, Available seats, Price, Status(pending/approved/denied) 3 buttons( Approve, Deny and send feedback).
