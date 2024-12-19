export declare enum ETagVariant {
    OUTLINED = "outlined"
}
export declare enum ETagSize {
    SM = "sm",
    LG = "lg"
}
export type TTagVariant = ETagVariant.OUTLINED;
export type TTagSize = ETagSize.SM | ETagSize.LG;
export interface ITagProperties {
    [key: string]: string;
}
export declare const containerStyle: ITagProperties;
export declare const sizes: {
    sm: string;
    lg: string;
};
export declare const getTagStyle: (variant: TTagVariant, size: TTagSize) => string;
//# sourceMappingURL=helper.d.ts.map