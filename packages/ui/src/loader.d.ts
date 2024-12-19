import React from "react";
type Props = {
    children: React.ReactNode;
    className?: string;
};
declare const Loader: {
    ({ children, className }: Props): React.JSX.Element;
    Item: React.FC<ItemProps>;
    displayName: string;
};
type ItemProps = {
    height?: string;
    width?: string;
    className?: string;
};
export { Loader };
//# sourceMappingURL=loader.d.ts.map