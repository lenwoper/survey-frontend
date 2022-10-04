import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation ,Pagination } from "swiper";
import { useNavigate } from 'react-router-dom';

const Carousel = ({
  data,
  className,
  imgClassName,
  containerClassName
}) => {
  const navigate = useNavigate()
  const redirect = React.useCallback(() => {
    navigate();
  }, [navigate]);

  return (
    <div className={containerClassName}>
      {
        data?.length > 0 ? (
          <Swiper style={{zIndex:"0"}}  navigation={true} pagination={{
            dynamicBullets: true,
        }}
            modules={[Pagination, Navigation]}
            className="mySwiper z-0" loop={true}  >
            {
              data.map((data, index) => (
                <SwiperSlide key={index}>
                  <div onClick={() => redirect(data)} >
                    <img src={data.src} alt={data?.alt ?? "laoding"} className={`w-full h-auto  ${imgClassName}`} />
                  </div>

                </SwiperSlide>
              ))
            }
          </Swiper>
        ) : '😇'
      }

    </div>
  );
}

export default Carousel;
