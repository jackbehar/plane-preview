import React from "react";
import PropTypes from "prop-types";
import { Card as CardM } from "../../card/card";

/**
 * @uxpindocurl https://www.google.com
 * @uxpindescription Card description here.
 */
function Card(props) {
  return <CardM {...props} />;
}

Card.propTypes = {
  /**
   * The content to be displayed within the Card.
   */
  children: PropTypes.node,
  /**
   * The variant of the card.
   * Possible values: "without-shadow", "with-shadow".
   * @default "with-shadow"
   */
  variant: PropTypes.oneOf(["without-shadow", "with-shadow"]),

  /**
   * The spacing inside the card.
   * Possible values: "sm", "lg".
   * @default "lg"
   */
  spacing: PropTypes.oneOf(["sm", "lg"]),

  /**
   * The direction of the card layout.
   * Possible values: "row", "column".
   * @default "column"
   */
  direction: PropTypes.oneOf(["row", "column"]),

  /**
   * Additional CSS class names to apply to the card.
   */
  className: PropTypes.string,
};

export default Card;
