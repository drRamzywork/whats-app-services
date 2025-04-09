// components/LottieWrapper.jsx
'use client'; // Not required in pages/ but fine for clarity

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

const LottieWrapper = ({ animationData, ...rest }) => {
  return <Lottie animationData={animationData} {...rest} />;
};

export default LottieWrapper;
