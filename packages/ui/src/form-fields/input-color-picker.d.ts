import * as React from "react";
export interface InputColorPickerProps {
    hasError: boolean;
    value: string | undefined;
    onChange: (value: string) => void;
    name: string;
    className?: string;
    style?: React.CSSProperties;
    placeholder: string;
}
export declare const InputColorPicker: React.FC<InputColorPickerProps>;
//# sourceMappingURL=input-color-picker.d.ts.map