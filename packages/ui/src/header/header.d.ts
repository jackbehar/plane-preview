import * as React from "react";
import { EHeaderVariant, THeaderVariant } from "./helper";
export interface HeaderProps {
    variant?: THeaderVariant;
    setHeight?: boolean;
    className?: string;
    children: React.ReactNode;
    showOnMobile?: boolean;
}
declare const Header: {
    (props: HeaderProps): React.JSX.Element;
    LeftItem: (props: HeaderProps) => React.JSX.Element;
    RightItem: (props: HeaderProps) => React.JSX.Element;
    displayName: string;
};
export { Header, EHeaderVariant };
//# sourceMappingURL=header.d.ts.map