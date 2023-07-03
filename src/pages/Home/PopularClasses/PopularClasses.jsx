import usePopularClasses from "../../../hooks/usePopularClasses";
import Card from "../../../shared/Card/Card";

const PopularClasses = () => {
  const [popularClass] = usePopularClasses();
  console.log(popularClass);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {popularClass?.map((item) => (
          <Card key={item._id} item={item}></Card>
        ))}
      </div>
    </div>
  );
};

export default PopularClasses;
