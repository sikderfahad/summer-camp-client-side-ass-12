import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import axios from "axios";
import { baseUrl } from "../router/router";
// import useAxiosSecure from "./useAxiosSecure";

const useEnrolledClass = () => {
  const { user } = useAuth();
  // const [axiosSecure] = useAxiosSecure();
  const { data: enrolledClass = [], isLoading: enrolledClassLoading } =
    useQuery({
      queryKey: ["enrolledClass", user?.email],
      queryFn: async () => {
        const res = await axios.get(
          `${baseUrl}/enrolled-class?email=${user?.email}`
        );

        // const res = await axiosSecure(`/enrolled-class?email=${user?.email}`);
        // console.log("enrolled class res from axios", res);
        return res.data;
      },
    });
  return [enrolledClass, enrolledClassLoading];
};

export default useEnrolledClass;
