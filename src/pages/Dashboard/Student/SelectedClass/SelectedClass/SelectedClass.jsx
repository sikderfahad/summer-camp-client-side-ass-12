import useSelectClass from "../../../../../hooks/useSelectClass";
import useTitle from "../../../../../hooks/useTitle";
import FadingLoader from "../../../../../shared/Loader/Loader";
import SelectClassTable from "../SelectClassTable/SelectClassTable";

const SelectedClass = () => {
  useTitle("Selected class");
  const [selectedClass, isLoading, refetch] = useSelectClass();
  // console.log(selectedClass);
  return (
    <div className="w-11/12 mx-auto">
      <div className="mt-20">
        <h1 className="text-3xl font-bold uppercase">
          Total selected {selectedClass?.length > 1 ? "classes" : "class"} : →{" "}
          <span className="text-green-500">{selectedClass?.length}</span>
        </h1>

        <div className="mt-8">
          {!isLoading ? (
            <SelectClassTable
              selectClass={selectedClass}
              refetch={refetch}
            ></SelectClassTable>
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

export default SelectedClass;
