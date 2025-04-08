import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react';
import styles from '@/styles/footer.module.scss'
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_bg}>
        <Image
          src="/assets/imgs/footer_bg.jpeg"
          alt="رمز الإتقان"
          width={720}
          height={228}
          className={styles.logo}
        />

      </div>
      <div className="container">
        <div className={styles.sec_container}>
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={styles.logoWrapper}
          >
            <Link href="/">
              <Image
                src="/assets/imgs/logo.svg"
                alt="رمز الإتقان"
                width={256}
                height={122}
                className={styles.logo}
              />
            </Link>
          </motion.div>



          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={styles.contact}
          >
            <h5>معلومات اللإتصال</h5>

            <Link href="mailto:info@rmz.one">
              <Image
                src="/assets/imgs/email.svg"
                alt="رمز الإتقان"
                width={19.5}
                height={15}
                className={styles.logo}
              />

              <p>
                info@rmz.one
              </p>
            </Link>


            <Link href="phone:011976576">
              <Image
                src="/assets/imgs/email.svg"
                alt="رمز الإتقان"
                width={19.5}
                height={15}
                className={styles.logo}
              />

              <p>
                05657654567-011976576
              </p>
            </Link>

          </motion.div>



          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={styles.contact}
          >
            <h5>من نحن</h5>

            <Link href="/">
              <h5>
                أعملنا
              </h5>
            </Link>


            <Link href="ظ">


              <h5>
                خدماتنا
              </h5>
            </Link>

          </motion.div>




          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={styles.contact2}
          >

            <div className={styles.icons_container}>

              <Link className="icon" href="mailto:info@rmz.one">
                <Image
                  src="/assets/imgs/email_dark.svg"
                  alt="رمز الإتقان"
                  width={24}
                  height={24}
                  className={styles.logo}
                />


              </Link>

              <Link className="icon" target="_blank" href="x.com">
                <Image
                  src="/assets/imgs/x.svg"
                  alt="رمز الإتقان"
                  width={24}
                  height={24}
                  className={styles.logo}
                />


              </Link>

              <Link className="icon" target="_blank" href="x.com">
                <Image
                  src="/assets/imgs/wb_dark.svg"
                  alt="رمز الإتقان"
                  width={24}
                  height={24}
                  className={styles.logo}
                />


              </Link>

            </div>



            <Image
              src="/assets/imgs/2030.png"
              alt="رمز الإتقان"
              width={71}
              height={47}
              className={styles.logo}
            />

          </motion.div>



        </div>

      </div>
      <div className={styles.copyrights}>
        <p>جميع الحقوق مؤسسة رمز الاتقان ©2025</p>
      </div>
    </footer >

  )
}

export default Footer