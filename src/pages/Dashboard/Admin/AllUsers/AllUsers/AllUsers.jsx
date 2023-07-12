import useManageUsers from "../../../../../hooks/useManageUsers";
import useTitle from "../../../../../hooks/useTitle";
import FadingLoader from "../../../../../shared/Loader/Loader";
import UserTable from "../UserTable/UserTable";
// import { useQuery } from "@tanstack/react-query";

const AllUsers = () => {
  useTitle("Manage Users");
  // const {
  //   data: users = [],
  //   refetch,
  //   isLoading,
  // } = useQuery({
  //   queryKey: ["users"],
  //   queryFn: async () => {
  //     const token = localStorage.getItem("access-token");
  //     const res = await fetch(
  //       "https://bistro-boss-dark-server.vercel.app/users/admin",
  //       {
  //         headers: {
  //           authorization: `bearer ${token}`,
  //         },
  //       }
  //     );
  //     return res.json();
  //   },
  // });

  // const userInfo = [users, refetch, isLoading];
  // console.log(users);

  const [users, refetch, userLoading] = useManageUsers();
  // const userInfo = [users];
  return (
    <div className="w-11/12 mx-auto">
      <div className="mt-20">
        <h1 className="text-3xl font-bold uppercase">
          Total users: → <span className="text-green-500">{users?.length}</span>
        </h1>

        <div className="mt-8">
          {!userLoading ? (
            <UserTable users={users} refetch={refetch}></UserTable>
          ) : (
            <div>
              <FadingLoader></FadingLoader>
              <FadingLoader></FadingLoader>
              <FadingLoader></FadingLoader>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
