import { useEffect, useState } from "react";

const usePopularItem = (api) => {
  const [popularClass, setPopularClass] = useState([]);

  useEffect(() => {
    fetch(`https://summer-camp-music-server.vercel.app/${api}`)
      .then((res) => res.json())
      .then((data) => setPopularClass(data));
  }, [api]);
  return popularClass;
};

export default usePopularItem;
