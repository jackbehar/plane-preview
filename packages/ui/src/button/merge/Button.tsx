import React from "react";
import { Button as ButtonM, ButtonProps } from "../button";

/**
 * @uxpindocurl https://mui.com/components/buttons/#main-content
 * @uxpindescription Buttons allow users to take actions, and make choices, with a single tap.
 */

export interface MergeProps extends ButtonProps {
  appendIcon?: React.ReactNode;
  prependIcon?: React.ReactNode;
}

function Button(props: MergeProps) {
  return <ButtonM {...props}>{props.children}</ButtonM>;
}

export default Button;
