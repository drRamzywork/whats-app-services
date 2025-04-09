import React from 'react';
import styles from '@/styles/components/featuresSection.module.scss';
import Image from 'next/image';
import { motion } from 'framer-motion';

const FeaturesSection = () => {
  return (
    <section className={styles.featuresSection}>
      <Image width={1434.13} height={2664.86} src="/assets/imgs/dark-bg.jpeg" alt="Background" className={styles.bgImage} />

      <div className="container ">



        <motion.h2
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          ما هي خدمات رمز
          <span className='line'>
            الإتقان؟
            <Image
              src="/assets/imgs/line.svg"
              alt="whatsapp_icon"
              width={154}
              height={16}
            />
          </span>
        </motion.h2>


        <motion.p
          className={styles.sec_title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          لتقديم خدمات الواتساب !
        </motion.p>

        <div className={styles.chatBotBox}>
          <div className={styles.shape_top}>


            <Image
              src="/assets/imgs/shape_top.svg"
              alt="shape_bottom"
              width={288}
              height={383}
              className={styles.heroImage}
            />
          </div>
          <div className={styles.imageWrapper}>
            <Image src="/assets/imgs/services_1.svg" alt="chatbot" width={500} height={500} />
          </div>
          <div className={styles.chatBotContent}>
            <h3 className={styles.topic_title}>
              خدمة المجيب الآلي عبر الواتساب شات بوت chatbot
            </h3>

            <p className='arrrow_container'>مميزات خدمة المجيب الآلي من رمز الإتقان وفوائده ومميزاته

              <span className='arrow_line'>
                <Image
                  src="/assets/imgs/arrwo_line.svg"
                  alt="whatsapp_icon"
                  width={154}
                  height={16}
                />
              </span>
            </p>

            <ul className={styles.list}>
              <li>شات بوت من رمز الإتقان يعمل 24 ساعة دون توقف.</li>
              <li>يتعامل مع العديد من المستخدمين بنفس الوقت.</li>
              <li>يجيب على الأسئلة الشائعة بسرعة ودقة.</li>
              <li>يمكنك برمجته بإجابات نصية أو صور أو فيديوهات وروابط.</li>
              <li>سهولة الربط البرمجي مع أي نظام.</li>
            </ul>
          </div>
          <div className={styles.shape_bottom}>


            <Image
              src="/assets/imgs/shape_bottom.svg"
              alt="shape_bottom"
              width={527}
              height={180}
              className={styles.heroImage}
            />
          </div>
        </div>

        <div className={styles.apiBox}>

          <div className={styles.shape_top}>


            <Image
              src="/assets/imgs/shape_top.svg"
              alt="shape_bottom"
              width={288}
              height={383}
              className={styles.heroImage}
            />
          </div>
          <div className={styles.apiContent}>
            <h3 className={styles.topic_title}>
              خدمة الربط البرمجي عبر whatsapp Api
            </h3>
            <p className='arrrow_container last'>
              إرسال الرسائل التلقائية إلى تطبيق الواتساب من موقعك أو تطبيقك بسهولة.

              <span className='arrow_line'>
                <Image
                  src="/assets/imgs/arrwo_line.svg"
                  alt="whatsapp_icon"
                  width={154}
                  height={16}
                />
              </span>
            </p>
            <ul className={styles.list}>
              <li>إرسال رسائل التذكير بالمواعيد والمستحقات</li>
              <li>إرسال أكواد التحقق OTP</li>
              <li>إرسال الفواتير بشكل إلكتروني</li>
              <li>إرسال روابط لتتبع الشحنات</li>
              <li>خفض تكاليف خدمة العملاء</li>
            </ul>
          </div>
          <div className={styles.imageWrapper}>
            <Image src="/assets/imgs/services_2.svg" alt="api" width={500} height={500} />
          </div>
          <div className={styles.shape_bottom}>


            <Image
              src="/assets/imgs/shape_bottom.svg"
              alt="shape_bottom"
              width={527}
              height={180}
              className={styles.heroImage}
            />
          </div>
        </div>

      </div>

    </section>
  );
};

export default FeaturesSection;