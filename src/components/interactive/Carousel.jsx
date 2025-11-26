import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

export default function GalleryCarousel({ images }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="w-full max-w-4xl mx-auto py-10">
    
      <Swiper
        modules={[Navigation, Thumbs]}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        className="rounded-xl overflow-hidden shadow-lg"
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <img
              src={img}
              alt={`Scene ${i}`}
              className="w-full h-96 object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        modules={[Thumbs]}
        onSwiper={setThumbsSwiper}
        slidesPerView={5}
        spaceBetween={10}
        watchSlidesProgress
        className="mt-5"
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <img
              src={img}
              alt={`Thumbnail ${i}`}
              className="w-full h-20 object-cover rounded-lg cursor-pointer opacity-70 hover:opacity-100 transition"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
