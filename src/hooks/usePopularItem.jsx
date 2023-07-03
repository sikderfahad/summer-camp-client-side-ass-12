import { useEffect, useState } from "react";

const usePopularItem = (api) => {
  const [popularClass, setPopularClass] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/${api}`)
      .then((res) => res.json())
      .then((data) => setPopularClass(data));
  }, [api]);
  return popularClass;
};

export default usePopularItem;
