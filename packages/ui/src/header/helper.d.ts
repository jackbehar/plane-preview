export declare enum EHeaderVariant {
    PRIMARY = "primary",
    SECONDARY = "secondary",
    TERNARY = "ternary"
}
export type THeaderVariant = EHeaderVariant.PRIMARY | EHeaderVariant.SECONDARY | EHeaderVariant.TERNARY;
export interface IHeaderProperties {
    [key: string]: string;
}
export declare const headerStyle: IHeaderProperties;
export declare const minHeights: IHeaderProperties;
export declare const getHeaderStyle: (variant: THeaderVariant, setMinHeight: boolean, showOnMobile: boolean) => string;
//# sourceMappingURL=helper.d.ts.map