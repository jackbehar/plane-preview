import React from "react";
import PropTypes from "prop-types";
import { Breadcrumbs as BreadcrumbsM } from "../../breadcrumbs/breadcrumbs";

/**
 * @uxpindocurl https://www.google.com
 * @uxpindescription Breadcrumbs description here.
 */
function Breadcrumbs(props) {
  return <BreadcrumbsM {...props} />;
}

Breadcrumbs.propTypes = {
  /**
   * The content to be displayed.
   */
  children: PropTypes.node,
  isLoading: PropTypes.bool,
  onBack: PropTypes.func,
};

export default Breadcrumbs;
