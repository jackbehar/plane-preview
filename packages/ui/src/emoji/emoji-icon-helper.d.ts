/// <reference types="react" />
import { Placement } from "@popperjs/core";
import { EmojiClickData, Theme } from "emoji-picker-react";
export declare enum EmojiIconPickerTypes {
    EMOJI = "emoji",
    ICON = "icon"
}
export declare const TABS_LIST: {
    key: EmojiIconPickerTypes;
    title: string;
}[];
export type TChangeHandlerProps = {
    type: EmojiIconPickerTypes.EMOJI;
    value: EmojiClickData;
} | {
    type: EmojiIconPickerTypes.ICON;
    value: {
        name: string;
        color: string;
    };
};
export type TCustomEmojiPicker = {
    isOpen: boolean;
    handleToggle: (value: boolean) => void;
    buttonClassName?: string;
    className?: string;
    closeOnSelect?: boolean;
    defaultIconColor?: string;
    defaultOpen?: EmojiIconPickerTypes;
    disabled?: boolean;
    dropdownClassName?: string;
    label: React.ReactNode;
    onChange: (value: TChangeHandlerProps) => void;
    placement?: Placement;
    searchDisabled?: boolean;
    searchPlaceholder?: string;
    theme?: Theme;
    iconType?: "material" | "lucide";
};
export declare const DEFAULT_COLORS: string[];
export type TIconsListProps = {
    defaultColor: string;
    onChange: (val: {
        name: string;
        color: string;
    }) => void;
    searchDisabled?: boolean;
};
/**
 * Adjusts the given hex color to ensure it has enough contrast.
 * @param {string} hex - The hex color code input by the user.
 * @returns {string} - The adjusted hex color code.
 */
export declare const adjustColorForContrast: (hex: string) => string;
//# sourceMappingURL=emoji-icon-helper.d.ts.map