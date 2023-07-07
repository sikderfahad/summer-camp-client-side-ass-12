import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAuth from "./useAuth";

const useManageUsers = () => {
  const { user } = useAuth();
  const {
    data: users = [],
    refetch,
    isLoading: userLoading,
  } = useQuery({
    queryKey: ["users", user?.email],
    queryFn: async () => {
      const res = await axios.get(
        "https://summer-camp-music-server.vercel.app/users"
      );
      //   console.log("axios user: ", res.data);
      return res.data;
    },
  });
  //   console.log("tanstack user: ", users);
  return [users, refetch, userLoading];
};

export default useManageUsers;
