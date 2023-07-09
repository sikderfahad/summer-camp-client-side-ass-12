import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { baseUrl } from "../router/router";

const useInstructors = () => {
  const { data: teachers, isLoading } = useQuery({
    queryKey: ["teachers"],
    queryFn: async () => {
      const res = await axios.get(`${baseUrl}/instructors`);
      return res.data;
    },
  });
  return [teachers, isLoading];
};

export default useInstructors;
