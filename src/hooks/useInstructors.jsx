import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useInstructors = () => {
  const { data: teachers, isLoading } = useQuery({
    queryKey: ["teachers"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:3000/instructors");
      return res.data;
    },
  });
  return [teachers, isLoading];
};

export default useInstructors;
