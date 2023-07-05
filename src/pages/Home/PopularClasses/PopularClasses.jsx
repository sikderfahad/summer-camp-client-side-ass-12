import usePopularItem from "../../../hooks/usePopularItem";
import Card from "../../../shared/Card/Card";
import Title from "../../../shared/Title/Title";

const PopularClasses = () => {
  const popularClass = usePopularItem("popular-classes");
  // console.log(popularClass);
  return (
    <div>
      <div className="">
        <Title title={"our classes"} subtitle={"Most Popular Classes"}></Title>
      </div>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {popularClass?.map((item) => (
          <Card key={item._id} item={item}></Card>
        ))}
      </div>
    </div>
  );
};

export default PopularClasses;
