import React from "react";
export type TPosition = "top" | "right" | "bottom" | "left" | "auto" | "auto-end" | "auto-start" | "bottom-left" | "bottom-right" | "left-bottom" | "left-top" | "right-bottom" | "right-top" | "top-left" | "top-right";
interface ITooltipProps {
    tooltipHeading?: string;
    tooltipContent: string | React.ReactNode;
    jsxContent?: string | React.ReactNode;
    position?: TPosition;
    children: JSX.Element;
    disabled?: boolean;
    className?: string;
    openDelay?: number;
    closeDelay?: number;
    isMobile?: boolean;
    renderByDefault?: boolean;
}
export declare const Tooltip: React.FC<ITooltipProps>;
export {};
//# sourceMappingURL=tooltip.d.ts.map