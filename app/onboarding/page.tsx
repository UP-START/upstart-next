import React from "react";
import OnboardingForm from "./OnboardingForm";

const OnboardingPage = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Bem-vindo à UPSTART!</h1>
      <OnboardingForm />
    </div>
  );
};

export default OnboardingPage;
