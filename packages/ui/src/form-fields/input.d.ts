import * as React from "react";
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    mode?: "primary" | "transparent" | "true-transparent";
    inputSize?: "xs" | "sm" | "md";
    hasError?: boolean;
    className?: string;
    autoComplete?: "on" | "off";
}
declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;
export { Input };
//# sourceMappingURL=input.d.ts.map