// import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import axios from "axios";

const useUserType = () => {
  const { user } = useAuth();
  const {
    data,
    isLoading: userLoading,
    refetch,
  } = useQuery({
    queryKey: ["users", user?.email],
    queryFn: async () => {
      const res = await axios.get(
        `https://summer-camp-music-server.vercel.app/current-user?email=${user?.email}`
      );
      return res.data;
    },
  });
  const userType = data?.role;
  return [userType, userLoading, refetch];
};
export default useUserType;

// https://summer-camp-music-server.vercel.app/
