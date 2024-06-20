import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Banner = () => {
  return (
    <div>
      <>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper mt-2"
        >
          <SwiperSlide>
            {' '}
            <div className="grid justify-center items-center rounded-lg md:h-[420px] h-[320px] lg:h-[600px] bg-center bg-cover bg-[linear-gradient(90deg,rgb(21,21,21,0.4),rgba(21,21,21,0.5)100%),url(/pexels-blaxtaressentials-12999087.jpg)] ">
              {' '}
              <div className="w-2/3 mx-auto text-center">
                <h2 className="text-3xl font-bold text-white leading-normal">
                  A Comprehensive Exploration of Earth's Arboreal Wonders and
                  Ecological Significance
                </h2>

                <div className="flex gap-8 justify-center mt-6">
                  <button className="btn bg-transparent font-bold  border-[#82b440] text-white">
                    Learning More
                  </button>
                  <button className="btn font-bold bg-[#82b440] border-none text-white">
                    Purchase Now
                  </button>
                </div>
              </div>
            </div>
            <img src="" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <div className="grid justify-center items-center rounded-lg md:h-[420px] h-[320px] lg:h-[600px] bg-center bg-cover bg-[linear-gradient(90deg,rgb(21,21,21,0.4),rgba(21,21,21,0.5)100%),url(/pexels-elizabeth-tr-armstrong-128038-635705.jpg)] ">
              <div className="w-2/3 mx-auto text-center">
                <h2 className="text-3xl font-bold text-white leading-normal">
                  A Comprehensive Exploration of Earth's Arboreal Wonders and
                  Ecological Significance
                </h2>

                <div className="flex gap-8 justify-center mt-6">
                  <button className="btn bg-transparent font-bold  border-[#82b440] text-white">
                    Learning More
                  </button>
                  <button className="btn font-bold bg-[#82b440] border-none text-white">
                    Purchase Now
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="grid justify-center items-center rounded-lg md:h-[420px] h-[320px] lg:h-[600px] bg-center bg-cover bg-[linear-gradient(90deg,rgb(21,21,21,0.4),rgba(21,21,21,0.5)100%),url(/pexels-enginakyurt-10364572.jpg)] ">
              {' '}
              <div className="w-2/3 mx-auto text-center">
                <h2 className="text-3xl font-bold text-white leading-normal">
                  A Comprehensive Exploration of Earth's Arboreal Wonders and
                  Ecological Significance
                </h2>

                <div className="flex gap-8 justify-center mt-6">
                  <button className="btn bg-transparent font-bold  border-[#82b440] text-white">
                    Learning More
                  </button>
                  <button className="btn font-bold bg-[#82b440] border-none text-white">
                    Purchase Now
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="grid justify-center items-center rounded-lg md:h-[420px] h-[320px] lg:h-[600px] bg-center bg-cover bg-[linear-gradient(90deg,rgb(21,21,21,0.4),rgba(21,21,21,0.5)100%),url(/pexels-pixabay-301409.jpg)] ">
              {' '}
              <div className="w-2/3 mx-auto text-center">
                <h2 className="text-3xl font-bold text-white leading-normal">
                  A Comprehensive Exploration of Earth's Arboreal Wonders and
                  Ecological Significance
                </h2>

                <div className="flex gap-8 justify-center mt-6">
                  <button className="btn bg-transparent font-bold  border-[#82b440] text-white">
                    Learning More
                  </button>
                  <button className="btn font-bold bg-[#82b440] border-none text-white">
                    Purchase Now
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="grid justify-center items-center rounded-lg md:h-[420px] h-[320px] lg:h-[600px] bg-center bg-cover bg-[linear-gradient(90deg,rgb(21,21,21,0.4),rgba(21,21,21,0.5)100%),url(/pexels-pixabay-53435.jpg)] ">
              {' '}
              <div className="w-2/3 mx-auto text-center">
                <h2 className="text-3xl font-bold text-white leading-normal">
                  A Comprehensive Exploration of Earth's Arboreal Wonders and
                  Ecological Significance
                </h2>

                <div className="flex gap-8 justify-center mt-6">
                  <button className="btn bg-transparent font-bold  border-[#82b440] text-white">
                    Learning More
                  </button>
                  <button className="btn font-bold bg-[#82b440] border-none text-white">
                    Purchase Now
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="grid justify-center items-center rounded-lg md:h-[420px] h-[320px] lg:h-[600px] bg-center bg-cover bg-[linear-gradient(90deg,rgb(21,21,21,0.4),rgba(21,21,21,0.5)100%),url(/pexels-yankrukov-4458345.jpg)] ">
              <div className="w-2/3 mx-auto text-center">
                <h2 className="text-3xl font-bold text-white leading-normal">
                  A Comprehensive Exploration of Earth's Arboreal Wonders and
                  Ecological Significance
                </h2>

                <div className="flex gap-8 justify-center mt-6">
                  <button className="btn bg-transparent font-bold  border-[#82b440] text-white">
                    Learning More
                  </button>
                  <button className="btn font-bold bg-[#82b440] border-none text-white">
                    Purchase Now
                  </button>
                </div>
              </div>
            </div>
            <img src="" alt="" />
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  );
};

export default Banner;
