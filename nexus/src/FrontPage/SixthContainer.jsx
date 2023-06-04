import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import "./Slider1.css";

// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper";

export default function SixthContainer() {
  return (
    <div
      style={{
        backgroundColor: "#f7faf1",
      }}
      className="slid"
    >
      <div className="logotext loe" style={{}}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",

            textAlign: "left",
          }}
        >
          <header>
           
           
            <h1 style={{ fontWeight: "lighter", fontSize: "25px" }}>
              Store Locator
            </h1>
          </header>
          <br />
          <div>
            <div class="Paragraph-module_set__LZFen Paragraph-module_dark__Qz-sp Paragraph-module_large__-7Gyi HeroBannerContent-module_description__UIt-1">
              <p style={{ fontWeight: "lighter" }}>
                A comprehensive guide to Aesop's plentiful offering of facial
                serums. Learn about these skin care formulations designed for
                different skin types.
              </p>
            </div>
          </div>
          <br />
          <br />
          <div>
            <a
              href="/hk/en/r/parsley-seed-intense-serum/"
              target="_self"
              style={{
                border: "1px solid gray",
                padding: "15px 100px 15px 15px",
              }}
            >
           Find a nearby store{" "}
            </a>
          </div>
        </div>
      </div>
      <Swiper
        slidesPerView={1}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          769: {
            slidesPerView: 1,
          },
        }}
        scrollbar={true}
        navigation={true}
        // pagination={{
        //   clickable: true,
        // }}
        modules={[Keyboard, Scrollbar, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <a
            draggable="false"
            href="/hk/en/p/skin/skin-kits/parsley-seed-anti-oxidant-skin-care-kit-/"
            target="_self"
            title="Link to Parsley Seed Anti-Oxidant Skin Care Kit"
          >
            <div>
              <picture>
                <source srcset="https://www.aesop.com/u1nb1km7t5q7/5U8aDtbYkybIgilkq1tJ7w/41bdf1c8b1eb863fd9ac7cde0ee1c64a/Aesop_Fashion_Walk_II_Mid_Desktop_2560x1440px.jpg" />
                <img
                  alt="A monumental basin occupies the centre of the room, with Aesop products on two sides"
                  loading="lazy"
                  src="https://www.aesop.com/u1nb1km7t5q7/5U8aDtbYkybIgilkq1tJ7w/41bdf1c8b1eb863fd9ac7cde0ee1c64a/Aesop_Fashion_Walk_II_Mid_Desktop_2560x1440px.jpg"
                />
              </picture>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            draggable="false"
            href="/hk/en/p/skin/skin-kits/parsley-seed-anti-oxidant-skin-care-kit-/"
            target="_self"
            title="Link to Parsley Seed Anti-Oxidant Skin Care Kit"
          >
            <div>
              <picture>
                <source srcset="https://www.aesop.com/u1nb1km7t5q7/5U8aDtbYkybIgilkq1tJ7w/41bdf1c8b1eb863fd9ac7cde0ee1c64a/Aesop_Fashion_Walk_II_Mid_Desktop_2560x1440px.jpg" />
                <img
                  alt="A monumental basin occupies the centre of the room, with Aesop products on two sides"
                  loading="lazy"
                  src="https://www.aesop.com/u1nb1km7t5q7/5U8aDtbYkybIgilkq1tJ7w/41bdf1c8b1eb863fd9ac7cde0ee1c64a/Aesop_Fashion_Walk_II_Mid_Desktop_2560x1440px.jpg"
                />
              </picture>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            draggable="false"
            href="/hk/en/p/skin/skin-kits/parsley-seed-anti-oxidant-skin-care-kit-/"
            target="_self"
            title="Link to Parsley Seed Anti-Oxidant Skin Care Kit"
          >
            <div>
              <picture>
                <source srcset="https://www.aesop.com/u1nb1km7t5q7/5U8aDtbYkybIgilkq1tJ7w/41bdf1c8b1eb863fd9ac7cde0ee1c64a/Aesop_Fashion_Walk_II_Mid_Desktop_2560x1440px.jpg" />
                <img
                  alt="A monumental basin occupies the centre of the room, with Aesop products on two sides"
                  loading="lazy"
                  src="https://www.aesop.com/u1nb1km7t5q7/5U8aDtbYkybIgilkq1tJ7w/41bdf1c8b1eb863fd9ac7cde0ee1c64a/Aesop_Fashion_Walk_II_Mid_Desktop_2560x1440px.jpg"
                />
              </picture>
            </div>
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
