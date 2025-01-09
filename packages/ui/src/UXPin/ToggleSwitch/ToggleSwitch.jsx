import React from "react";
import PropTypes from "prop-types";
import { ToggleSwitch as ToggleSwitchM } from "../../button/toggle-switch";

/**
 * @uxpindocurl https://www.google.com
 * @uxpindescription ToggleSwitchs allow users to take actions, and make choices, with a single tap.
 */
function ToggleSwitch(props) {
  return <ToggleSwitchM {...props}>{props.children}</ToggleSwitchM>;
}

ToggleSwitch.propTypes = {
  /**
   * @uxpinbind onChange 0
   */
  value: PropTypes.bool,
  onChange: PropTypes.func,
  label: PropTypes.string,
  /**
   * The size of the ToggleSwitch.
   * Determines the ToggleSwitch's padding and font size.
   */
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

export default ToggleSwitch;
