import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturesSection from "@/components/FeaturesSection";
import WhyEtqanSection from "@/components/WhyEtqanSection";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const siteName = `  خدمات الواتساب | رمزالإتقان `;
  const imagePath = "/logo.svg";
  const siteDescrription =
    "ابدا مشروعك وتميز به مع رمز الاتقان لتقديم خدمات الواتساب";
  const siteURL = "/";

  return (
    <>
      <Head>
        <title>{siteName}</title>
        <meta charSet="UTF-8" />
        <link rel="icon" href="/logo.png" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="title" content="" />
        <link rel="icon" type="image/png" href={`${imagePath}`} />
        <meta name="theme-color" content="#275b2d" />
        <meta name="mobile-web-app-capable" content="no" />
        <meta name="application-name" content={siteName} />
        <meta name="apple-mobile-web-app-capable" content="no" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="apple-mobile-web-app-title" content={siteName} />
        <link rel="apple-touch-icon" href={`${siteURL}${imagePath}`} />
        <link rel="apple-touch-startup-image" href={`${siteURL}${imagePath}`} />
        <meta name="author" content={siteName} />
        <meta name="description" content={siteDescrription} />
        <link rel="canonical" href={`${siteURL}/`} />
        <meta name="msapplication-TileColor" content="#275b2d" />
        <meta
          name="msapplication-TileImage"
          content={`${siteURL}${imagePath}`}
        />
        <meta name="msapplication-square70x70logo" content={imagePath} />
        <meta name="msapplication-square150x150logo" content={imagePath} />
        <meta name="msapplication-wide310x150logo" content={imagePath} />
        <meta name="msapplication-square310x310logo" content={imagePath} />
        <link rel="apple-touch-icon-precomposed" href={imagePath} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={siteName} />
        <meta property="og:locale" content={"ar"} />
        <meta property="og:locale:alternate" content={"ar"} />
        <meta property="og:url" content={`${siteURL}/`} />
        <meta property="og:title" content={siteName} />
        <meta property="og:description" content={siteDescrription} />
        <meta property="og:image" content={`${siteURL}${imagePath}`} />
        <meta itemProp="name" content={siteName} />
        <meta itemProp="author" content={siteName} />
        <meta itemProp="image" content={`${siteURL}${imagePath}`} />
        <meta itemProp="description" content={siteDescrription} />
        <meta name="twitter:image" content={`${siteURL}${imagePath}`} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@" />
        <meta name="twitter:creator" content="@" />
        <meta name="twitter:title" content={siteName} />
        <meta name="twitter:image:src" content={`${siteURL}${imagePath}`} />
        <meta name="twitter:description" content={siteDescrription} />
      </Head>
      <main className={styles.main}>
        <Navbar />
        <Hero />
        <FeaturesSection />
        <WhyEtqanSection />
        <Partners />
      </main>
      <Footer />
    </>
  );
}
