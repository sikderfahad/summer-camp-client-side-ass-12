import useEnrolledClass from "../../../../../hooks/useEnrolledClass";
import FadingLoader from "../../../../../shared/Loader/Loader";
import Title from "../../../../../shared/Title/Title";
import HistoryTable from "../HistoryTable/HistoryTable";

const PaymentHistory = () => {
  const [enrolledClass, enrolledClassLoading] = useEnrolledClass();
  return (
    <div>
      <div>
        <Title
          title={"history"}
          subtitle={"your payment history"}
          noDesc={true}
        ></Title>
      </div>

      <div className="mt-20">
        {!enrolledClassLoading ? (
          <HistoryTable enrolledClass={enrolledClass}></HistoryTable>
        ) : (
          <div>
            <FadingLoader></FadingLoader>
            <FadingLoader></FadingLoader>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentHistory;
