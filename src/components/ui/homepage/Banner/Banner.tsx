import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useRef } from "react";
import { EffectCoverflow } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

import "./Banner.css";

// Define the props type

const Banner = () => {
  const sliderData = [
    {
      id: 1,
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1670505062582-fdaa83c23c9e?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Out beautiful gym items are in affordable price",
    },
    {
      id: 2,
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1661962342128-505f8032ea45?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Nice facility for workout training in the gym",
    },
    {
      id: 3,
      imageUrl:
        "https://images.unsplash.com/photo-1521804906057-1df8fdb718b7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "All age people are very much welcome",
    },
    {
      id: 4,
      imageUrl:
        "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "All fitness product are unique in affordable price",
    },
    {
      id: 5,
      imageUrl:
        "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Our 50% off price rate is going. Hurry up!",
    },
  ];

  const progressCircle = useRef<HTMLDivElement | any>(null);
  const progressContent = useRef<HTMLSpanElement>(null);

  const onAutoplayTimeLeft = (
    _s: SwiperType,
    time: number,
    progress: number
  ) => {
    if (progressCircle.current) {
      progressCircle.current.style.setProperty("--progress", `${1 - progress}`);
    }
    if (progressContent.current) {
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation, EffectCoverflow]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
        effect="coverflow"
      >
        {sliderData.map((slider) => (
          <SwiperSlide key={slider.id}>
            <div className="w-full max-h-[500px] relative next-icon mt-2">
              <img className="w-full" src={slider.imageUrl} alt="" />
              <div className="bg-gradient-to-t from-blue-800 opacity-80 w-full h-full absolute top-0"></div>
              <div className="text-white w-1/2 absolute top-0 md:top-1/3 right-0 p-8 lg:top-1/4">
                <h3 className=" text-2xl lg:text-5xl ">{slider.text}</h3>
                <p className=" text-xl mt-6">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. ?
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
};

export default Banner;
