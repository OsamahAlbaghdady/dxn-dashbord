import { Swiper, SwiperSlide } from 'swiper/react';

function SwiperUi(props) {
  const { children, id, style, className, spaceBetween,inView } = props;

  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={inView} 
      style={style}
      freeMode={true}         
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {children.map((e, i) => (
        <SwiperSlide key={i}>{e}</SwiperSlide>
      ))}
      {/* ... */}
    </Swiper>
  );
}

export default SwiperUi;