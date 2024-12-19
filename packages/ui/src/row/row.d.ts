import * as React from "react";
import { ERowVariant, TRowVariant } from "./helper";
export interface RowProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: TRowVariant;
    className?: string;
    children: React.ReactNode;
}
declare const Row: React.ForwardRefExoticComponent<RowProps & React.RefAttributes<HTMLDivElement>>;
export { Row, ERowVariant };
//# sourceMappingURL=row.d.ts.map