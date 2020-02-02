import React, { Component } from "react";
import "../styles/Gallery.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import image_1 from "../assets/image_1.jpg";
import image_2 from "../assets/image_2.jpg";
import image_3 from "../assets/image_3.jpg";
import image_4 from "../assets/image_4.jpg";
import image_5 from "../assets/image_5.jpg";
import image_6 from "../assets/image_6.jpg";
class Gallery extends Component {
  state = {};
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      dots: true,
      // fade: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500
    };

    const settings1 = {
      className: "center",
      // centerMode: true,
      dots: true,
      // fade: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 1,
      speed: 500
    };
    return (
      <div className="Gallery1">
        <span className="heading headingGallery  link--kukuri">Gallery</span>
        <div className="GalleryOuter">
          <div className="onPC">
            <Slider {...settings}>
              <div>
                <img src={image_1} alt="" className="masonryImage" />
              </div>
              <div>
                <img src={image_2} alt="" className="masonryImage" />{" "}
              </div>
              <div>
                <img src={image_3} alt="" className="masonryImage" />{" "}
              </div>
              <div>
                <img src={image_4} alt="" className="masonryImage" />{" "}
              </div>
              <div>
                <img src={image_5} alt="" className="masonryImage" />{" "}
              </div>
              <div>
                <img src={image_6} alt="" className="masonryImage" />{" "}
              </div>
            </Slider>
          </div>

          <div className="onPhone">
            <Slider {...settings1}>
              <div>
                <img src={image_1} alt="" className="masonryImage" />
              </div>
              <div>
                <img src={image_2} alt="" className="masonryImage" />{" "}
              </div>
              <div>
                <img src={image_3} alt="" className="masonryImage" />{" "}
              </div>
              <div>
                <img src={image_4} alt="" className="masonryImage" />{" "}
              </div>
              <div>
                <img src={image_5} alt="" className="masonryImage" />{" "}
              </div>
              <div>
                <img src={image_6} alt="" className="masonryImage" />{" "}
              </div>
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;
