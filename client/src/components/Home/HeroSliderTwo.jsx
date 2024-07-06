import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import { SliderListRequest } from "../../API/apiRequiest";
const HeroSliderTwo = () => {
  const [slides,setSlides] = useState([]);
  useEffect(()=>{
    (async()=>{
      let result = await SliderListRequest();
      setSlides(result)
    })()
  },[])
console.log(slides)
  return (
    <Swiper
      slidesPerView={1}
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Navigation, Autoplay]}
      autoplay={{
        delay: 8000,
        disableOnInteraction: false,
      }}
      loop={true}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {slides.map((slide,i) => {
        return (
            <SwiperSlide key={i}>
              <Link to={"/details/" + slide["_id"]}>
                <div className="parent">
                  <img src={slide['img']} className="w-100"/>
                  <div className="child">
                  <button className="btn btn-outline-warning px-md-5 py-2 fw-bold">Buy Now</button>
                </div>
                </div>
              </Link>
            </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
export default HeroSliderTwo;