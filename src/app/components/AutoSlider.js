"use client";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";

export default function AutoSlider() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,
    cssEase: "linear",
    pauseOnHover: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1540,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="card-cover">
          <div className="card">
            <div className="details">
              <div>Baniele Buffa</div>
              <div>Principal Designer</div>
              <div className="chips">
                <div className="chip">Animation</div>
                <div className="chip">UI</div>
                <div className="chip">Visuals</div>
              </div>
            </div>
            <Image alt="" src="/pro1.webp" fill className="img" />
          </div>
        </div>
        <div className="card-cover">
          <div className="card">
            <div className="details">
              <div>Andrea Jelic</div>
              <div>Digital Designer</div>
              <div className="chips">
                <div className="chip">Brand</div>
                <div className="chip">UI</div>
                <div className="chip"> Web</div>
              </div>
            </div>
            <Image className="img" src="/pro2.webp" alt="" fill />
          </div>
        </div>
        <div className="card-cover">
          <div className="card">
            <div className="details">
              <div>Elif Kamesoglu</div>
              <div>Brand Designer</div>
              <div className="chips">
                <div className="chip">Brand</div>
                <div className="chip">Illustration</div>
                <div className="chip"> Web</div>
              </div>
            </div>
            <Image className="img" src="/pro3.webp" alt="" fill />
          </div>
        </div>
        <div className="card-cover">
          <div className="card">
            <div className="details">
              <div>Vladimir Gruev</div>
              <div>Digital Designer</div>
              <div className="chips">
                <div className="chip">Brand</div>
                <div className="chip">Design</div>
              </div>
            </div>
            <Image className="img" src="/pro4.webp" alt="" fill />
          </div>
        </div>
        <div className="card-cover">
          <div className="card">
            <div className="details">
              <div>Lilla Bardenova</div>
              <div>Brand + Illustrator</div>
              <div className="chips">
                <div className="chip">Brand</div>
                <div className="chip">Illustration</div>
                <div className="chip"> Web</div>
              </div>
            </div>
            <Image className="img" src="/pro5.webp" alt="" fill />
          </div>
        </div>
        <div className="card-cover">
          <div className="card">
            <div className="details">
              <div>Victa Wille</div>
              <div>Digital Designer</div>
              <div className="chips">
                <div className="chip">Mobile</div>
                <div className="chip">UI</div>
                <div className="chip"> Web</div>
              </div>
            </div>
            <Image className="img" src="/pro6.webp" alt="" fill />
          </div>
        </div>
        <div className="card-cover">
          <div className="card">
            <div className="details">
              <div>Aurellen Salomon</div>
              <div>Design Director</div>
              <div className="chips">
                <div className="chip">Mobile</div>
                <div className="chip">Product</div>
                <div className="chip"> UX</div>
              </div>
            </div>
            <Image className="img" src="/pro7.webp" alt="" fill />
          </div>
        </div>
        <div className="card-cover">
          <div className="card">
            <div className="details">
              <div>Chris Owens</div>
              <div>Creative Director</div>
              <div className="chips">
                <div className="chip">Animation</div>
                <div className="chip">UI</div>
                <div className="chip"> Visuals</div>
              </div>
            </div>
            <Image className="img" src="/pro8.webp" alt="" fill />
          </div>
        </div>
        <div className="card-cover">
          <div className="card">
            <div className="details">
              <div>Mercedes Bazan</div>
              <div>Illustrator</div>
              <div className="chips">
                <div className="chip">Graphic Design</div>
                <div className="chip">Illustration</div>
              </div>
            </div>
            <Image className="img" src="/pro9.webp" alt="" fill />
          </div>
        </div>
      </Slider>
    </div>
  );
}
