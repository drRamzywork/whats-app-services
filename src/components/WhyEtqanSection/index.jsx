// // components/WhyEtqanSection.js
// import React from 'react';
// import styles from '@/styles/components/whyEtqanSection.module.scss';
// import Image from 'next/image';
// import { motion } from 'framer-motion';

// const points = [
//   {
//     icon: '/assets/imgs/flash.svg',
//     text: 'نعتمد أسرع سيرفرات في العالم لتوفير أسرع و أفضل خدمة',
//     time: '9:26'
//   },
//   {
//     icon: '/assets/imgs/shield.svg',
//     text: 'نعتمد أعلى معايير تشفير البيانات لحماية معلوماتك',
//     time: '9:26'
//   },
//   {
//     icon: '/assets/imgs/users.svg',
//     text: 'نفتخر بثقة أكثر من 100 عميل وثقوا بنا',
//     time: '9:26'
//   },
//   {
//     icon: '/assets/imgs/support.svg',
//     text: 'دعم فني على مدار الساعة',
//     time: '9:26'
//   }
// ];

// const WhyEtqanSection = () => {
//   return (
//     <section className={styles.whyEtqanSection}>
//       <div className="container">
//         <motion.h2
//           className={styles.title}
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           لماذا رمز الإتقان ؟
//         </motion.h2>

//         <motion.p
//           className={styles.subtitle}
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           وما الذي يميز خدماتنا
//         </motion.p>

//         <div className={styles.chatList}>
//           {points.map((item, idx) => (
//             <div className={styles.box}>
//               <div className="icon_container">
//                 <Image src={item.icon} alt="icon" width={80} height={50} />
//               </div>

//               <motion.div
//                 key={idx}
//                 className={styles.chatBubble}
//                 initial={{ opacity: 0, x: 50 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.4, delay: idx * 0.15 }}
//               >

//                 <div className={styles.card_bg}>
//                   <Image src={'/assets/imgs/wt_bg.svg'} alt="icon" width={1026} height={110} />
//                 </div>
//                 <span className={styles.time}>
//                   <Image src={'/assets/imgs/time.svg'} alt="icon" width={50} height={36} />
//                 </span>

//                 <div className={styles.bubbleContent}>
//                   <p>{item.text}</p>
//                 </div>
//               </motion.div>
//             </div>
//           ))}



//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyEtqanSection;
// components/WhyEtqanSection.js
// components/WhyEtqanSection.js
// components/WhyEtqanSection.js
import React from 'react';
import styles from '@/styles/components/whyEtqanSection.module.scss';
import Image from 'next/image';
import { motion } from 'framer-motion';

const points = [
  {
    icon: '/assets/imgs/flash.svg',
    text: 'نعتمد أسرع سيرفرات في العالم لتوفير أسرع و أفضل خدمة',
    time: '9:26'
  },
  {
    icon: '/assets/imgs/shield.svg',
    text: 'نعتمد أعلى معايير تشفير البيانات لحماية معلوماتك',
    time: '9:26'
  },
  {
    icon: '/assets/imgs/users.svg',
    text: 'نفتخر بثقة أكثر من 100 عميل وثقوا بنا',
    time: '9:26'
  },
  {
    icon: '/assets/imgs/support.svg',
    text: 'دعم فني على مدار الساعة',
    time: '9:26'
  }
];

const WhyEtqanSection = () => {
  return (
    <section className={styles.whyEtqanSection}>
      <div className="container">
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          لماذا رمز
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
          className={styles.subtitle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          وما الذي يميز خدماتنا
        </motion.p>

        <div className={styles.chatList}>
          {points.map((item, idx) => (
            <div
              key={idx}
              className={`${styles.box} ${idx % 2 === 0 ? styles.left : styles.right}`}
            >
              <div className={styles.icon_container}>
                <Image src={item.icon} alt="icon" width={80} height={50} />
              </div>

              <motion.div
                className={styles.chatBubble}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.15 }}
              >
                <div className={styles.card_bg}>
                  <Image src={'/assets/imgs/wt_bg.svg'} alt="icon" width={1026} height={110} />
                </div>
                <span className={styles.time}>
                  <Image src={'/assets/imgs/time.svg'} alt="icon" width={50} height={36} />
                </span>

                <div className={styles.bubbleContent}>
                  <p>{item.text}</p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyEtqanSection;
