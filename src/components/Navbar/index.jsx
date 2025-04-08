// components/Header.js
import React from 'react';
import styles from '@/styles/navbar.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const navLinks = [
  { label: 'الرئيسية', href: '/' },
  { label: 'من نحن', href: '#about' },
  { label: 'تواصل معنا', href: '#contact' },
  { label: 'الأسئلة الأكثر شيوعًا', href: '#faq' },
];

const Navbar = () => {
  return (
    <div className="container">
      <header className={styles.header}>

        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={styles.logoWrapper}
          >
            <Link href="/">
              <Image
                src="assets/imgs/logo.svg"
                alt="رمز الإتقان"
                width={120}
                height={40}
                className={styles.logo}
              />
            </Link>
          </motion.div>

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

      </header>
    </div>
  );
};

export default Navbar;
