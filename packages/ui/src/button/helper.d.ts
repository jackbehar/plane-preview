export type TButtonVariant = "primary" | "accent-primary" | "outline-primary" | "neutral-primary" | "link-primary" | "danger" | "accent-danger" | "outline-danger" | "link-danger" | "tertiary-danger" | "link-neutral";
export type TButtonSizes = "sm" | "md" | "lg" | "xl";
export interface IButtonStyling {
    [key: string]: {
        default: string;
        hover: string;
        pressed: string;
        disabled: string;
    };
}
export declare const buttonStyling: IButtonStyling;
export declare const getButtonStyling: (variant: TButtonVariant, size: TButtonSizes, disabled?: boolean) => string;
export declare const getIconStyling: (size: TButtonSizes) => string;
//# sourceMappingURL=helper.d.ts.map