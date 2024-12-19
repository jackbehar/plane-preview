import { FC } from "react";
export type TEmojiLogoProps = {
    in_use: "emoji" | "icon";
    emoji?: {
        value?: string;
        url?: string;
    };
    icon?: {
        name?: string;
        color?: string;
    };
};
type Props = {
    logo: TEmojiLogoProps;
    size?: number;
    type?: "lucide" | "material";
};
export declare const Logo: FC<Props>;
export {};
//# sourceMappingURL=logo.d.ts.map