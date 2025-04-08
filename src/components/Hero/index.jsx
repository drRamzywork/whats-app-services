// components/HeroSection.js
import React from 'react';
import styles from '@/styles/components/hero.module.scss';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        <div className={styles.content}>

          <p>ابدا مشروعك وتميز به </p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            مع رمز
            الاتقان

          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            لتقديم خدمات الواتساب
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
            className={styles.buttonWrapper}
          >
            <Link href="#start" className={styles.ctaBtn}>
              ابدأ الآن
            </Link>
          </motion.div>
        </div>

        <motion.div
          className={styles.imageWrapper}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <Image
            src="/assets/imgs/hero_bg.svg"
            alt="خدمات واتساب"
            width={600}
            height={600}
            className={styles.heroImage}
          />

          <Link href={'https://wa.me/+966583295079'} className={styles.whtaspp_icon}>

            <Image
              src="/assets/imgs/whatsapp_icon.svg"
              alt="whatsapp_icon"
              width={50}
              height={50}
              className={styles.heroImage}
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

