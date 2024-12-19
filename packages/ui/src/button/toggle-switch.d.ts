import * as React from "react";
interface IToggleSwitchProps {
    value: boolean;
    onChange: (value: boolean) => void;
    label?: string;
    size?: "sm" | "md" | "lg";
    disabled?: boolean;
    className?: string;
}
declare const ToggleSwitch: React.FC<IToggleSwitchProps>;
export { ToggleSwitch };
//# sourceMappingURL=toggle-switch.d.ts.map