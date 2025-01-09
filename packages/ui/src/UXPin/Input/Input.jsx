import React from "react";
import PropTypes from "prop-types";
import { Input as InputM } from "../../form-fields/input";

/**
 * @uxpindocurl https://www.google.com
 * @uxpindescription Input description here.
 */
function Input(props) {
  return <InputM {...props} />;
}

Input.propTypes = {
  mode: PropTypes.oneOf(["primary", "transparent", "true-transparent"]),
  inputSize: PropTypes.oneOf(["xs", "sm", "md"]),
  hasError: PropTypes.bool,
  className: PropTypes.bool,
  autoComplete: PropTypes.oneOf(["on", "off"]),
};

export default Input;
