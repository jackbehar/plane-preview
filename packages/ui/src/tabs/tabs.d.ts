import React, { FC } from "react";
import { LucideProps } from "lucide-react";
type TabItem = {
    key: string;
    icon?: FC<LucideProps>;
    label?: React.ReactNode;
    content: React.ReactNode;
    disabled?: boolean;
    onClick?: () => void;
};
type TTabsProps = {
    tabs: TabItem[];
    storageKey?: string;
    actions?: React.ReactNode;
    defaultTab?: string;
    containerClassName?: string;
    tabListContainerClassName?: string;
    tabListClassName?: string;
    tabClassName?: string;
    tabPanelClassName?: string;
    size?: "sm" | "md" | "lg";
    storeInLocalStorage?: boolean;
};
export declare const Tabs: FC<TTabsProps>;
export {};
//# sourceMappingURL=tabs.d.ts.map