import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAuth from "./useAuth";
import { baseUrl } from "../router/router";
const useSelectClass = () => {
  const { user } = useAuth();
  const {
    data: selectedClass,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["selectedClass", user?.email],
    queryFn: async () => {
      const res = await axios.get(
        `${baseUrl}/booking-class?email=${user?.email}`
      );
      return res.data;
    },
  });
  return [selectedClass, isLoading, refetch];
};

export default useSelectClass;
