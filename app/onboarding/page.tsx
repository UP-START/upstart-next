"use client";

import React from "react";
import dynamic from 'next/dynamic';

const OnboardingForm = dynamic(() => import('./OnboardingForm'), { ssr: false });

const OnboardingPage: React.FC = () => {
  return (
    <div>
      <OnboardingForm />
    </div>
  );
};

export default OnboardingPage;
