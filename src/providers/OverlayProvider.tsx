"use client";

import React, { FC, PropsWithChildren } from "react";
import { OverlayProvider as OP } from "@toss/use-overlay";

const OverlayProvider: FC<PropsWithChildren> = ({ children }) => {
  return <OP>{children}</OP>;
};

export default OverlayProvider;
