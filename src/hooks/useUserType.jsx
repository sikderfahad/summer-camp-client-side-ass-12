// import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import axios from "axios";
import { baseUrl } from "../router/router";

const useUserType = () => {
  const { user } = useAuth();
  const {
    data,
    isLoading: userLoading,
    refetch,
  } = useQuery({
    queryKey: ["data", user?.email],
    queryFn: async () => {
      const res = await axios.get(
        `${baseUrl}/current-user?email=${user?.email}`
      );
      return res.data;
    },
  });
  const userType = data?.role;
  return [userType, userLoading, refetch];
};
export default useUserType;
