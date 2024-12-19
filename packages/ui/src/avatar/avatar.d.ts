import React from "react";
export type TAvatarSize = "sm" | "md" | "base" | "lg" | number;
type Props = {
    /**
     * The name of the avatar which will be displayed on the tooltip
     */
    name?: string;
    /**
     * The background color if the avatar image fails to load
     */
    fallbackBackgroundColor?: string;
    /**
     * The text to display if the avatar image fails to load
     */
    fallbackText?: string;
    /**
     * The text color if the avatar image fails to load
     */
    fallbackTextColor?: string;
    /**
     * Whether to show the tooltip or not
     * @default true
     */
    showTooltip?: boolean;
    /**
     * The size of the avatars
     * Possible values: "sm", "md", "base", "lg"
     * @default "md"
     */
    size?: TAvatarSize;
    /**
     * The shape of the avatar
     * Possible values: "circle", "square"
     * @default "circle"
     */
    shape?: "circle" | "square";
    /**
     * The source of the avatar image
     */
    src?: string;
    /**
     * The custom CSS class name to apply to the component
     */
    className?: string;
};
/**
 * Get the size details based on the size prop
 * @param size The size of the avatar
 * @returns The size details
 */
export declare const getSizeInfo: (size: TAvatarSize) => {
    avatarSize: string;
    fontSize: string;
    spacing: string;
};
/**
 * Get the border radius based on the shape prop
 * @param shape The shape of the avatar
 * @returns The border radius
 */
export declare const getBorderRadius: (shape: "circle" | "square") => "rounded-full" | "rounded";
/**
 * Check if the value is a valid number
 * @param value The value to check
 * @returns Whether the value is a valid number or not
 */
export declare const isAValidNumber: (value: any) => boolean;
export declare const Avatar: React.FC<Props>;
export {};
//# sourceMappingURL=avatar.d.ts.map