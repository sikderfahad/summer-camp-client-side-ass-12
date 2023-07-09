import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { baseUrl } from "../router/router";

const useAllClasses = () => {
  const {
    data: allClass = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["allClass"],
    queryFn: async () => {
      const res = await axios.get(`${baseUrl}/all-added-classes`);
      return res.data;
    },
  });
  return [allClass, isLoading, refetch];
};

export default useAllClasses;
