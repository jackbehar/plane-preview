export declare enum ECardVariant {
    WITHOUT_SHADOW = "without-shadow",
    WITH_SHADOW = "with-shadow"
}
export declare enum ECardDirection {
    ROW = "row",
    COLUMN = "column"
}
export declare enum ECardSpacing {
    SM = "sm",
    LG = "lg"
}
export type TCardVariant = ECardVariant.WITHOUT_SHADOW | ECardVariant.WITH_SHADOW;
export type TCardDirection = ECardDirection.ROW | ECardDirection.COLUMN;
export type TCardSpacing = ECardSpacing.SM | ECardSpacing.LG;
export interface ICardProperties {
    [key: string]: string;
}
export declare const containerStyle: ICardProperties;
export declare const spacings: {
    sm: string;
    lg: string;
};
export declare const directions: {
    row: string;
    column: string;
};
export declare const getCardStyle: (variant: TCardVariant, spacing: TCardSpacing, direction: TCardDirection) => string;
//# sourceMappingURL=helper.d.ts.map