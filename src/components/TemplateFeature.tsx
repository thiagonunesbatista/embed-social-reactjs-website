import { Container } from "./Container";
import { FaArrowRight } from "react-icons/fa6";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const TemplateFeature = () => {
  return (
    <section className="bg-[#111827]">
      <Container className="h-[61rem] flex flex-col justify-center gap-11">
        <div className="text-white flex flex-col items-center gap-6 h-auto">
          <h1 className="font-roboto-900 text-6xl max-w-xl text-center max-sm:text-4xl">
            Get started with one of our templates
          </h1>
          <p className="text-lg text-center max-w-xl max-sm:text-base">
            Start with one of our pre-designed templates. Create, personalize
            and embed the perfect widget for any page or campaign in just
            minutes.
          </p>
          <button className="bg-[#0066FF] p-5 flex items-center gap-3 w-56 mt-11">
            See templates demos <FaArrowRight />
          </button>
        </div>

        <div className="h-auto">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={20}
            slidesPerView={1}
            slidesPerGroup={1}
            navigation
            loop
            pagination={{ clickable: true }}
            breakpoints={{
              550: {
                slidesPerView: 2,
                slidesPerGroup: 2,
              },
              800: {
                slidesPerView: 4,
                slidesPerGroup: 4,
              },
            }}
          >
            <SwiperSlide className="h-96 bg-white rounded-2xl max-[550px]:h-[28rem]">
              <img
                src="/src/assets/slides/Slide1.png"
                className="rounded-2xl max-[600px]:h-fit max-lg:w-full"
              />
              <div className="mx-6 mt-4">
                <h1 className="text-4xl font-roboto-900 mb-3">Popover</h1>
                <p className="text-lg">
                  Showcases on every page that gives the feel of a living &
                  breathing website.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="h-96 bg-white rounded-2xl max-[550px]:h-[28rem]">
              <img
                src="/src/assets/slides/Slide2.png"
                className="rounded-2xl max-[600px]:h-fit max-lg:w-full"
              />
              <div className="mx-6 mt-4">
                <h1 className="text-4xl font-roboto-900 mb-3">Highlights</h1>
                <p className="text-lg">
                  Mimics the same functionality of the Instagram Highlights on
                  your website.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="h-96 bg-white rounded-2xl max-[550px]:h-[28rem]">
              <img
                src="/src/assets/slides/Slide3.png"
                className="rounded-2xl max-[600px]:h-fit max-lg:w-full"
              />
              <div className="mx-6 mt-4">
                <h1 className="text-4xl font-roboto-900 mb-3">Slider</h1>
                <p className="text-lg">
                  Display your stories in a full slideshow layout that catches
                  your visitors' attention.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="h-96 bg-white rounded-2xl max-[550px]:h-[28rem]">
              <img
                src="/src/assets/slides/Slide4.png"
                className="rounded-2xl max-[600px]:h-fit max-lg:w-full"
              />
              <div className="mx-6 mt-4">
                <h1 className="text-4xl font-roboto-900 mb-3">Gallery</h1>
                <p className="text-lg">
                  One widget with multiple stories and embed them as a full
                  story gallery on your website.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="h-96 bg-white rounded-2xl max-[550px]:h-[28rem]">
              <img
                src="/src/assets/slides/Slide1.png"
                className="rounded-2xl max-[600px]:h-fit max-lg:w-full"
              />
              <div className="mx-6 mt-4">
                <h1 className="text-4xl font-roboto-900 mb-3">Popover</h1>
                <p className="text-lg">
                  Showcases on every page that gives the feel of a living &
                  breathing website.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="h-96 bg-white rounded-2xl max-[550px]:h-[28rem]">
              <img
                src="/src/assets/slides/Slide2.png"
                className="rounded-2xl max-[600px]:h-fit max-lg:w-full"
              />
              <div className="mx-6 mt-4">
                <h1 className="text-4xl font-roboto-900 mb-3">Highlights</h1>
                <p className="text-lg">
                  Mimics the same functionality of the Instagram Highlights on
                  your website.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="h-96 bg-white rounded-2xl max-[550px]:h-[28rem]">
              <img
                src="/src/assets/slides/Slide3.png"
                className="rounded-2xl max-[600px]:h-fit max-lg:w-full"
              />
              <div className="mx-6 mt-4">
                <h1 className="text-4xl font-roboto-900 mb-3">Slider</h1>
                <p className="text-lg">
                  Display your stories in a full slideshow layout that catches
                  your visitors' attention.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="h-96 bg-white rounded-2xl max-[550px]:h-[28rem]">
              <img
                src="/src/assets/slides/Slide4.png"
                className="rounded-2xl max-[600px]:h-fit max-lg:w-full"
              />
              <div className="mx-6 mt-4">
                <h1 className="text-4xl font-roboto-900 mb-3">Gallery</h1>
                <p className="text-lg">
                  One widget with multiple stories and embed them as a full
                  story gallery on your website.
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </Container>
    </section>
  );
};
