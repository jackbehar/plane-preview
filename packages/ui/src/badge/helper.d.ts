export type TBadgeVariant = "primary" | "accent-primary" | "outline-primary" | "neutral" | "accent-neutral" | "outline-neutral" | "success" | "accent-success" | "outline-success" | "warning" | "accent-warning" | "outline-warning" | "destructive" | "accent-destructive" | "outline-destructive";
export type TBadgeSizes = "sm" | "md" | "lg" | "xl";
export interface IBadgeStyling {
    [key: string]: {
        default: string;
        hover: string;
        disabled: string;
    };
}
export declare const badgeStyling: IBadgeStyling;
export declare const getBadgeStyling: (variant: TBadgeVariant, size: TBadgeSizes, disabled?: boolean) => string;
export declare const getIconStyling: (size: TBadgeSizes) => string;
//# sourceMappingURL=helper.d.ts.map