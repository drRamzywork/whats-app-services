// // components/Header.js
// import React from 'react';
// import styles from '@/styles/navbar.module.scss';
// import Image from 'next/image';
// import Link from 'next/link';
// import { motion } from 'framer-motion';

// const navLinks = [
//   { label: 'الرئيسية', href: '/' },
//   { label: 'من نحن', href: '#about' },
//   { label: 'تواصل معنا', href: '#contact' },
//   { label: 'الأسئلة الأكثر شيوعًا', href: '#faq' },
// ];

// const Navbar = () => {
//   return (
//     <div className="container">
//       <header className={styles.header}>

//         <div className={styles.container}>
//           <motion.div
//             initial={{ opacity: 0, y: -30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className={styles.logoWrapper}
//           >
//             <Link href="/">
//               <Image
//                 src="assets/imgs/logo.svg"
//                 alt="رمز الإتقان"
//                 width={120}
//                 height={40}
//                 className={styles.logo}
//               />
//             </Link>
//           </motion.div>

//           <nav className={styles.nav}>
//             <ul>
//               {navLinks.map((link, index) => (
//                 <li key={index}>
//                   <Link href={link.href}>{link.label}</Link>
//                 </li>
//               ))}
//             </ul>
//           </nav>

//           <motion.div
//             className={styles.loginBtnWrapper}
//             initial={{ opacity: 0, x: 30 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             <Link href="/login" className={styles.loginBtn}>
//               تسجيل دخول
//             </Link>
//           </motion.div>
//         </div>

//       </header>
//     </div>
//   );
// };

// export default Navbar;

import React, { useState } from 'react';
import styles from '@/styles/navbar.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'الرئيسية', href: '#' },
  { label: 'من نحن', href: '#about' },
  { label: 'تواصل معنا', href: '#contact' },
  { label: 'الأسئلة الأكثر شيوعًا', href: '#faq' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className="container">
      <header className={styles.header}>
        <div className={styles.container}>
          {/* Logo wrapper becomes the toggle button */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={styles.logoWrapper}
            onClick={toggleMenu}
            style={{ cursor: 'pointer' }}
          >
            <Image
              src="/assets/imgs/logo.svg"
              alt="رمز الإتقان"
              width={120}
              height={40}
              className={styles.logo}
            />
          </motion.div>

          {/* Desktop nav and button */}
          <nav className={styles.nav}>
            <ul>
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <motion.div
            className={styles.loginBtnWrapper}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/login" className={styles.loginBtn}>
              تسجيل دخول
            </Link>
          </motion.div>
        </div>

        {/* Mobile dropdown menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className={styles.mobileMenu}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {navLinks.map((link, index) => (
                <Link key={index} href={link.href} onClick={() => setMenuOpen(false)}>
                  {link.label}
                </Link>
              ))}
              <Link href="/login" className={styles.loginBtn} onClick={() => setMenuOpen(false)}>
                تسجيل دخول
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
};

export default Navbar;
