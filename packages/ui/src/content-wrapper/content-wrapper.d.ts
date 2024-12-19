import * as React from "react";
import { TRowVariant } from "../row/helper";
export interface ContentWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: TRowVariant;
    className?: string;
    children: React.ReactNode;
}
declare const ContentWrapper: React.ForwardRefExoticComponent<ContentWrapperProps & React.RefAttributes<HTMLDivElement>>;
export { ContentWrapper };
//# sourceMappingURL=content-wrapper.d.ts.map