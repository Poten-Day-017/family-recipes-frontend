"use client";

import React, { Suspense } from "react";
import Onboarding from "@/components/Onboarding";

// /onboarding?complete=false
// /onboarding?complete=true

const OnboardingPage = () => {
  return (
    <Suspense fallback={<div />}>
      <Onboarding />
    </Suspense>
  );
};

export default OnboardingPage;
