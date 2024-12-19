import React, { FC } from "react";
export type TCollapsibleProps = {
    title: string | React.ReactNode;
    children: React.ReactNode;
    buttonRef?: React.RefObject<HTMLButtonElement>;
    className?: string;
    buttonClassName?: string;
    isOpen?: boolean;
    onToggle?: () => void;
    defaultOpen?: boolean;
};
export declare const Collapsible: FC<TCollapsibleProps>;
//# sourceMappingURL=collapsible.d.ts.map