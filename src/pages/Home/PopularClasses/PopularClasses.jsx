// import React from 'react';

import { useEffect, useState } from "react";
import Card from "../../../shared/Card/Card";

const PopularClasses = () => {
  const [popularClass, setPopularClass] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/popular-classes")
      .then((res) => res.json())
      .then((data) => setPopularClass(data));
  }, []);
  //   console.log(popularClass);

  return (
    <swiper-container
      slides-per-view="3"
      speed="500"
      loop="true"
      css-mode="true"
      mousewheel-force-to-axis="true"
      navigation="true"
      pagination="true"
      //   scrollbar="true"
    >
      {popularClass.map((item) => (
        <swiper-slide lazy="true" key={item._idx}>
          <Card item={item} loading="lazy"></Card>
        </swiper-slide>
      ))}
    </swiper-container>
  );
};

export default PopularClasses;

// <div>
//   <Swiper {...swiperParams}>
//     {popularClass.map((item) => (
//       <SwiperSlide key={item._idx}>
//         <Card item={item}></Card>
//       </SwiperSlide>
//     ))}
//   </Swiper>
// </div>

//   <div className="grid grid-cols-3 gap-6">
//           {popularClass.map((item) => (

//       <Card key={item._id} item={item}></Card>
//     ))}
//   </div>
