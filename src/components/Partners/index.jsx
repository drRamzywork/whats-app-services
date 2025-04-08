import React from 'react';
import styles from '@/styles/components/partners.module.scss';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, FreeMode, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';

const breakpoints = {
  320: {
    slidesPerView: 1.8,
  },
  380: {
    slidesPerView: 1.8,
  },
  640: {
    slidesPerView: 3.5,
  },
  768: {
    slidesPerView: 3.5,
  },
  1024: {
    slidesPerView: 3.5,
  },
  1366: {
    slidesPerView: 3.5,
  },
  1920: {
    slidesPerView: 3.5,
  },
};

const partnenrs = [
  { img: '/assets/imgs/partners/1.jpeg' },
  { img: '/assets/imgs/partners/2.png' },
  { img: '/assets/imgs/partners/3.png' },
  { img: '/assets/imgs/partners/4.png' },

]

const Partners = () => {
  return (
    <>
      <section id="partners" className={styles.partners}>

        <div className={styles.container}>
          <div id={styles.sec_title} >
            <h3> عملائنا


              <span className='line2'>
                <Image
                  src="/assets/imgs/line.svg"
                  alt="whatsapp_icon"
                  width={154}
                  height={16}
                />
              </span>

            </h3>
          </div>
          <div className={styles.boxes_container}>
            <Swiper
              spaceBetween={48}
              breakpoints={breakpoints}
              pagination={{ clickable: true }}
              dir="rtl"
              modules={[Navigation, FreeMode, Autoplay]}
              initialSlide={1}
              className={styles.swiper_contain}
              centeredSlides={false}
              style={{ width: '100%' }}
              autoplay={{
                delay: 3000,
              }}
              loop={true}
            >
              {partnenrs.map((img, idx) =>
                <SwiperSlide key={idx}>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.7, type: 'tween' }}
                    className={styles.box}
                  >
                    <div className={styles.img_container}>
                      <Image
                        src={img.img}
                        alt={'partners'}
                        width={374}
                        height={134}
                        priority
                      />

                    </div>
                  </motion.div>
                </SwiperSlide>

              )}


            </Swiper>
          </div>
        </div>

      </section>    </>

  )
}

export default Partners