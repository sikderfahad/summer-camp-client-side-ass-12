import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import axios from "axios";
import { baseUrl } from "../router/router";

const useEnrolledClass = () => {
  const { user } = useAuth();
  const { data: enrolledClass, isLoading: enrolledClassLoading } = useQuery({
    queryKey: ["enrolledClass", user?.email],
    queryFn: async () => {
      const res = await axios.get(
        `${baseUrl}/enrolled-class?email=${user?.email}`
      );
      return res.data;
    },
  });
  return [enrolledClass, enrolledClassLoading];
};

export default useEnrolledClass;
