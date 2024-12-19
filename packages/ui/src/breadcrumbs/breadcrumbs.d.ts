import * as React from "react";
type BreadcrumbsProps = {
    children: React.ReactNode;
    onBack?: () => void;
    isLoading?: boolean;
};
declare const Breadcrumbs: {
    ({ children, onBack, isLoading }: BreadcrumbsProps): React.JSX.Element;
    BreadcrumbItem: React.FC<Props>;
};
type Props = {
    type?: "text" | "component";
    component?: React.ReactNode;
    link?: JSX.Element;
};
declare const BreadcrumbItem: React.FC<Props>;
export { Breadcrumbs, BreadcrumbItem };
//# sourceMappingURL=breadcrumbs.d.ts.map