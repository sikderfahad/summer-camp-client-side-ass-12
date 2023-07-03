import { useEffect, useState } from "react";

const usePopularClasses = () => {
  const [popularClass, setPopularClass] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/popular-classes")
      .then((res) => res.json())
      .then((data) => setPopularClass(data));
  }, []);
  return [popularClass];
};

export default usePopularClasses;
