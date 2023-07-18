import { CreditCardIcon, TrashIcon } from "@primer/octicons-react";
import axios from "axios";
import { AwesomeButton } from "react-awesome-button";
import { baseUrl } from "../../../../../router/router";
import Swal from "sweetalert2";

const SelectClassTable = ({ selectClass, refetch }) => {
  const handleDeleteClass = (id) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          axios.delete(`${baseUrl}/booking-class/${id}`).then((res) => {
            refetch();
            if (res.data.deletedCount > 0) {
              swalWithBootstrapButtons.fire(
                "Deleted!",
                "This class has been deleted.",
                "success"
              );
            }
            // console.log(res.data);
          });
        }
      });
  };
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="text-[--registerBtnBg] font-semibold text-xl">
            <tr className="py-6">
              <th></th>
              <th className="uppercase">view</th>
              <th className="uppercase">class</th>
              <th className="uppercase">instructor</th>
              <th className="uppercase">ins. email</th>
              <th className="uppercase">price</th>
              <th className="uppercase text-center">ACTION</th>
            </tr>
          </thead>

          <tbody>
            {selectClass &&
              selectClass?.map((item, index) => (
                <tr key={index}>
                  <th>
                    <span>{index + 1}</span>
                  </th>

                  <td>
                    <img
                      className="w-[100px] h-[100px] rounded-lg"
                      src={item?.image}
                      alt=""
                    />{" "}
                  </td>

                  <td>
                    <p className="text-lg">{item?.name}</p>
                  </td>
                  <td>
                    <p className="text-lg">{item?.instructor}</p>
                  </td>

                  <td>
                    <p className="text-base">{item?.instructorEmail} </p>
                  </td>

                  <td>
                    <span className="text-lg font-semibold">
                      ${item?.price}
                    </span>
                  </td>
                  <td>
                    <span className="flex flex-col gap-3">
                      <AwesomeButton
                        ripple={true}
                        type="danger"
                        before={<TrashIcon />}
                        onPress={() => handleDeleteClass(item._id)}
                      >
                        Trash It
                      </AwesomeButton>

                      <AwesomeButton
                        type="primary"
                        ripple={true}
                        after={<CreditCardIcon size={20} />}
                      >
                        Pay Now
                      </AwesomeButton>
                    </span>
                  </td>
                </tr>
              ))}
          </tbody>
          {/* foot */}
        </table>
      </div>
    </div>
  );
};

export default SelectClassTable;
