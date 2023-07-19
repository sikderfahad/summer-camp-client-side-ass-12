import { useForm } from "react-hook-form";

const Test = () => {
  const {
    register,
    handleSubmit,
    // watch,
    // formState: { errors },
    // reset,
  } = useForm();

  const img_key = import.meta.env.VITE_imageBB_api_token;
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_key}`;

  const onSubmit = (data) => {
    console.log(data);
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => console.log(imgData.data.display_url));
  };
  return (
    <div className="mt-32">
      <div className=" w-[320px] mx-auto">
        <form
          onSubmit={handleSubmit(onSubmit)}
          // onSubmit={handledLogin}
          className="flex flex-col gap-4"
          action=""
        >
          <div className="flex items-center max-w-[320px] login-box">
            <input
              {...register("fname")}
              className="w-full p-3 border border-gray-300 rounded-lg bg-[--fieldBg] "
              type="text"
              name="fname"
              placeholder="fname Address"
              required
            />
          </div>
          <div className="flex items-center max-w-[320px] login-box">
            <input
              {...register("lname")}
              className="w-full p-3 border border-gray-300 rounded-lg bg-[--fieldBg] "
              type="text"
              name="lname"
              placeholder="lname Address"
              required
            />
          </div>
          <div className="flex items-center justify-between gap-4 max-w-[320px] login-box">
            <input
              {...register("image")}
              type="file"
              name="image"
              className="file-input file-input-bordered file-input-warning w-full max-w-xs"
            />
          </div>

          {/* Login Button */}
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Test;
