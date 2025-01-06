import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { Slide, Fade } from "react-awesome-reveal";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { LuCalendarRange } from "react-icons/lu";
import { RxAvatar } from "react-icons/rx";

const Banner = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://assignment-10-server-lime-nu.vercel.app/reviews");
        const data = await response.json();
        setReviews(data.slice(0, 3));
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="relative w-full">
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="w-full"
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-fit sm:h-[400px] md:h-[500px] lg:h-[500px]">
              <Fade duration={1000} triggerOnce>
                <img
                  src={review.photo}
                  alt={review.title}
                  className="object-cover w-full h-full"
                />
              </Fade>
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
                <div className="ml-4 sm:ml-8 md:ml-12 lg:ml-16 w-full sm:w-[400px] md:w-[500px] lg:w-[600px] text-white px-4 sm:px-6">
                  <Slide direction="up" duration={1000} triggerOnce>
                    <span className="bg-green-500 text-white font-semibold px-4 py-1 rounded-sm text-xs sm:text-sm md:text-base">
                      {review.genre}
                    </span>
                  </Slide>
                  <br />
                  <Slide direction="up" duration={1000} triggerOnce>
                    <span className="flex items-center mb-1 text-xs sm:text-sm md:text-base">
                      <LuCalendarRange className="text-red-600" /> Publish Year{" "}
                      {review.publishingYear}
                    </span>
                  </Slide>
                  <Slide direction="up" duration={1000} triggerOnce>
                    <h2 className="mb-6 text-base sm:text-xl md:text-2xl lg:text-3xl font-bold">
                      {review.reviewDescription.slice(0, 85)}...
                    </h2>
                  </Slide>
                  <div className="text-xs sm:text-sm md:text-base">
                    <Slide direction="up" duration={1000} triggerOnce>
                      <span className="flex gap-1 items-center">
                        <RxAvatar /> {review.userName}
                      </span>
                    </Slide>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
