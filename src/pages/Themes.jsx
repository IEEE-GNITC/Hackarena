import React, { useRef } from "react";
import Slider from "react-slick";
import ProfileCard from "../components/UI/ProfileCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom next and previous buttons
function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} slick-next `}
      style={{
        ...style,
        display: "block",
       
        background: "#333",
        borderRadius: "50%",
        right: "15px", // Adjust this to move away from the edge
        zIndex: 2, // Ensure it's above the content
        position: "absolute", // Absolute positioning
      }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} slick-prev`}
      style={{
        ...style,
        display: "block",
        background: "#333",
      
        borderRadius: "50%",
        left: "15px", // Adjust this to move away from the edge
        zIndex: 2, // Ensure it's above the content
        position: "absolute", // Absolute positioning
      }}
      onClick={onClick}
    />
  );
}




function Themes() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
   
 
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 768, // Mobile breakpoint
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024, // Tablet breakpoint
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

  return (
    <div className="flex justify-center">
      <div className=" md:max-w-[80%] overflow-hidden m-5 py-5 md:p-10 "> {/* Use relative positioning */}
      <Slider
        ref={slider => {
          sliderRef = slider;
        }}
        {...settings}
      > 
          <div> <ProfileCard /> </div>
          <div> <ProfileCard /> </div>
          <div> <ProfileCard /> </div>
          <div> <ProfileCard /> </div>
          <div> <ProfileCard /> </div>
          <div> <ProfileCard /> </div>
          <div> <ProfileCard /> </div>
          <div> <ProfileCard /> </div>
          <div> <ProfileCard /> </div>
        </Slider>
      </div>
    </div>
  );
}

export default Themes;
