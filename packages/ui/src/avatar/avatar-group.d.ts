import React from "react";
import { TAvatarSize } from "./avatar";
type Props = {
    /**
     * The children of the avatar group.
     * These should ideally should be `Avatar` components
     */
    children: React.ReactNode;
    /**
     * The maximum number of avatars to display.
     * If the number of children exceeds this value, the additional avatars will be replaced by a count of the remaining avatars.
     * @default 2
     */
    max?: number;
    /**
     * Whether to show the tooltip or not
     * @default true
     */
    showTooltip?: boolean;
    /**
     * The size of the avatars
     * Possible values: "sm", "md", "base", "lg"
     * @default "md"
     */
    size?: TAvatarSize;
};
export declare const AvatarGroup: React.FC<Props>;
export {};
//# sourceMappingURL=avatar-group.d.ts.map