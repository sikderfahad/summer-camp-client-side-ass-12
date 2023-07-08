import { useEffect, useState } from "react";
import { baseUrl } from "../router/router";

const usePopularItem = (api) => {
  const [popularClass, setPopularClass] = useState([]);

  useEffect(() => {
    fetch(`${baseUrl}/${api}`)
      .then((res) => res.json())
      .then((data) => setPopularClass(data));
  }, [api]);
  return popularClass;
};

export default usePopularItem;
