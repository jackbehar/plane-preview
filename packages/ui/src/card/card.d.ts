import * as React from "react";
import { ECardDirection, ECardSpacing, ECardVariant, TCardDirection, TCardSpacing, TCardVariant } from "./helper";
export interface CardProps {
    variant?: TCardVariant;
    spacing?: TCardSpacing;
    direction?: TCardDirection;
    className?: string;
    children: React.ReactNode;
}
declare const Card: React.ForwardRefExoticComponent<CardProps & React.RefAttributes<HTMLDivElement>>;
export { Card, ECardVariant, ECardSpacing, ECardDirection };
//# sourceMappingURL=card.d.ts.map