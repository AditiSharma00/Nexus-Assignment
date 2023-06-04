import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./Slider1.css";

// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper";

export default function SliderOne() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          769: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
          360: {
            slidesPerView: 1,
            spaceBetween: 50,
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
          <div
            style={{
              display: "flex",
              flexDirection: "column",

              textAlign: "start",
              justifyContent: "flex-start",
              width: "100%",
              marginTop: "100px",
              marginLeft: "50px",
            }}
          >
            <header>
              <h2 style={{ fontWeight: "bold", fontSize: "medium" }}>
                Parsley Seed Skin Care
              </h2>
              <br />
              <h1 style={{ fontWeight: "lighter", fontSize: "25px" }}>
              Fortification of the highest order

              </h1>
            </header>
            <br />
            <div>
              <div class="Paragraph-module_set__LZFen Paragraph-module_dark__Qz-sp Paragraph-module_large__-7Gyi HeroBannerContent-module_description__UIt-1">
                <p style={{ fontWeight: "lighter" }}>
                Our Parsley Seed Skin Care range provides potent doses of anti-oxidant rich ingredients in formulations suited to all skin types. They are especially recommended for those in urban environments, to fortify the skin against the damaging effects of free radicals.
                </p>
              </div>
            </div>
            <br />
            <br />
            <div>
              <a href="/hk/en/r/parsley-seed-intense-serum/" target="_self">
                Discover the formulation{" "}
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <a
            draggable="false"
            href="/hk/en/p/skin/skin-kits/parsley-seed-anti-oxidant-skin-care-kit-/"
            target="_self"
            title="Link to Parsley Seed Anti-Oxidant Skin Care Kit"
            className="sourcetext"
          >
            <div className="source">
              <picture>
                <source
                  media="(min-width: 1025px)"
                  srcset="https://www.aesop.com/u1nb1km7t5q7/5vuGB9OlPfCwhd0di4sqjF/8c66786e2c82846e7e86c2e234c7c0e5/Aesop_Kits_Parsley_Seed_Anti-Oxidant_Skin_Care_Kit_Web_Large_1584x962px.png"
                />
                <source
                  media="(min-width: 640px)"
                  srcset="https://www.aesop.com/u1nb1km7t5q7/01laTaIShnTooDZD1MhA5r/3e326d7aca06bef11fd4420ee54345f5/Aesop_Kits_Parsley_Seed_Anti-Oxidant_Skin_Care_Kit_Web_Medium_1238x752px.png"
                />
                <source
                  media="(min-width: 0px)"
                  srcset="https://www.aesop.com/u1nb1km7t5q7/4o24fnPAD4jw6HOafFDejp/408c175f7e2a9bfe966b6a5ee1a52cf2/Aesop_Kits_Parsley_Seed_Anti-Oxidant_Skin_Care_Kit_Web_Small_863x524px.png"
                />
                <img
                  alt="Three Parsley Seed Skin Care formulations in amber glass bottles and a microfibre case. "
                  loading="lazy"
                  src="https://www.aesop.com/u1nb1km7t5q7/5vuGB9OlPfCwhd0di4sqjF/8c66786e2c82846e7e86c2e234c7c0e5/Aesop_Kits_Parsley_Seed_Anti-Oxidant_Skin_Care_Kit_Web_Large_1584x962px.png"
                />
              </picture>
            </div>
            <div className="stext">
              <h5 className="text2">Parsley Seed Anti-Oxidant Skin Care Kit</h5>
              <div className="text1">A trio of Parsley Seed staple</div>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            draggable="false"
            href="/hk/en/p/skin/skin-kits/parsley-seed-anti-oxidant-skin-care-kit-/"
            target="_self"
            title="Link to Parsley Seed Anti-Oxidant Skin Care Kit"
            className="sourcetext"
          >
            <div className="source">
              <picture>
                <source
                  media="(min-width: 1025px)"
                  srcset="https://www.aesop.com/u1nb1km7t5q7/5vuGB9OlPfCwhd0di4sqjF/8c66786e2c82846e7e86c2e234c7c0e5/Aesop_Kits_Parsley_Seed_Anti-Oxidant_Skin_Care_Kit_Web_Large_1584x962px.png"
                />
                <source
                  media="(min-width: 640px)"
                  srcset="https://www.aesop.com/u1nb1km7t5q7/01laTaIShnTooDZD1MhA5r/3e326d7aca06bef11fd4420ee54345f5/Aesop_Kits_Parsley_Seed_Anti-Oxidant_Skin_Care_Kit_Web_Medium_1238x752px.png"
                />
                <source
                  media="(min-width: 0px)"
                  srcset="https://www.aesop.com/u1nb1km7t5q7/4o24fnPAD4jw6HOafFDejp/408c175f7e2a9bfe966b6a5ee1a52cf2/Aesop_Kits_Parsley_Seed_Anti-Oxidant_Skin_Care_Kit_Web_Small_863x524px.png"
                />
                <img
                  alt="Three Parsley Seed Skin Care formulations in amber glass bottles and a microfibre case. "
                  loading="lazy"
                  src="https://www.aesop.com/u1nb1km7t5q7/5vuGB9OlPfCwhd0di4sqjF/8c66786e2c82846e7e86c2e234c7c0e5/Aesop_Kits_Parsley_Seed_Anti-Oxidant_Skin_Care_Kit_Web_Large_1584x962px.png"
                />
              </picture>
            </div>
            <div className="stext">
              <h5 className="text2">Parsley Seed Anti-Oxidant Skin Care Kit</h5>
              <div className="text1">A trio of Parsley Seed staple</div>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            draggable="false"
            href="/hk/en/p/skin/skin-kits/parsley-seed-anti-oxidant-skin-care-kit-/"
            target="_self"
            title="Link to Parsley Seed Anti-Oxidant Skin Care Kit"
            className="sourcetext"
          >
            <div className="source">
              <picture>
                <source
                  media="(min-width: 1025px)"
                  srcset="https://www.aesop.com/u1nb1km7t5q7/5vuGB9OlPfCwhd0di4sqjF/8c66786e2c82846e7e86c2e234c7c0e5/Aesop_Kits_Parsley_Seed_Anti-Oxidant_Skin_Care_Kit_Web_Large_1584x962px.png"
                />
                <source
                  media="(min-width: 640px)"
                  srcset="https://www.aesop.com/u1nb1km7t5q7/01laTaIShnTooDZD1MhA5r/3e326d7aca06bef11fd4420ee54345f5/Aesop_Kits_Parsley_Seed_Anti-Oxidant_Skin_Care_Kit_Web_Medium_1238x752px.png"
                />
                <source
                  media="(min-width: 0px)"
                  srcset="https://www.aesop.com/u1nb1km7t5q7/4o24fnPAD4jw6HOafFDejp/408c175f7e2a9bfe966b6a5ee1a52cf2/Aesop_Kits_Parsley_Seed_Anti-Oxidant_Skin_Care_Kit_Web_Small_863x524px.png"
                />
                <img
                  alt="Three Parsley Seed Skin Care formulations in amber glass bottles and a microfibre case. "
                  loading="lazy"
                  src="https://www.aesop.com/u1nb1km7t5q7/5vuGB9OlPfCwhd0di4sqjF/8c66786e2c82846e7e86c2e234c7c0e5/Aesop_Kits_Parsley_Seed_Anti-Oxidant_Skin_Care_Kit_Web_Large_1584x962px.png"
                />
              </picture>
            </div>
            <div className="stext">
              <h5 className="text2">Parsley Seed Anti-Oxidant Skin Care Kit</h5>
              <div className="text1">A trio of Parsley Seed staple</div>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            draggable="false"
            href="/hk/en/p/skin/skin-kits/parsley-seed-anti-oxidant-skin-care-kit-/"
            target="_self"
            title="Link to Parsley Seed Anti-Oxidant Skin Care Kit"
            className="sourcetext"
          >
            <div className="source">
              <picture>
                <source
                  media="(min-width: 1025px)"
                  srcset="https://www.aesop.com/u1nb1km7t5q7/5vuGB9OlPfCwhd0di4sqjF/8c66786e2c82846e7e86c2e234c7c0e5/Aesop_Kits_Parsley_Seed_Anti-Oxidant_Skin_Care_Kit_Web_Large_1584x962px.png"
                />
                <source
                  media="(min-width: 640px)"
                  srcset="https://www.aesop.com/u1nb1km7t5q7/01laTaIShnTooDZD1MhA5r/3e326d7aca06bef11fd4420ee54345f5/Aesop_Kits_Parsley_Seed_Anti-Oxidant_Skin_Care_Kit_Web_Medium_1238x752px.png"
                />
                <source
                  media="(min-width: 0px)"
                  srcset="https://www.aesop.com/u1nb1km7t5q7/4o24fnPAD4jw6HOafFDejp/408c175f7e2a9bfe966b6a5ee1a52cf2/Aesop_Kits_Parsley_Seed_Anti-Oxidant_Skin_Care_Kit_Web_Small_863x524px.png"
                />
                <img
                  alt="Three Parsley Seed Skin Care formulations in amber glass bottles and a microfibre case. "
                  loading="lazy"
                  src="https://www.aesop.com/u1nb1km7t5q7/5vuGB9OlPfCwhd0di4sqjF/8c66786e2c82846e7e86c2e234c7c0e5/Aesop_Kits_Parsley_Seed_Anti-Oxidant_Skin_Care_Kit_Web_Large_1584x962px.png"
                />
              </picture>
            </div>
            <div className="stext">
              <h5 className="text2">Parsley Seed Anti-Oxidant Skin Care Kit</h5>
              <div className="text1">A trio of Parsley Seed staple</div>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            draggable="false"
            href="/hk/en/p/skin/skin-kits/parsley-seed-anti-oxidant-skin-care-kit-/"
            target="_self"
            title="Link to Parsley Seed Anti-Oxidant Skin Care Kit"
            className="sourcetext"
          >
            <div className="source">
              <picture>
                <source
                  media="(min-width: 1025px)"
                  srcset="https://www.aesop.com/u1nb1km7t5q7/5vuGB9OlPfCwhd0di4sqjF/8c66786e2c82846e7e86c2e234c7c0e5/Aesop_Kits_Parsley_Seed_Anti-Oxidant_Skin_Care_Kit_Web_Large_1584x962px.png"
                />
                <source
                  media="(min-width: 640px)"
                  srcset="https://www.aesop.com/u1nb1km7t5q7/01laTaIShnTooDZD1MhA5r/3e326d7aca06bef11fd4420ee54345f5/Aesop_Kits_Parsley_Seed_Anti-Oxidant_Skin_Care_Kit_Web_Medium_1238x752px.png"
                />
                <source
                  media="(min-width: 0px)"
                  srcset="https://www.aesop.com/u1nb1km7t5q7/4o24fnPAD4jw6HOafFDejp/408c175f7e2a9bfe966b6a5ee1a52cf2/Aesop_Kits_Parsley_Seed_Anti-Oxidant_Skin_Care_Kit_Web_Small_863x524px.png"
                />
                <img
                  alt="Three Parsley Seed Skin Care formulations in amber glass bottles and a microfibre case. "
                  loading="lazy"
                  src="https://www.aesop.com/u1nb1km7t5q7/5vuGB9OlPfCwhd0di4sqjF/8c66786e2c82846e7e86c2e234c7c0e5/Aesop_Kits_Parsley_Seed_Anti-Oxidant_Skin_Care_Kit_Web_Large_1584x962px.png"
                />
              </picture>
            </div>
            <div className="stext">
              <h5 className="text2">Parsley Seed Anti-Oxidant Skin Care Kit</h5>
              <div className="text1">A trio of Parsley Seed staple</div>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            draggable="false"
            href="/hk/en/p/skin/skin-kits/parsley-seed-anti-oxidant-skin-care-kit-/"
            target="_self"
            title="Link to Parsley Seed Anti-Oxidant Skin Care Kit"
            className="sourcetext"
          >
            <div className="source">
              <picture>
                <source
                  media="(min-width: 1025px)"
                  srcset="https://www.aesop.com/u1nb1km7t5q7/5vuGB9OlPfCwhd0di4sqjF/8c66786e2c82846e7e86c2e234c7c0e5/Aesop_Kits_Parsley_Seed_Anti-Oxidant_Skin_Care_Kit_Web_Large_1584x962px.png"
                />
                <source
                  media="(min-width: 640px)"
                  srcset="https://www.aesop.com/u1nb1km7t5q7/01laTaIShnTooDZD1MhA5r/3e326d7aca06bef11fd4420ee54345f5/Aesop_Kits_Parsley_Seed_Anti-Oxidant_Skin_Care_Kit_Web_Medium_1238x752px.png"
                />
                <source
                  media="(min-width: 0px)"
                  srcset="https://www.aesop.com/u1nb1km7t5q7/4o24fnPAD4jw6HOafFDejp/408c175f7e2a9bfe966b6a5ee1a52cf2/Aesop_Kits_Parsley_Seed_Anti-Oxidant_Skin_Care_Kit_Web_Small_863x524px.png"
                />
                <img
                  alt="Three Parsley Seed Skin Care formulations in amber glass bottles and a microfibre case. "
                  loading="lazy"
                  src="https://www.aesop.com/u1nb1km7t5q7/5vuGB9OlPfCwhd0di4sqjF/8c66786e2c82846e7e86c2e234c7c0e5/Aesop_Kits_Parsley_Seed_Anti-Oxidant_Skin_Care_Kit_Web_Large_1584x962px.png"
                />
              </picture>
            </div>
            <div className="stext">
              <h5 className="text2">Parsley Seed Anti-Oxidant Skin Care Kit</h5>
              <div className="text1">A trio of Parsley Seed staple</div>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            draggable="false"
            href="/hk/en/p/skin/skin-kits/parsley-seed-anti-oxidant-skin-care-kit-/"
            target="_self"
            title="Link to Parsley Seed Anti-Oxidant Skin Care Kit"
            className="sourcetext"
          >
            <div className="source">
              <picture>
                <source
                  media="(min-width: 1025px)"
                  srcset="https://www.aesop.com/u1nb1km7t5q7/5vuGB9OlPfCwhd0di4sqjF/8c66786e2c82846e7e86c2e234c7c0e5/Aesop_Kits_Parsley_Seed_Anti-Oxidant_Skin_Care_Kit_Web_Large_1584x962px.png"
                />
                <source
                  media="(min-width: 640px)"
                  srcset="https://www.aesop.com/u1nb1km7t5q7/01laTaIShnTooDZD1MhA5r/3e326d7aca06bef11fd4420ee54345f5/Aesop_Kits_Parsley_Seed_Anti-Oxidant_Skin_Care_Kit_Web_Medium_1238x752px.png"
                />
                <source
                  media="(min-width: 0px)"
                  srcset="https://www.aesop.com/u1nb1km7t5q7/4o24fnPAD4jw6HOafFDejp/408c175f7e2a9bfe966b6a5ee1a52cf2/Aesop_Kits_Parsley_Seed_Anti-Oxidant_Skin_Care_Kit_Web_Small_863x524px.png"
                />
                <img
                  alt="Three Parsley Seed Skin Care formulations in amber glass bottles and a microfibre case. "
                  loading="lazy"
                  src="https://www.aesop.com/u1nb1km7t5q7/5vuGB9OlPfCwhd0di4sqjF/8c66786e2c82846e7e86c2e234c7c0e5/Aesop_Kits_Parsley_Seed_Anti-Oxidant_Skin_Care_Kit_Web_Large_1584x962px.png"
                />
              </picture>
            </div>
            <div className="stext">
              <h5 className="text2">Parsley Seed Anti-Oxidant Skin Care Kit</h5>
              <div className="text1">A trio of Parsley Seed staple</div>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            draggable="false"
            href="/hk/en/p/skin/skin-kits/parsley-seed-anti-oxidant-skin-care-kit-/"
            target="_self"
            title="Link to Parsley Seed Anti-Oxidant Skin Care Kit"
            className="sourcetext"
          >
            <div className="source">
              <picture>
                <source
                  media="(min-width: 1025px)"
                  srcset="https://www.aesop.com/u1nb1km7t5q7/5vuGB9OlPfCwhd0di4sqjF/8c66786e2c82846e7e86c2e234c7c0e5/Aesop_Kits_Parsley_Seed_Anti-Oxidant_Skin_Care_Kit_Web_Large_1584x962px.png"
                />
                <source
                  media="(min-width: 640px)"
                  srcset="https://www.aesop.com/u1nb1km7t5q7/01laTaIShnTooDZD1MhA5r/3e326d7aca06bef11fd4420ee54345f5/Aesop_Kits_Parsley_Seed_Anti-Oxidant_Skin_Care_Kit_Web_Medium_1238x752px.png"
                />
                <source
                  media="(min-width: 0px)"
                  srcset="https://www.aesop.com/u1nb1km7t5q7/4o24fnPAD4jw6HOafFDejp/408c175f7e2a9bfe966b6a5ee1a52cf2/Aesop_Kits_Parsley_Seed_Anti-Oxidant_Skin_Care_Kit_Web_Small_863x524px.png"
                />
                <img
                  alt="Three Parsley Seed Skin Care formulations in amber glass bottles and a microfibre case. "
                  loading="lazy"
                  src="https://www.aesop.com/u1nb1km7t5q7/5vuGB9OlPfCwhd0di4sqjF/8c66786e2c82846e7e86c2e234c7c0e5/Aesop_Kits_Parsley_Seed_Anti-Oxidant_Skin_Care_Kit_Web_Large_1584x962px.png"
                />
              </picture>
            </div>
            <div className="stext">
              <h5 className="text2">Parsley Seed Anti-Oxidant Skin Care Kit</h5>
              <div className="text1">A trio of Parsley Seed staple</div>
            </div>
          </a>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
