// eslint-disable-next-line no-unused-vars
import React, { ReactElement, ReactNode } from "react";
import "./styles/globals.css";

export interface UXPinWrapperProps {
  children: ReactNode;
}

export default function UXPinWrapper({ children }: UXPinWrapperProps) {
  const transformedChildren = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      // Cast child to a ReactElement with specific props
      return (React.cloneElement(child as ReactElement<{ jack?: ReactNode }>));
    }
    return child; // Return non-React elements as-is
  });

  return <>{transformedChildren}</>;
}
