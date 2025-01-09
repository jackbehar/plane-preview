import React from "react";
import PropTypes from "prop-types";
import { SubHeading as SubHeadingM } from "../../typography/sub-heading";

/**
 * @uxpindocurl https://www.google.com
 * @uxpindescription SubHeading description here.
 */
function SubHeading(props) {
  return <SubHeadingM {...props} />;
}

SubHeading.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  noMargin: PropTypes.bool,
};

export default SubHeading;
