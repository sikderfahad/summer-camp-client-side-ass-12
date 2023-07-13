import useAddClasses from "../../../../hooks/useAddClasses";
import useTitle from "../../../../hooks/useTitle";
import Card from "../../../../shared/Card/Card";
import Skeleton from "../../../../shared/Skeleton/Skeleton";
import Title from "../../../../shared/Title/Title";
import ClassForm from "../../../../shared/ClassForm/ClassForm";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { ToastMsgSuc } from "../../../../components/Toast/ToastMsg";
import axios from "axios";
import { baseUrl } from "../../../../router/router";
import Swal from "sweetalert2";

const MyClasses = () => {
  useTitle("Instructor Class");
  const [myClasses, isLoading, refetch] = useAddClasses();
  const [feedback, setFeedback] = useState("");

  const [classInfo, setClassInfo] = useState("");

  const showFeedbackModal = (feedback) => {
    window.show_feedback_modal.showModal();
    setFeedback(feedback);
  };

  const showClassUpdateModal = (item) => {
    window.show_class_update_modal.showModal();
    setClassInfo(item);
  };

  const {
    register,
    handleSubmit,
    // reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, event) => {
    event.preventDefault();
    // console.log(data);

    const { image, name, availableSeats, price } = data;
    if (image != classInfo.image) {
      ToastMsgSuc("You changes class image");
    }
    if (name != classInfo.name) {
      ToastMsgSuc("You changes class name");
    }
    if (availableSeats != classInfo.availableSeats) {
      ToastMsgSuc("You changes class available seats");
    }
    if (price != classInfo.price) {
      ToastMsgSuc("You changes class booking price");
    }

    const updateData = {
      image,
      name,
      availableSeats: parseInt(availableSeats),
      price: parseInt(price),
    };

    axios
      .patch(`${baseUrl}/update-class/${classInfo?._id}`, updateData)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Class feature updated! 👍",
            showConfirmButton: false,
            timer: 3000,
          });
          refetch();
        }
      });

    // console.log(updateData);
  };

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
            <Card
              key={item._id}
              item={item}
              teacher={true}
              showFeedbackModal={showFeedbackModal}
              showClassUpdateModal={showClassUpdateModal}
            ></Card>
          ))}
        </div>
      ) : (
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((item, idx) => (
            <Skeleton key={idx}></Skeleton>
          ))}
        </div>
      )}

      {/* Show feedback modal */}
      <dialog id="show_feedback_modal" className="modal">
        <form method="dialog" className="modal-box">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
          <h3 className="font-bold text-lg w-fit underline">Admin Feedback!</h3>
          <div className="mt-4">
            <p className="py-4">{feedback}</p>
          </div>
        </form>
      </dialog>
      {/* Show feedback modal */}

      {/* Show Update Modal */}

      <dialog id="show_class_update_modal" className="modal">
        <form
          onSubmit={handleSubmit(onSubmit)}
          method="dialog"
          className="modal-box"
        >
          <h3 className="font-bold text-lg mb-12">
            Update your class features!
          </h3>

          <ClassForm
            register={register}
            classInfo={classInfo}
            errors={errors}
          ></ClassForm>
        </form>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>

      {/* Show Update Modal */}
    </div>
  );
};

export default MyClasses;
