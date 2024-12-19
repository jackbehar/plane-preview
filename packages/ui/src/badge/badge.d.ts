import * as React from "react";
import { TBadgeVariant, TBadgeSizes } from "./helper";
export interface BadgeProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: TBadgeVariant;
    size?: TBadgeSizes;
    className?: string;
    loading?: boolean;
    disabled?: boolean;
    appendIcon?: any;
    prependIcon?: any;
    children: React.ReactNode;
}
declare const Badge: React.ForwardRefExoticComponent<BadgeProps & React.RefAttributes<HTMLButtonElement>>;
export { Badge };
//# sourceMappingURL=badge.d.ts.map