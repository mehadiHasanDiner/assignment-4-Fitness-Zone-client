import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ourGalleryData } from "../../../utils/ourGalleryData";

const Gallery = () => {
  const settings = {
    dots: true,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear",

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="my-20" data-aos="flip-up">
        <p className="text-center font-bold text-2xl mt-16 mb-6">Our Happy Customers</p>
        <Slider {...settings}>
          {ourGalleryData.map((image) => (
            <div key={image._id} className="card w-full shadow-xl relative">
              <figure>
                <img className="h-72" src={image?.url} alt="" />
              </figure>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Gallery;
