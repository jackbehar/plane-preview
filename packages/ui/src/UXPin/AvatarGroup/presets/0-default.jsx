import * as React from "react";
import AvatarGroup from "../AvatarGroup";
import { Avatar } from "../../../avatar/avatar";

export default (
  <AvatarGroup showTooltip size="base" max={2} uxpId="avatar-group-1">
    <Avatar fallbackText="JB" uxpId="avatar-group-avatar-1" />
    <Avatar fallbackText="AH" src="https://i.pravatar.cc" uxpId="avatar-group-avatar-2" />
    <Avatar fallbackText="MG" src="https://i.pravatar.cc/?" uxpId="avatar-group-avatar-3" />
    <Avatar fallbackText="TJ" src="https://i.pravatar.cc/?" uxpId="avatar-group-avatar-4" />
  </AvatarGroup>
);
