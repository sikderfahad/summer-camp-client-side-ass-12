import DateDisplay from "../../../../../components/DateDisplay/DateDisplay";

const HistoryTable = ({ enrolledClass }) => {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="text-[--registerBtnBg] font-semibold text-xl">
            <tr className="py-6">
              <th></th>
              <th className="text-center uppercase">view</th>
              <th className="text-center uppercase">class</th>
              <th className="text-center uppercase">price</th>
              <th className="text-center uppercase">Transaction ID</th>
              <th className="text-center uppercase">Time & Date</th>
            </tr>
          </thead>

          <tbody>
            {enrolledClass?.map((item, index) => (
              <tr className="text-center" key={index}>
                <th>
                  <span>{index + 1}</span>
                </th>

                <td>
                  <img
                    className="w-[100px] h-[100px] mx-auto rounded-lg"
                    src={item?.image}
                    alt=""
                  />{" "}
                </td>

                <td>
                  <p className="text-lg">{item?.name}</p>
                </td>

                <td>
                  <span className="text-lg font-semibold">${item?.price}</span>
                </td>

                <td>
                  <p className="text-base">{item?.transactionId} </p>
                </td>
                <td>
                  <div className="flex flex-col gap-2 items-center">
                    <p className="text-base">
                      <DateDisplay
                        date={item?.date.split(" ")[0]}
                      ></DateDisplay>{" "}
                    </p>
                    <p className="text-base">{item?.date.split(" ")[1]}</p>
                  </div>
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

export default HistoryTable;
