import useAllClasses from "../../../../hooks/useAllClasses";
import useTitle from "../../../../hooks/useTitle";
import FadingLoader from "../../../../shared/Loader/Loader";
import ClassTable from "./ClassTable/ClassTable";

const ManageClass = () => {
  useTitle("Manage Class");
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
      {/* You can open the modal using ID.showModal() method */}
      {/* <button className="btn" onClick={() => window.my_modal_3.showModal()}>
        open modal
      </button> */}
      {/* <dialog id="my_modal_3" className="modal">
        <form method="dialog" className="modal-box">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Press ESC key or click on ✕ button to close</p>
        </form>
      </dialog> */}
    </div>
  );
};

export default ManageClass;

// Class Image, Class name, Instructor name, Instructor email, Available seats, Price, Status(pending/approved/denied) 3 buttons( Approve, Deny and send feedback).
