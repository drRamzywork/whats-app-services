// // components/FeaturesSection.js
// import React from 'react';
// import styles from '@/styles/components/featuresSection.module.scss';
// import Image from 'next/image';
// import { motion } from 'framer-motion';

// const features = [
//   {
//     icon: '/imgs/feature1.png',
//     title: 'الرسائل التلقائية',
//     description: 'إجابات فورية على أسئلة العملاء على مدار الساعة عبر الذكاء الاصطناعي.'
//   },
//   {
//     icon: '/imgs/feature2.png',
//     title: 'التفاعل الفوري',
//     description: 'استقبال وتنظيم استفسارات العملاء بشكل لحظي واحترافي.'
//   },
//   {
//     icon: '/imgs/feature3.png',
//     title: 'إرسال جماعي',
//     description: 'إرسال آلاف الرسائل بضغطة زر لحملات تسويقية قوية.'
//   },
//   {
//     icon: '/imgs/feature4.png',
//     title: 'لوحة تحكم متكاملة',
//     description: 'إحصائيات وتقارير لحظية لمتابعة الأداء والتحسين المستمر.'
//   },
// ];

// const FeaturesSection = () => {
//   return (
//     <section className={styles.featuresSection}>
//       <div className="container">
// <motion.h2
//   className={styles.sectionTitle}
//   initial={{ opacity: 0, y: 30 }}
//   whileInView={{ opacity: 1, y: 0 }}
//   transition={{ duration: 0.6 }}
// >
//   ما هي خدمات رمز
//   <span className='line'>
//     الإتقان؟
//     <Image
//       src="/assets/imgs/line.svg"
//       alt="whatsapp_icon"
//       width={154}
//       height={16}
//     />
//   </span>
// </motion.h2>

//         <motion.p
//           className={styles.sec_title}
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           لتقديم خدمات الواتساب !
//         </motion.p>

//         <div className={styles.featuresWrapper}>
//           {features.map((feature, index) => (
//             <motion.div
//               className={styles.featureBox}
//               key={index}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: index * 0.2 }}
//             >
//               <div className={styles.iconWrapper}>
//                 <Image src={feature.icon} alt={feature.title} width={64} height={64} />
//               </div>
//               <h3>{feature.title}</h3>
//               <p>{feature.description}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FeaturesSection;

// components/FeaturesSection.js
import React from 'react';
import styles from '@/styles/components/featuresSection.module.scss';
import Image from 'next/image';
import { motion } from 'framer-motion';

const FeaturesSection = () => {
  return (
    <section className={styles.featuresSection}>
      <div className="container">



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
        </div>

        <div className={styles.apiBox}>
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
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;