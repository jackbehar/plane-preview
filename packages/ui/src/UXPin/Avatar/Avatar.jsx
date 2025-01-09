import React from "react";
import PropTypes from "prop-types";
import { Avatar as AvatarM } from "../../avatar/avatar";

/**
 * @uxpindocurl https://www.google.com
 * @uxpindescription Avatar description here.
 */
function Avatar(props) {
  return <AvatarM {...props} />;
}

Avatar.propTypes = {
  /**
   * The name of the avatar, which will be displayed on the tooltip.
   */
  name: PropTypes.string,

  /**
   * The background color if the avatar image fails to load.
   */
  fallbackBackgroundColor: PropTypes.string,

  /**
   * The text to display if the avatar image fails to load.
   */
  fallbackText: PropTypes.string,

  /**
   * The text color if the avatar image fails to load.
   */
  fallbackTextColor: PropTypes.string,

  /**
   * Whether to show the tooltip or not.
   * @default true
   */
  showTooltip: PropTypes.bool,

  /**
   * The size of the avatar.
   * Possible values: "sm", "md", "base", "lg", or a number (in pixels).
   * @default "md"
   */
  size: PropTypes.oneOf(["sm", "md", "base", "lg", PropTypes.number]),

  /**
   * The shape of the avatar.
   * Possible values: "circle", "square".
   * @default "circle"
   */
  shape: PropTypes.oneOf(["circle", "square"]),

  /**
   * The source URL of the avatar image.
   */
  src: PropTypes.string,

  /**
   * The custom CSS class name to apply to the component.
   */
  className: PropTypes.string,
};

export default Avatar;
