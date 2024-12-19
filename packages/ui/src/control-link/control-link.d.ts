import * as React from "react";
export type TControlLink = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
    onClick: (event: React.MouseEvent<HTMLAnchorElement>) => void;
    children: React.ReactNode;
    target?: string;
    disabled?: boolean;
    className?: string;
    draggable?: boolean;
};
export declare const ControlLink: React.ForwardRefExoticComponent<React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
    onClick: (event: React.MouseEvent<HTMLAnchorElement>) => void;
    children: React.ReactNode;
    target?: string | undefined;
    disabled?: boolean | undefined;
    className?: string | undefined;
    draggable?: boolean | undefined;
} & React.RefAttributes<HTMLAnchorElement>>;
//# sourceMappingURL=control-link.d.ts.map