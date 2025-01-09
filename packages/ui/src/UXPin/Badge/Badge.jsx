import React from "react";
import PropTypes from "prop-types";
import { Badge as BadgeM } from "../../badge/badge";

/**
 * @uxpindocurl https://www.google.com
 * @uxpindescription Badge description here.
 */
function Badge(props) {
  return <BadgeM {...props} />;
}

Badge.propTypes = {
  /**
   * The content to be displayed within the badge.
   */
  children: PropTypes.node.isRequired,
  /**
   * The variant of the badge.
   * Examples: "primary", "secondary", "success", etc.
   */
  variant: PropTypes.oneOf([
    "primary",
    "accent-primary",
    "outline-primary",
    "neutral",
    "accent-neutral",
    "outline-neutral",
    "success",
    "accent-success",
    "outline-success",
    "warning",
    "accent-warning",
    "outline-warning",
    "destructive",
    "accent-destructive",
    "outline-destructive",
  ]),

  /**
   * The size of the badge.
   * Examples: "sm", "md", "lg", etc.
   */
  size: PropTypes.oneOf(["sm", "md", "lg", "xl"]),

  /**
   * Additional CSS classes to apply to the badge.
   */
  className: PropTypes.string,

  /**
   * If true, the badge will display a loading state.
   */
  loading: PropTypes.bool,

  /**
   * If true, the badge will be disabled.
   */
  disabled: PropTypes.bool,

  /**
   * Icon to display at the end of the badge content.
   */
  appendIcon: PropTypes.node,

  /**
   * Icon to display at the start of the badge content.
   */
  prependIcon: PropTypes.node,
};

export default Badge;
