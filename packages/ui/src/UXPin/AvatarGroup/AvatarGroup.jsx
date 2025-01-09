import React from "react";
import PropTypes from "prop-types";
import { AvatarGroup as AvatarGroupM } from "../../avatar/avatar-group";

/**
 * @uxpindocurl https://www.google.com
 * @uxpindescription AvatarGroups allow users to take actions, and make choices, with a single tap.
 */
function AvatarGroup(props) {
  return <AvatarGroupM {...props}>{props.children}</AvatarGroupM>;
}

AvatarGroup.propTypes = {
  /**
   * The children of the avatar group.
   * These should ideally should be `Avatar` components
   */
  children: PropTypes.node,
  /**
   * The maximum number of avatars to display.
   * If the number of children exceeds this value, the additional avatars will be replaced by a count of the remaining avatars.
   * @default 2
   */
  max: PropTypes.number,
  /**
   * Whether to show the tooltip or not
   * @default true
   */
  showTooltip: PropTypes.bool,
  /**
   * The size of the avatars
   * Possible values: "sm", "md", "base", "lg"
   * @default "md"
   */
  size: PropTypes.oneOf(["sm", "md", "base", "lg", PropTypes.number]),
};

export default AvatarGroup;
