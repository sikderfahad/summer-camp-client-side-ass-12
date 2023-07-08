import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAuth from "./useAuth";
import { baseUrl } from "../router/router";

const useManageUsers = () => {
  const { user } = useAuth();
  const {
    data: users = [],
    refetch,
    isLoading: userLoading,
  } = useQuery({
    queryKey: ["users", user?.email],
    queryFn: async () => {
      const res = await axios.get(`${baseUrl}/users`);
      return res.data;
    },
  });
  return [users, refetch, userLoading];
};

export default useManageUsers;
