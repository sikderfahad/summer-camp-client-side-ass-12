import Spinner from "../../../../components/Spinner/Spinner";
import useAddClasses from "../../../../hooks/useAddClasses";
import Card from "../../../../shared/Card/Card";
import Title from "../../../../shared/Title/Title";

const MyClasses = () => {
  const [myClasses, isLoading] = useAddClasses();
  console.log(myClasses);
  return (
    <div>
      {!isLoading ? (
        <div>
          <div className="">
            <Title
              title={"our classes"}
              subtitle={"Most Popular Classes"}
            ></Title>
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {myClasses?.map((item) => (
              <Card key={item._id} item={item} teacher={true}></Card>
            ))}
          </div>
        </div>
      ) : (
        <Spinner hFull={true} wFull={true}></Spinner>
      )}
    </div>
  );
};

export default MyClasses;
