import React from "react";
import PropTypes from "prop-types";
import { Button as ButtonM } from "../../button/button";

/**
 * @uxpindocurl https://www.google.com
 * @uxpindescription Buttons allow users to take actions, and make choices, with a single tap.
 */
function Button(props) {
  return <ButtonM {...props}>{props.children}</ButtonM>;
}

Button.propTypes = {
  /**
   * The content of the component.
   */
  children: PropTypes.node,

  /**
   * The variant of the button, which defines its style.
   */
  variant: PropTypes.oneOf([
    "primary",
    "accent-primary",
    "outline-primary",
    "neutral-primary",
    "link-primary",
    "danger",
    "accent-danger",
    "outline-danger",
    "link-danger",
    "tertiary-danger",
    "link-neutral",
  ]).isRequired,

  /**
   * The size of the button.
   * Determines the button's padding and font size.
   */
  size: PropTypes.oneOf(["sm", "md", "lg", "xl"]).isRequired,

  /**
   * The custom class name for the button component.
   */
  className: PropTypes.string,

  /**
   * Indicates whether the button is in a loading state.
   */
  loading: PropTypes.bool,

  /**
   * Indicates whether the button is disabled.
   */
  disabled: PropTypes.bool,

  /**
   * The icon or content appended to the button.
   */
  appendIcon: PropTypes.node,

  /**
   * The icon or content prepended to the button.
   */
  prependIcon: PropTypes.node,
};

export default Button;
