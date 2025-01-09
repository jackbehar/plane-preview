import React from "react";
import { ButtonProps } from "../button";
/**
 * @uxpindocurl https://mui.com/components/buttons/#main-content
 * @uxpindescription Buttons allow users to take actions, and make choices, with a single tap.
 */
export interface MergeProps extends ButtonProps {
    appendIcon?: React.ReactNode;
    prependIcon?: React.ReactNode;
}
declare function Button(props: MergeProps): React.JSX.Element;
export default Button;
//# sourceMappingURL=Button.d.ts.map