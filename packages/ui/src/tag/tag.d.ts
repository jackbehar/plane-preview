import * as React from "react";
import { ETagSize, ETagVariant, TTagSize, TTagVariant } from "./helper";
export interface TagProps extends React.ComponentProps<"div"> {
    variant?: TTagVariant;
    size?: TTagSize;
    className?: string;
    children: React.ReactNode;
}
declare const Tag: React.ForwardRefExoticComponent<Omit<TagProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
export { Tag, ETagVariant, ETagSize };
//# sourceMappingURL=tag.d.ts.map