import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useSelectClass = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();

  const {
    data: selectedClass,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["selectedClass", user?.email],
    queryFn: async () => {
      // const res = await axios.get(
      //   `${baseUrl}/booking-class?email=${user?.email}`
      // );

      const res = await axiosSecure(`/booking-class?email=${user?.email}`);
      // console.log("booking class res from axios", res);
      return res.data;
    },
  });
  return [selectedClass, isLoading, refetch];
};

export default useSelectClass;
