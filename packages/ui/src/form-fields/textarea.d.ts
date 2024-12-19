import React from "react";
export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    mode?: "primary" | "transparent" | "true-transparent";
    textAreaSize?: "xs" | "sm" | "md";
    hasError?: boolean;
    className?: string;
}
declare const TextArea: React.ForwardRefExoticComponent<TextAreaProps & React.RefAttributes<HTMLTextAreaElement>>;
export { TextArea };
//# sourceMappingURL=textarea.d.ts.map