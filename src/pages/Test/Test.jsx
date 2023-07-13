// // import React from "react";

// import { useForm } from "react-hook-form";
// import ClassForm from "../../shared/ClassForm/ClassForm";
// import { useEffect, useState } from "react";
// import { baseUrl } from "../../router/router";

// const Test = () => {
//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = (data, event) => {
//     event.preventDefault();
//     // console.log(data);
//   };
//   const [preClass, setPreClass] = useState("");

//   const id = "64a9547aaa5c497585a89aca";
//   useEffect(() => {
//     fetch(`${baseUrl}/all-added-classes/${id}`)
//       .then((res) => res.json)
//       .then((data) => setPreClass(data));
//   }, []);

//   console.log(preClass);
//   return (
//     <div className="h-[100vh] w-full">
//       {/* Open the modal using ID.showModal() method */}
//       <button
//         className="btn mt-32"
//         onClick={() => window.my_modal_2.showModal()}
//       >
//         open modal
//       </button>
//       <dialog id="my_modal_2" className="modal">
//         <form
//           onSubmit={handleSubmit(onSubmit)}
//           method="dialog"
//           className="modal-box"
//         >
//           <h3 className="font-bold text-lg mb-6">Hello!</h3>

//           <ClassForm
//             onSubmit={onSubmit}
//             handleSubmit={handleSubmit}
//             register={register}
//           ></ClassForm>
//         </form>
//         <form method="dialog" className="modal-backdrop">
//           <button>close</button>
//         </form>
//       </dialog>
//     </div>
//   );
// };

// export default Test;

// import React from "react";

const Test = () => {
  return <div></div>;
};

export default Test;
