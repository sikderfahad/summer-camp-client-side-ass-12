import { AwesomeButton } from "react-awesome-button";
import { useForm } from "react-hook-form";
import Alart from "../../../../shared/Alart/Alart";
import useAuth from "../../../../hooks/useAuth";
import axios from "axios";
import { baseUrl } from "../../../../router/router";
import Swal from "sweetalert2";
import { ToastMsgSuc } from "../../../../components/Toast/ToastMsg";
import useTitle from "../../../../hooks/useTitle";

const AddClass = () => {
  useTitle("Create Class");
  const { user } = useAuth();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const img_key = import.meta.env.VITE_imageBB_api_token;
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_key}`;

  const onSubmit = (data) => {
    // console.log(data.image[0]);
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          const { email, instructor_name, class_name, available_seats, price } =
            data;

          // console.log(data);

          const classData = {
            image: imgData?.data?.display_url,
            name: class_name,
            instructor: instructor_name,
            instructorEmail: email,
            availableSeats: parseInt(available_seats),
            price: parseFloat(price),
            enrolledStudents: 0,
            status: "pending",
          };

          // console.log(classData);
          Swal.fire({
            title: "Are you sure?",
            text: `You want to be add a new class!`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#000",
            cancelButtonColor: "#d33",
            confirmButtonText: `Add a class!`,
          }).then((result) => {
            if (result.isConfirmed) {
              axios.post(`${baseUrl}/add-classes`, classData).then((res) => {
                // console.log(res.data);
                if (res.data.insertedId) {
                  reset();
                  ToastMsgSuc("You successfully add a class");
                }
              });
            }
          });
        }
      });
  };

  return (
    <div className="mt-12 w-10/12 mx-auto">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
        <div className="relative z-0 w-full mb-6 group">
          <input
            {...register("email")}
            type="email"
            name="email"
            defaultValue={user?.email}
            readOnly={true}
            id="email"
            className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="email"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Instructor Email
          </label>
        </div>

        <div className="relative z-0 w-full mb-6 group">
          <input
            {...register("instructor_name")}
            type="text"
            name="instructor_name"
            value={user?.displayName}
            // readOnly={true}
            id="instructor_name"
            className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />

          <label
            htmlFor="instructor_name"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Instructor Name
          </label>
        </div>

        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <input
              {...register("available_seats", {
                required: "Available seat is required!",
              })}
              type="number"
              name="available_seats"
              id="available_seats"
              className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            {errors.available_seats && (
              <Alart msg={errors.available_seats?.message}></Alart>
            )}
            <label
              htmlFor="available_seats"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Available Seats
            </label>
          </div>

          <div className="relative z-0 w-full mb-6 group">
            <input
              {...register("price", { required: "Price is required!" })}
              type="number"
              name="price"
              id="price"
              className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            {errors.price && <Alart msg={errors.price?.message}></Alart>}
            <label
              htmlFor="price"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Price
            </label>
          </div>
        </div>

        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <input
              {...register("class_name", {
                required: "Class name is required!",
              })}
              type="text"
              name="class_name"
              id="class_name"
              className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            {errors.class_name && (
              <Alart msg={errors.class_name?.message}></Alart>
            )}
            <label
              htmlFor="class_name"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Class Name
            </label>
          </div>

          <div className="relative z-0 w-full mb-6 group">
            <input
              {...register("image", {
                required: "Class image is required!",
              })}
              name="image"
              id="image"
              type="file"
              className="file-input file-input-bordered file-input-info w-full"
            />
            {errors.image && <Alart msg={errors.image?.message}></Alart>}
          </div>
        </div>

        <AwesomeButton type="primary">SUBMIT</AwesomeButton>
      </form>
    </div>
  );
};

export default AddClass;
