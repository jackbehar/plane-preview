import React from "react";
export type TContextMenuItem = {
    key: string;
    title: string;
    description?: string;
    icon?: React.FC<any>;
    action: () => void;
    shouldRender?: boolean;
    closeOnClick?: boolean;
    disabled?: boolean;
    className?: string;
    iconClassName?: string;
};
type ContextMenuProps = {
    parentRef: React.RefObject<HTMLElement>;
    items: TContextMenuItem[];
};
export declare const ContextMenu: React.FC<ContextMenuProps>;
export {};
//# sourceMappingURL=root.d.ts.map