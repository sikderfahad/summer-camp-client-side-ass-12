import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAuth from "./useAuth";
import { baseUrl } from "../router/router";
const useAddClasses = () => {
  const { user } = useAuth();
  const {
    data: myClasses,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["myClasses", user?.email],
    queryFn: async () => {
      const res = await axios.get(
        `${baseUrl}/add-classes?email=${user?.email}`
      );
      return res.data;
    },
  });
  return [myClasses, refetch, isLoading];
};

export default useAddClasses;
